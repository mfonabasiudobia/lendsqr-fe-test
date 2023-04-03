import { RatingModel } from "./Models/RatingModel";
import { Rating } from "react-simple-star-rating";

const UserRating: React.FC<RatingModel> = () => {
  return (
    <Rating
      initialValue={1}
      size={15}
      iconsCount={3}
      readonly={true}
      emptyColor="#fff"
      SVGstrokeColor="#E9B200"
      SVGstorkeWidth={1}
    />
  );
};

export default UserRating;
