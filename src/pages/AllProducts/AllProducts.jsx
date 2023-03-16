import React from "react";
import RowProducts from "../../components/RowProducts/RowProducts";
import "./AllProducts.css";

export default function AllProducts() {
	return (
		<div>
			<div className="container-all_products">
				<RowProducts title={"Todos os Produtos"} />
				<RowProducts />
				<RowProducts />
				<RowProducts />
			</div>
		</div>
	);
}
