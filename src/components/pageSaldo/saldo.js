import { MainStyled, HeaderStyled, DivStyled } from "./stylesSaldo";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

export default function TelaSaldo() {
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
