import { useState, useContext } from 'react';
import Logo from '../assets/img/foodvilla.jpeg';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/userContext';
import { useSelector } from 'react-redux';

// JSX => React.createElement => Object => HTML(DOM)
const title = (
	<a href='/'>
		<img className='h-24 p-2' alt='logo' src={Logo} />
	</a>
);

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const isOnline = useOnline();
	const { user } = useContext(UserContext);
	const cartItems = useSelector(store => store.cart.items);
	console.log(cartItems)

	return (
		<div className='flex justify-between bg-pink-200 shadow-lg md:bg-yellow-300 sm:bg-blue-400'>
			{title}
			<span className="p-8 font-bold text-red-700 text-xl">{user.name}</span>
			<div className='nav-items'>
				<ul className='flex py-8'>
					<li className='px-2'><Link to="/">Home</Link></li>
					<li className='px-2'><Link to="/about">About</Link></li>
					<li className='px-2'><Link to="/contact">Contact</Link></li>
					<li className='px-2'><Link to='/instamart'>Instamart</Link></li>
					<li className='px-2'>{isOnline ? "✅" : "🔴"}</li>
					<li className='px-2'><Link to='/cart'>Cart- {cartItems.length} items</Link></li>
					{isLoggedIn ? (
							<button className='px-2 py-1 mx-2 bg-purple-800 text-white rounded-lg' 
								onClick={() => setIsLoggedIn(false)}>
									<Link to='/login'>Logout</Link>
							</button>
						) : (
							<button className='px-2 py-1 mx-2 bg-purple-800 text-white rounded-lg' 
								onClick={() => setIsLoggedIn(true)}>
									<Link to="/">Login</Link>
							</button>
						)
					}
				</ul>
			</div>
		</div>
	);
}

export default Header;