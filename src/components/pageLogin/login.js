import MainStyle from "./styleLogin";
import logo from "../imgs/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import joi from "joi";
import axios from "axios";
import { useAuth } from "../../context/useContext";

export default function TelaLogin() {
	const { saveToken, token } = useAuth();
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const navegate = useNavigate();
	
	useEffect(()=> { 
		if(token){
		navegate("/saldo")}
		return
	}, [])

	async function entrar(e) {
		e.preventDefault();

		const schema = joi.object({
			email: joi.string().required(),
			password: joi.string().required(),
		});

		const validation = schema.validate(user, { abortEarly: false });

		if (validation.error) {
			const messageErro = validation.error.details.map((m) => m.message);
			return alert(messageErro);
		}

		try {
			const promise = await axios.post(
				`${process.env.REACT_APP_API}/sign-in`,
				user
			);
			saveToken(promise.data);
			navegate("/saldo");
		} catch (error) {
			return error;
		}
	}

	return (
		<MainStyle>
			<img src={logo} alt="erro no logo" />
			<form onSubmit={entrar}>
				<input
					type="email"
					placeholder="E-mail"
					value={user.email}
					onChange={(e) => setUser({ ...user, email: e.target.value })}
				/>
				<input
					type="password"
					placeholder="Senha"
					value={user.password}
					onChange={(e) => setUser({ ...user, password: e.target.value })}
				/>
				<input type="submit" value="Entrar" />
			</form>
			<Link to="/cadastro">
				<p>Primeira vez? Cadastre-se!</p>
			</Link>
		</MainStyle>
	);
}
