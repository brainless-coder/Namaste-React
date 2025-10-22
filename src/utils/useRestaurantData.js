import { useState, useEffect } from "react";
import { MENU_URL } from "../constants";

const useRestaurantData = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setRestaurantInfo(json?.data);
  }

  if (!restaurantInfo) return null;

  const { name, cloudinaryImageId, locality, avgRating, costForTwoMessage, cuisines } = restaurantInfo?.cards?.[2]?.card?.card?.info;
  const { itemCards } = (restaurantInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards) ? (restaurantInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card) : (restaurantInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card);

  return {
    name, cloudinaryImageId, locality, avgRating, costForTwoMessage, cuisines, itemCards
  };
}

export default useRestaurantData;