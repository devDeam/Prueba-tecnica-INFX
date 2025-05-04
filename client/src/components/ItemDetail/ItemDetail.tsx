// ItemDetail.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Item } from "../../types/item.d.tsx";
import Rating from "../Rating/Rating.tsx";
import { Card, Space, Carousel, Image, Spin, Button } from "antd";
import NotFoundPage from "../../pages/NotFound.tsx";
import Description from "./Description.tsx";
import { calculateAverageRating } from "../../utils/calculateAverageRating.ts";
import BackButton from "../BackButton/BackButton.tsx";

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState<Item | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchItem = async () => {
      setError(null);
      setLoading(true);
      try {
        const url = `${import.meta.env.VITE_API_URL}/items/${id}`
        const fetchData = fetch(url).then(
          async (res) => {
            if (!res.ok) {
              const errData = await res.json();
              throw new Error(
                errData.message || "Error al mostrar el producto"
              );
            }
            return res.json();
          }
        );

        const [data] = await Promise.all([fetchData]);
        setItem(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Error desconocido");
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchItem();
  }, [id]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <Spin size="large" />
      </div>
    );
  }

  if (error)
    return <NotFoundPage title="Ha ocurrido un error" msg={error} btn={true} />;

  if (!item)
    return <NotFoundPage title="404" msg="Producto no encontrado" btn={true} />;

  return (
    <div className="item-detail">
      <Space direction="vertical">
        <h2>
          {item.brand} {item.name}
        </h2>
        <Card
          title={
            <div style={{ position: "relative" }}>
              <Carousel autoplay arrows>
                {item.imageUrl.map((url, index) => (
                  <div
                    key={index}
                    style={{
                      height: 300,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src={url}
                      width={1000}
                      height={500}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          }
          style={{ width: 1000 }}
        >
          <Description item={item} />

          <div style={{ marginTop: "16px", marginBottom: "16px" }}>
            <Space
              style={{ marginTop: "16px", marginBottom: "16px" }}
              direction="horizontal"
            >
              <BackButton label="Volver" type="default" size="large" />
              <Button type="primary" size="large" disabled={item.stock == 0}>
                Agregar al carrito
              </Button>
            </Space>
          </div>
          <div>
            <p> ¿Ya compraste este equipo? Queremos saber tu calificación</p>
          </div>
          <Rating
            readonly={false}
            rating={calculateAverageRating(item.rating)}
            itemId={item._id}
          />
        </Card>
      </Space>
    </div>
  );
};

export default ItemDetail;
