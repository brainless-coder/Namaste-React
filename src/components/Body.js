import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";


const Body = () => {
	const [searchText, setSearchText] = useState("");
	const { allRestaurants, filteredRestaurants, searchRestaurants } = useRestaurantList();

	// Not render component (Early return)
	if (!allRestaurants)	return null;

	return (allRestaurants?.length === 0) ? (
		<Shimmer/>
	) : (
		<>
			<div className="search-container p-3 bg-pink-200 my-2">
				<input 
					className="search-input focus:bg-green-200 p-2 m-2" 
					type="text" 
					placeholder="Search" 
					value= {searchText} 
					onChange={(e) => {
						setSearchText(e.target.value);
						searchRestaurants(searchText);
					}} 
				/>
				<button 
					className="py-2 px-3 m-2 bg-purple-800 text-white rounded-lg hover:bg-yellow-500" 
					onClick={() => searchRestaurants(searchText)}
				>
					Search
				</button>
			</div>
			<div className='restaurant-list flex flex-wrap bg-purple-200'>
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