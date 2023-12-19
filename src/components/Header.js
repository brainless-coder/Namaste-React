import { useState } from 'react';
import Logo from '../assets/img/foodvilla.jpeg';
import { Link } from 'react-router-dom';

// JSX => React.createElement => Object => HTML(DOM)
const title = (
	<a href='/'>
		<img className='logo' alt='logo' src={Logo} />
	</a>
);

// Functional Component => Its just a function
const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	
	console.log("Header render");
	return (
		<div className='header'>
			{title}
			<h1>Food Villa</h1>
			<div className='nav-items'>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/contact">Contact</Link></li>
					<li>Cart</li>
					{isLoggedIn ? 
						(<button onClick={() => setIsLoggedIn(false)}>Logout</button>) : 
						(<button onClick={() => setIsLoggedIn(true)}>Login</button>)
					}
				</ul>
			</div>
		</div>
	);
}

export default Header;