import React, { useEffect, useState } from "react";
import ButtonBlue from "../../components/ButtonComp/ButtonBlue";
import Navbar from "../../components/Navbar/Navbar";
import RowProducts from "../../components/RowProducts/RowProducts";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

export default function Home() {
	const [dataStarWars, setDataStarWars] = useState([]);
	const [dataConsole, setDataConsole] = useState([]);
	const [dataDiversos, setDataDiversos] = useState([]);

	const requestConsole = () => {
		fetch(
			"https://api.mercadolibre.com/sites/MLB/search?q=starwars&limit=3"
		)
			.then((r) => r.json())
			.then((data) => {
				console.log(data.results);
				setDataStarWars(data.results);
			});
	};

	useEffect(() => {
		requestConsole();
	}, []);

	return (
		<div className="wrapper-home">
			<section className="home">
				<div className="banner-home">
					<div className="text-banner_home">
						<h1>Dezembro Promocional</h1>
						<p>Produtos selecionados com 33% de desconto</p>
						<ButtonBlue text={"Ver Consoles"} />
					</div>
				</div>
				<div className="rows-products">
					<RowProducts title={"Star Wars"} />
					<RowProducts title={"Consoles"} />
					<RowProducts title={"Diversos"} />
				</div>
				<Link to='/all'>
					<div className="button-view_more">
						<ButtonBlue text={"Ver Tudo"} />
					</div>
				</Link>
			</section>
		</div>
	);
}
