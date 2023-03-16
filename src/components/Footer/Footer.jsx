import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import ButtonBlue from "../ButtonComp/ButtonBlue";

export default function Footer() {
	return (
		<footer>
			<div className="footer-container">
				<div className="col-logo_footer">
					<img src={logo} alt="" />
				</div>
				<div className="col-footer">
					<ul>
						<li>Quem somos nós</li>
						<li>Política de Privacidade</li>
						<li>Programa Fidelidade</li>
						<li>Nossas Lojas</li>
						<li>Quero ser franqueado</li>
						<li>Anuncie aqui</li>
					</ul>
				</div>
				<div className="form-contact">
					<div className="inputs">
					<label>Fale Conosco</label>
						<div className="name-input">
							<input type="name" placeholder="Nome" />
						</div>
						<div className="message-input">
							<textarea
								placeholder="Escreva sua mensagem"
								cols="50"
								rows="5"
							></textarea>
						</div>
						<ButtonBlue text={"Enviar Mensagem"} />
					</div>
				<div className="trademark-footer">
					<p>Desenvolvido por Silvio César</p>
					<span>2023</span>
				</div>
				</div>
			</div>
		</footer>
	);
}
