import { TITLE_IMG } from '../constants';
import { useState } from 'react';

const loggedInUser = () => {
	return true;
}

// JSX => React.createElement => Object => HTML(DOM)
const title = (
	<a href='/'>
		<img className='logo' alt='logo' src={TITLE_IMG} />
	</a>
);

// Functional Component => Its just a function
const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	
	return (
		<div className='header'>
			{title}
			<h1>Food Villa</h1>
			<div className='nav-items'>
				<ul>
					<li>Home</li>
					<li>Abount</li>
					<li>Contact</li>
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