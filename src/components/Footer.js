import { useContext } from "react";
import UserContext from "../utils/userContext";

const Footer = () => {
	const { user } = useContext(UserContext);
	return (
		<div className="bg-pink-100 p-2 m-2">
			<h1 className="font-bold text-xl text-center">Made with ❤️ by {user.name}</h1>
			<p className="font-semibold text-center">Brainless Coders : {user.email}</p>
		</div>
	);
}

export default Footer;