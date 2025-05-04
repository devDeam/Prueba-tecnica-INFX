import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Item } from "../../types/item.d.tsx";
import Rating from "../Rating/Rating.tsx";
import { Card, Space, Carousel, Image, Spin, Button } from "antd";
import NotFoundPage from "../../pages/NotFound.tsx";
import Description from "./Description.tsx";
import { calculateAverageRating } from "../../utils/calculateAverageRating.ts";
import BackButton from "../BackButton/BackButton.tsx";

/**
 * El componente `ItemDetail` Muestra los detalles completos del producto seleccionado en la card de ItemList,
 * incluyendo sus imágenes, información detallada, disponibilidad, y permite al usuario calificarlo
 * o agregarlo al carrito(Funcionalidad no existente aún). También maneja estados de carga, errores y producto no encontrado.
 * El ID del producto se obtiene desde la URL mediante `useParams`, ya que se redirige desde ItemCard y los datos se recuperan
 * desde la API creada.
 *
 */

const ItemDetail = () => {
  const { id } = useParams(); // Se obtiene el id de la URL
  const [item, setItem] = useState<Item | null>(null); // Para guardar la informacion traida en el fetch
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
  // Este hook hace que se ejecute el fetch al renderizar la vista automaticamente, o al cambiar el id de la url
    const fetchItem = async () => {
      setError(null);
      setLoading(true);
      try {
        const url = `${import.meta.env.VITE_API_URL}/items/${id}`;
        const fetchData = fetch(url).then(async (res) => {
          if (!res.ok) {
            // Si el API responde con error
            const errData = await res.json();
            throw new Error(errData.message || "Error al mostrar el producto");
          }
          return res.json(); // Envia la respuesta como json
        });

        const [data] = await Promise.all([fetchData]); // Espera que se tenga toda la información del fetch
        setItem(data); // guarda la información
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

    if (id) fetchItem(); // Si se encontró un id en la URL se ejecuta la busqueda
  }, [id]);

  if (loading) {
    // mientras loading sea true se va a mostrar el spin
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <Spin size="large" />
      </div>
    );
  }

  if (error)
    return <NotFoundPage title="Ha ocurrido un error" msg={error} btn={true} />; // Se carga pagina de error

  if (!item)
    return <NotFoundPage title="404" msg="Producto no encontrado" btn={true} />; // Pagina cuando no se encuentra un item

  return (
    <div className="item-detail">
      <Space direction="vertical" style={{ width: "100%" }}>
        <h2 style={{ textAlign: "center" }}>
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
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src={url}
                      style={{
                        width: "100%",  // Ocupa el 100% del ancho disponible
                        maxHeight: "500px",  // Limita la altura máxima
                        objectFit: "contain",  // Asegura que la imagen mantenga su proporción
                      }}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          }
          style={{
            width: "100%",
            maxWidth: "1000px",  // Limita el ancho máximo para evitar que se extienda demasiado
            margin: "0 auto",
          }}
        >
          <Description item={item} />

          <div style={{ marginTop: "16px", marginBottom: "16px" }}>
            <Space
              style={{
                justifyContent: "space-between",
                flexDirection: "row", // Alinea horizontalmente los botones en pantallas grandes
              }}
              direction="horizontal"
            >
              <BackButton label="Volver" type="default" size="large" />
              <Button type="primary" size="large" disabled={item.stock == 0}>
                Agregar al carrito
              </Button>
            </Space>
          </div>
          <div>
            <p>¿Ya compraste este equipo? Queremos saber tu calificación</p>
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
