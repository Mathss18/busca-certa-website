import { FaRegStar, FaStar } from "react-icons/fa";

type Props = {
  rating: number;
};

const StarRating: React.FC<Props> = ({ rating }) => {
  const totalStars = 5;
  return (
    <span className="flex justify-between w-auto">
      {Array(totalStars)
        .fill(0)
        .map((_, i) => (i < rating ? <FaStar color="yellow" className="mx-1" key={i} /> : <FaRegStar className="mx-1" key={i} />))}
    </span>
  );
};

export default StarRating;
