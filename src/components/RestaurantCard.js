import { CARD_IMG_CDN_URL } from "../constants";

const RestaurantCard = ({cloudinaryImageId, name, cuisines, avgRating}) => {
	return (
		<div className='card'>
			<img alt='restaurant-logo' src={CARD_IMG_CDN_URL + cloudinaryImageId} />
			<h2>{name}</h2>
			<h3>{cuisines.join(', ')}</h3>
			<h4>{avgRating} Stars</h4>
		</div>
	);
}

export default RestaurantCard;