import { TITLE_IMG } from '../constants';

// JSX => React.createElement => Object => HTML(DOM)
const title = (
	<a href='/'>
		<img className='logo' alt='logo' src={TITLE_IMG} />
	</a>
);

// Functional Component => Its just a function
const Header = () => {
	return (
		<div className='header'>
			{title}
			<div className='nav-items'>
				<ul>
					<li>Home</li>
					<li>Abount</li>
					<li>Contact</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;