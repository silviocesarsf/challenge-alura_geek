import React from "react";
import "./Product.css";
import RowProducts from "../../components/RowProducts/RowProducts";

export default function Product() {
	return (
		<section className="product-page">
			<div className="wrapper-product_page">
				<div className="product-info">
					<img
						src="https://source.unsplash.com/random/250x250"
						alt=""
					/>
					<aside>
						<div className="name-product_info">
							<h1>Produto XYZ</h1>
						</div>
						<div className="price-product_info">
							<p>R$ 60,00</p>
						</div>
						<div className="description-product_info">
							<p>
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Reprehenderit at a
								necessitatibus quos, veniam maxime asperiores
								cumque, aliquam praesentium quasi molestiae
								quidem eveniet quia ducimus harum. Et dicta
								vero quibusdam. Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Aliquam atque
								optio illum numquam fugit harum saepe commodi
								labore ipsum minus voluptates, praesentium
								placeat aliquid doloribus perferendis,
								excepturi repudiandae aspernatur officia.
							</p>
						</div>
					</aside>
				</div>
				<div className="similar-products">
					<div className="title-similar_products">
						<h1>Produtos similares</h1>
					</div>
					<RowProducts />
				</div>
			</div>
		</section>
	);
}
