import React, { useEffect, useState } from "react";
import ButtonBlue from "../../components/ButtonComp/ButtonBlue";
import ButtonComp from "../../components/ButtonComp/ButtonComp";
import Footer from "../../components/Footer/Footer";
import InputComp from "../../components/InputComp/InputComp";
import "./Login.css";

export default function Login() {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

	return (
		<section className="login-page">
			<div className="login-page_container">
				<div className="title-login">
					<h1>Iniciar Sessão</h1>
				</div>
				<div className="inputs-login">
					<div className="email-input_login">
                        <InputComp text={"Escreva seu email"} type={"email"} />
                    </div>
					<div className="password-input_login">
                        <InputComp text={"Escreva sua senha"} type={"password"} />
                    </div>
                    <div className="button-login" onClick=''>
                        <ButtonBlue text={'Entrar'} />
                    </div>
				</div>
			</div>
		</section>
	);
}
