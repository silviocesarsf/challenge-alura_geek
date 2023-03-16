import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./pages/home/Home";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AllProducts from "./pages/AllProducts/AllProducts";
import Product from "./pages/Product/Product";

function App() {
	return (
		<div className="App">
			<Navbar />
			{/* <Product /> */}
			{/* <AllProducts /> */}
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
