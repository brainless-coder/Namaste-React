export function filterData(searchText, restaurants) {
	return restaurants.filter(restaurant => {
		const restaurantName = restaurant?.info?.name?.toLowerCase();
		return restaurantName?.includes(searchText.toLowerCase());
	});
}