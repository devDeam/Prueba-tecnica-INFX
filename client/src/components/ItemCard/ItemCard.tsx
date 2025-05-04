import { Card } from "antd";
import { formatPrice } from "../../utils/formatPrice.ts";
import Rating from "../Rating/Rating.tsx";
import { ItemCardProps } from "../../types/item.d.tsx";
import { useNavigate } from "react-router-dom";

/**
 * Este componente `ItemCard` renderiza una tarjeta de producto donde se muestra la información básica del producto,
 * incluyendo imagen, nombre, descripción, precio, calificación y categoría.
 * También permite la navegación a una página de detalles del producto al hacer clic en la tarjeta.
 *
 * @param {Object} props.item - El objeto (Array) que contiene la información del producto a mostrar.
 * @param {string} props.item._id - El ID único del producto.
 * @param {string} props.item.name - El nombre del producto.
 * @param {string} props.item.description - Descripción del producto.
 * @param {string} props.item.brand - La marca del producto.
 * @param {string[]} props.item.imageUrl - Un array de URLs de imágenes del producto.
 * @param {number} props.item.price - El precio del producto.
 * @param {string} props.item.category - La categoría del producto.
 * @param {number} props.averageRating - La calificación del producto lista para ser mostrada
 *
 */

const { Meta } = Card;

const ItemCard = ({ item, averageRating }: ItemCardProps) => {
  const navigate = useNavigate();
  const handleClickCard = () => {
    // Función para navegar a la página de detalles del producto o item al dar click en una card
    navigate(`/items/${item._id}`)
  };
  return (
    <Card
      hoverable
      style={{ width: 240, margin: "10px" }}
      cover={<img alt={item.name} src={item.imageUrl[0]} />}
      title={item.brand}
      onClick = {handleClickCard}
    >
      <Meta
        title={`${item.name}`}
        description={
          <div>
            <p>{item.description}</p>
            <p>
              <strong>{formatPrice(item.price)}</strong>
            </p>
            <Rating rating={averageRating} readonly={true} />
            <p>Categoría: {item.category}</p>
          </div>
        }
      />
    </Card>
  );
};

export default ItemCard;
