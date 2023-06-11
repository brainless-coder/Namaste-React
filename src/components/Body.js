import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState } from "react";

function filterData(searchText, restaurants) {
	return restaurantList.filter(restaurant => restaurant.data.name.includes(searchText));
}

const Body = () => {
	const [searchText, setSearchText] = useState();
	const [restaurants, setRestaurants] = useState(restaurantList);

	return (
		<>
			<div className="search-container">
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
						const data = filterData(searchText, restaurants);
						setRestaurants(data);
					}}
				>
					Search
				</button>
			</div>
			<div className='restaurant-list'>
				{
					restaurants.map(restaurant => {
						return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
					})
				}
			</div>
		</>
	);
}

export default Body;