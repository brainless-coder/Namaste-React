import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import LoginForm from './components/LoginForm';
import Profile from './components/ProfileClass';
import Shimmer from './components/Shimmer';
import UserContext from './utils/userContext';
const Instamart = lazy(() => import('./components/Instamart'));
const About = lazy(() => import('./components/About'));
// Lazy Loading 
// Code Splitting
// Chunking
// Dynamic Bundling
// On Demand Loading
// Dynamic Import

const AppLayout = () => {
	// ye user jo hai, backend se aayega useEffect me
	const [user, setUser] = useState({
		name: "Arvind Prime",
		email: "arvind.singh@gmail.com"
	});
	return (
		<>
			<UserContext.Provider 
				value={{
					user: user,
					setUser: setUser
				}}	
			>

				<Header/>
				{/* ye outlet me haame jo dalna hai wo daal sakte hai hum, createBrowserRouter ke config ke according, so uss config ke children ke hisab se yha different pages render honge, so jo bhi children me hoga, uske according ye outlet apna populate hoga */}
				<Outlet />
				<Footer/>
			</UserContext.Provider>
		</>
	);
}

// createBrowserRouter se humlog routes define karte hai, usme ek array me apan config dete hai, aur wo config ke basis pe apna routing kaam karta hai page me
const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		errorElement: <Error />,
		// yha apan children de sakte hai aise karke, aur ye children bhi same config leta hai
		// all these childrens will go in the Outlet according to the route 
		children: [
			{
				path: '/',
				element: <Body />
			},
			{
				path: '/about',	// agar aage me / lgayenge to wo root se path lega
				element: <Suspense fallback={<h1>Loading......</h1>}>
						<About />
					</Suspense>,
				children: [{
					path: 'profile',	// parent_path/{path} ==>> localhost:1234//about/profile
					element: <Profile />
				}]
			},
			{
				path: '/contact',
				element: <Contact />
			},
			{
				// this is my dynamic URL, it will work according to the ID
				path: '/restaurant/:resId',
				element: <RestaurantMenu />
			},
			{
				path: '/login',
				element: <LoginForm />
			},
			{
				path: '/instamart',
				element: <Suspense fallback={<Shimmer />}>
						<Instamart />
					</Suspense>
			}
		]
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// Routerprovider jo hai, uska use karke hamen apne app ko apne routes pass kiye hai
root.render(<RouterProvider router={appRouter} />); 