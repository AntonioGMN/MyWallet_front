import MainStyle from "./styleCadastro";
import logo from "../imgs/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function TelaCadastro() {
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [confirPassword, setConfPassword] = useState("");
	const navegar = useNavigate();

	async function cadastrar(e) {
		e.preventDefault();

		if (user.password != confirPassword) {
			return alert("As senhas tem que ser iguais");
		}

		try {
			await axios.post("http://localhost:5000/sign-up", user);
			navegar("/");
		} catch (error) {
			console.log(error);
			alert("Erro no Cadastro. Tente Novamente");
		}
		console.log(user);
	}

	return (
		<MainStyle>
			<img src={logo} alt="erro no logo" />
			<form onSubmit={cadastrar}>
				<input
					type="text"
					value={user.name}
					placeholder="Nome"
					onChange={(e) => setUser({ ...user, name: e.target.value })}
				/>
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
				<input
					type="password"
					placeholder="Confirme a senha"
					value={confirPassword}
					onChange={(e) => setConfPassword(e.target.value)}
				/>
				<input type="submit" value="Cadastra" />
			</form>
			<Link to="/">
				<p>Já tem uma conta? Entre agora!</p>
			</Link>
		</MainStyle>
	);
}
