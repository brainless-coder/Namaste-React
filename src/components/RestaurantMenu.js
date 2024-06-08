import { useParams } from "react-router-dom";
import { CARD_IMG_CDN_URL, MENU_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurantData from "../utils/useRestaurantData";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurantData(resId);

  if (!restaurant)  return <Shimmer />
  const { name, cloudinaryImageId, locality, cuisines, costForTwoMessage, avgRating, itemCards } = restaurant;

  return (
    <div className="menu">
      <div>
        <h2>{name}</h2>
        <img src={CARD_IMG_CDN_URL + cloudinaryImageId} alt="Restaurant Banner"/>
        <h3>{locality}</h3>
        <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
        <h3>{avgRating} Stars</h3>
      </div>
      <div>
      <h2>Menu</h2>
        <ul>
          { itemCards ? (
              itemCards.map(item => (
                <div key={item.card.info.id}>
                  <li>{item.card.info.name}: Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                  <p>{item.card.info.category}</p>
                </div>
              ))
            ) : (
              <h2>No Menu Items Available</h2>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default RestaurantMenu; 