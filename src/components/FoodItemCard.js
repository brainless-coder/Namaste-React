import { CARD_IMG_CDN_URL } from "../constants";

const FoodItemCard = ({imageId, name, defaultPrice, price, description, category}) => {
	return (
		<div className='card w-56 p-2 m-2 shadow-lg bg-pink-50'>
			<img alt='food-image' src={CARD_IMG_CDN_URL + imageId} />
			<h2 className='font-bold text-xl'>{name}</h2>
			<h3 className="font-semibold text-lg">{category}</h3>
			<h4 className="font-semibold text-lg">Rupees: {defaultPrice ? defaultPrice/100 : price/100}</h4>
      {description && <h3>{description}</h3>}
		</div>
	);
}

export default FoodItemCard;