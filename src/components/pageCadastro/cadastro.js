import MainStyle from "./styleCadastro";
import logo from "../imgs/logo.png";
import { Link } from "react-router-dom";

export default function Cadastro() {
	return (
		<MainStyle>
			<img src={logo} alt="erro no logo" />
			<form>
				<input type="text" placeholder="Nome" />
				<input type="email" placeholder="E-mail" />
				<input type="password" placeholder="Senha" />
				<input type="password" placeholder="Confirme a senha" />
				<input type="submit" value="Cadastra" />
			</form>
			<Link to="/">
				<p>Já tem uma conta? Entre agora!</p>
			</Link>
		</MainStyle>
	);
}
