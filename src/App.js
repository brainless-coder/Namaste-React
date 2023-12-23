import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import LoginForm from './components/LoginForm';

const AppLayout = () => {
	return (
		<>
			<Header/>
			{/* ye outlet me haame jo dalna hai wo daal sakte hai hum, createBrowserRouter ke config ke according, so uss config ke children ke hisab se yha different pages render honge, so jo bhi children me hoga, uske according ye outlet apna populate hoga */}
			<Outlet />
			<Footer/>
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
				path: '/about',
				element: <About />
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
			}
		]
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// Routerprovider jo hai, uska use karke hamen apne app ko apne routes pass kiye hai
root.render(<RouterProvider router={appRouter} />); 