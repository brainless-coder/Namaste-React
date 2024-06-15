import { useParams } from "react-router-dom";
import { CARD_IMG_CDN_URL, MENU_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurantData from "../utils/useRestaurantData";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurantData(resId);
  const dispatch = useDispatch();

  const handleAddFoodItem = (item) => {
    dispatch(addItem(item));
  }

  if (!restaurant)  return <Shimmer />
  const { name, cloudinaryImageId, locality, cuisines, costForTwoMessage, avgRating, itemCards } = restaurant;

  return (
    <div className="menu flex bg-purple-200 p-2 m-2">
      <div className="p-2 m-2">
        <h2 className="font-bold text-2xl my-2">{name}</h2>
        <img className="my-2 py-2" src={CARD_IMG_CDN_URL + cloudinaryImageId} alt="Restaurant Banner"/>
        <h3 className="font-semibold text-xl">{locality}</h3>
        <h3 className="font-medium text-xl">{cuisines.join(", ")} - {costForTwoMessage}</h3>
        <h3 className="font-medium text-xl">{avgRating} Stars</h3>
      </div>
      <div className="p-2 m-2">
      <h2 className="font-bold text-2xl py-2 my-2">Menu</h2>
        <ul className="list-decimal">
          { itemCards ? (
              itemCards.map(item => (
                <div className="p-1" key={item.card.info.id}>
                  <li className="font-medium">{item.card.info.name}: Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                  <p>
                    {item.card.info.category} 
                    <button 
                      className='px-2 py-1 mx-3 bg-blue-500 text-white rounded-lg' 
                      onClick={() => handleAddFoodItem(item.card.info)}
                    >
                      Add Item
                    </button>
                  </p>
                </div>
              ))
            ) : (
              <h2 className="text-3xl font-bold">No Menu Items Available</h2>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default RestaurantMenu; 