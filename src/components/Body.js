import RestaurantCard from "./RestaurantCard";
import { useContext, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import UserContext from "../utils/userContext";


const Body = () => {
	const [searchText, setSearchText] = useState("");
	const { allRestaurants, filteredRestaurants, searchRestaurants } = useRestaurantList();
	const { user, setUser } = useContext(UserContext);

	// Not render component (Early return)
	if (!allRestaurants)	return null;

	return (allRestaurants?.length === 0) ? (
		<Shimmer/>
	) : (
		<>
			<div className="search-container p-3 m-2 bg-pink-200">
				<input 
					className="search-input focus:bg-green-200 p-2 m-2 border border-green-600" 
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
				<input
					className="p-2 m-2 border border-green-600"
					value={user.name}
					onChange={(e) => setUser({
						...user,
						name: e.target.value,
					})}
				/>
				<input
					className="p-2 m-2 border border-green-600"
					value={user.email}
					onChange={(e) => setUser({
						...user,
						email: e.target.value,
					})}
				/>
			</div>
			<div className='restaurant-list flex flex-wrap bg-purple-200 p-2 m-2'>
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