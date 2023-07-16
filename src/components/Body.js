import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
	return restaurants.filter(restaurant => {
		const restaurantName = restaurant?.data?.name?.toLowerCase();
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
		const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1356803&lng=72.9297528&page_type=DESKTOP_WEB_LISTING");
		const jsonData = await response.json();
		console.log(jsonData);
		setAllRestaurants(jsonData?.data?.cards?.[2]?.data?.data?.cards);
		setFilteredRestaurants(jsonData?.data?.cards?.[2]?.data?.data?.cards);
	}

	console.log("Page render");

	// Not render component (Early return)
	if (!allRestaurants)	return null;

	return (allRestaurants?.length === 0) ? (
		<Shimmer/>
	) : (
		<>
			<div classNam e="search-container">
				<input 
					className="search-input" 
					type="text" 
					placeholder="Search" 
					value= {searchText} 
					onChange={(e) => {
						setSearchText(e.target.value);
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
							return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
							})
						)
				}
			</div>
		</>
	);
}

export default Body;