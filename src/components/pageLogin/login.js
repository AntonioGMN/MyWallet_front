import MainStyle from "./styleLogin";
import logo from "../imgs/logo.png";
import { Link } from "react-router-dom";

export default function TelaLogin() {
	return (
		<MainStyle>
			<img src={logo} alt="erro no logo" />
			<form>
				<input type="email" placeholder="E-mail" />
				<input type="password" placeholder="Senha" />
				<input type="submit" value="Entrar" />
			</form>
			<Link to="/cadastro">
				<p>Primeira vez? Cadastre-se!</p>
			</Link>
		</MainStyle>
	);
}
