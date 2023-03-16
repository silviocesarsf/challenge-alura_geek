import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import AllProducts from "./pages/AllProducts/AllProducts";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/all",
				element: <AllProducts />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
