import { CART_IMG_URL } from "../utils/constant";

const Card = (prop) => {
  let { name, cloudinaryImageId, cuisines, avgRating, area } =
    prop.resData.info;
  return (
    <div className="cart-body">
      <img
        className="rest-img"
        src={CART_IMG_URL + cloudinaryImageId}
        alt="#"
      />
      <h3 className="rest-name">{name}</h3>
      <p className="rating">⭐{avgRating}</p>
      <p className="items">{cuisines.join(", ")}</p>
      <h4 className="location">{area}</h4>
    </div>
  );
};

export default Card;
