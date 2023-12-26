import { useState, useEffect } from "react";
import { RESTAURANT_LIST_URL } from "../constants";
import { filterData } from "./helper";

const useRestaurantList = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);

	useEffect(() => {
		getRestaurants();
	}, []); 

	async function getRestaurants() {
		const response = await fetch(RESTAURANT_LIST_URL);
		const jsonData = await response.json();
		const restaurantData = jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle ? (jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants) : (jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
		setAllRestaurants(restaurantData);
		setFilteredRestaurants(restaurantData);
	}

  const searchRestaurants = (searchText) => {
    const data = filterData(searchText, allRestaurants);
		setFilteredRestaurants(data);
  }

  return {
    allRestaurants, filteredRestaurants, searchRestaurants
  }
}

export default useRestaurantList;