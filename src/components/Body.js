import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
	return restaurants.filter(restaurant => {
		const restaurantName = restaurant?.info?.name?.toLowerCase();
		return restaurantName?.includes(searchText.toLowerCase());
	});
}

const Body = () => {
	const [searchText, setSearchText] = useState("");
	const [allRestaurants, setAllRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);

	useEffect(() => {
		getRestaurants();
	}, []); 

	async function getRestaurants() {
		// const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1356803&lng=72.9297528&page_type=DESKTOP_WEB_LISTING");
		const response = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D19.1356803%26lng%3D72.9297528%26page_type%3DDESKTOP_WEB_LISTING");
		const jsonData = await response.json();
		const restaurantData = jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle ? (jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants) : (jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
		setAllRestaurants(restaurantData);
		setFilteredRestaurants(restaurantData);
	}

	console.log("Body render");

	// Not render component (Early return)
	if (!allRestaurants)	return null;

	return (allRestaurants?.length === 0) ? (
		<Shimmer/>
	) : (
		<>
			<div className="search-container">
				<input 
					className="search-input" 
					type="text" 
					placeholder="Search" 
					value= {searchText} 
					onChange={(e) => {
						setSearchText(e.target.value);
						const data = filterData(searchText, allRestaurants);
						setFilteredRestaurants(data);
						if (e.target.value === '')	setFilteredRestaurants(allRestaurants)
					}} 
				/>
				<button 
					className="search-btn" 
					onClick={() => {
						const data = filterData(searchText, allRestaurants);
						setFilteredRestaurants(data);
					}}
				>
					Search
				</button>
			</div>
			<div className='restaurant-list'>
				{
					filteredRestaurants?.length === 0 ? (
						<h1>No Restaurants match your filter!!</h1>
						) : (
							filteredRestaurants.map(restaurant => {
							return <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id} >
								<RestaurantCard {...restaurant.info} />
							</Link>;
							})
						)
				}
			</div>
		</>
	);
}

export default Body;