import { MainStyled, HeaderStyled, DivStyled } from "./stylesSaldo";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../context/useContext";

export default function TelaSaldo() {
	const { token } = useAuth();
	const navegate = useNavigate();

	useEffect(() => {
		if (!token) {
			alert("token nulo");
			navegate("/");
		}
	}, [token]);

	function movimentações() {}

	return (
		<>
			<HeaderStyled>
				<h1>Olá, fulano</h1>
				<RiLogoutBoxRLine />
			</HeaderStyled>
			<MainStyled></MainStyled>
			<DivStyled>
				<Link to="/transacao/entrada">
					<button>
						<IoMdAddCircleOutline />
						<p>Nova entrada</p>
					</button>
				</Link>
				<Link to="/transacao/saída">
					<button>
						<IoMdRemoveCircleOutline />
						<p>Nova saída</p>
					</button>
				</Link>
			</DivStyled>
		</>
	);
}
