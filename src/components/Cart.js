import { useDispatch, useSelector } from "react-redux";
import FoodItemCard from "./FoodItemCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // bas jo data chahiye, usse hi subscribe karo yha se, poore store ko subscribe mat karo
  const cartItems = useSelector(store => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return <div className="bg-purple-200 p-2 m-2">
    <h1 className="font-bold text-3xl"> Cart Items - {cartItems.length}</h1>
    <button 
      className="py-2 px-3 m-2 bg-purple-800 text-white rounded-lg hover:bg-blue-500" 
      onClick={handleClearCart}
    >
      Clear Cart
    </button>
    <div className='flex flex-wrap p-2 m-2'>
      {
        cartItems.map(item => <FoodItemCard key={item.id} {...item} />)
      }
    </div>
  </div>
}

export default Cart;