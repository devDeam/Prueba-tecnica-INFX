import { Rate } from "antd";

interface RatingProps {
  rating: number;
  readonly: boolean;
}
const Rating = ({ rating, readonly }: RatingProps) => {
  return (
    <div>
      {readonly ? (
        <Rate disabled allowHalf defaultValue={rating} />
      ) : (
        <Rate allowHalf defaultValue={rating} />
      )}
    </div>
  );
};

export default Rating;
