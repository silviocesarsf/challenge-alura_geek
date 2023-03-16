import React from "react";
import "./InputComp.css";

export default function InputComp({ text, type }) {
	return (
		<div className="input-comp">
			<input type={type} placeholder={text} />
		</div>
	);
}
