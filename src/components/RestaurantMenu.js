import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CARD_IMG_CDN_URL, MENU_API } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const data = await fetch(MENU_API + resId);
    const json = await data.json ();
    setRestaurantInfo(json?.data);
  }

  if (!restaurantInfo)  return <Shimmer />;

  const { name, cloudinaryImageId, locality, avgRating, costForTwoMessage, cuisines } = restaurantInfo?.cards?.[0]?.card?.card?.info;
  const { itemCards } = (restaurantInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards) ? (restaurantInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card) : (restaurantInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card);
  console.log("restaurantInfo  ====>>>> ", restaurantInfo);

  return (
    <div className="menu">
      <div>
        <h2>{name}</h2>
        <img src={CARD_IMG_CDN_URL + cloudinaryImageId}/>
        <h3>{locality}</h3>
        <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
        <h3>{avgRating} Stars</h3>
      </div>
      <div>
      <h2>Menu</h2>
        <ul>
          {
            itemCards.map(item => (
              <div key={item.card.info.id}>
                <li>{item.card.info.name}: Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                <p>{item.card.info.category}</p>
              </div>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default RestaurantMenu; 