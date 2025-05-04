import { Card } from "antd";
import { formatPrice } from "../../utils/formatPrice.ts";
import Rating from "../Rating/Rating.tsx";
import { ItemCardProps } from "../../types/item.d.tsx";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const ItemCard = ({ item, averageRating }: ItemCardProps) => {
  const navigate = useNavigate();
  const handleClickCard = () => {
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
