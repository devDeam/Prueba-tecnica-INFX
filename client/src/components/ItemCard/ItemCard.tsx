import { Card } from "antd";
import { formatPrice } from "../../utils/formatPrice.tsx";
import Rating from "../Rating/Rating.tsx";
import { ItemCardProps } from "../../types/item.d.tsx";

const { Meta } = Card;

const ItemCard = ({ item, averageRating }: ItemCardProps) => {
  return (
    <Card
      hoverable
      style={{ width: 240, margin: "10px" }}
      cover={<img alt={item.name} src={item.imageUrl} />}
      title={item.brand}
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
