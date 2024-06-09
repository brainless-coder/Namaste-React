import { useState } from 'react';
import Logo from '../assets/img/foodvilla.jpeg';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';

// JSX => React.createElement => Object => HTML(DOM)
const title = (
	<a href='/'>
		<img className='h-24 p-2' alt='logo' src={Logo} />
	</a>
);

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const isOnline = useOnline();
	
	return (
		<div className='flex justify-between bg-pink-200 shadow-lg md:bg-yellow-300 sm:bg-blue-400'>
			{title}
			<div className='nav-items'>
				<ul className='flex py-8'>
					<li className='px-3'><Link to="/">Home</Link></li>
					<li className='px-3'><Link to="/about">About</Link></li>
					<li className='px-3'><Link to="/contact">Contact</Link></li>
					<li className='px-3'>Cart</li>
					<li className='px-3'><Link to='/instamart'>Instamart</Link></li>
					<li className='px-3'>{isOnline ? "✅" : "🔴"}</li>
					{isLoggedIn ? (
							<button className='px-3 py-1 mx-2 bg-purple-800 text-white rounded-lg' 
								onClick={() => setIsLoggedIn(false)}>
									<Link to='/login'>Logout</Link>
							</button>
						) : (
							<button className='px-3 py-1 mx-2 bg-purple-800 text-white rounded-lg' 
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