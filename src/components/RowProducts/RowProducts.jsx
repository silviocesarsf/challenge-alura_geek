import React from "react";
import "./RowProducts.css";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function RowProducts({ title }) {
	return (
		<div className="container-products">
			<div className="header-row_products">
				<h1>{title}</h1>
			</div>
			<div className="row-products">
				<div className="product">
					<img
						src="https://trello.com/1/cards/62842a77d440815db305e38f/attachments/62842a78d440815db305e3c5/download/star-wars.png"
						alt=""
					/>
					<div className="name-product">
						<span>Produto XYZ</span>
					</div>
					<div className="price-product">
						<p>R$ 60,00</p>
					</div>
					<span className="link-product">Ver produto</span>
				</div>
				<div className="product">
					<img
						src="https://source.unsplash.com/random/250x250"
						alt=""
					/>
					<div className="name-product">
						<span>Produto XYZ</span>
					</div>
					<div className="price-product">
						<p>R$ 60,00</p>
					</div>
					<span className="link-product">Ver produto</span>
				</div>
				<div className="product">
					<img
						src="https://source.unsplash.com/random/250x250"
						alt=""
					/>
					<div className="name-product">
						<span>Produto XYZ</span>
					</div>
					<div className="price-product">
						<p>R$ 60,00</p>
					</div>
					<span className="link-product">Ver produto</span>
				</div>
				<div className="product">
					<img
						src="https://source.unsplash.com/random/250x250"
						alt=""
					/>
					<div className="name-product">
						<span>Produto XYZ</span>
					</div>
					<div className="price-product">
						<p>R$ 60,00</p>
					</div>
					<span className="link-product">Ver produto</span>
				</div>
				<div className="product">
					<img
						src="https://source.unsplash.com/random/250x250"
						alt=""
					/>
					<div className="name-product">
						<span>Produto XYZ</span>
					</div>
					<div className="price-product">
						<p>R$ 60,00</p>
					</div>
					<span className="link-product">Ver produto</span>
				</div>
				<div className="product">
					<img
						src="https://source.unsplash.com/random/250x250"
						alt=""
					/>
					<div className="name-product">
						<span>Produto XYZ</span>
					</div>
					<div className="price-product">
						<p>R$ 60,00</p>
					</div>
					<span className="link-product">Ver produto</span>
				</div>
			</div>
		</div>
	);
}
