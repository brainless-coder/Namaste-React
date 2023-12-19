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
		const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1356803&lng=72.9297528&page_type=DESKTOP_WEB_LISTING");
		const jsonData = await response.json();
		setAllRestaurants(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
		setFilteredRestaurants(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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