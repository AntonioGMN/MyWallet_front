import { MainStyled, HeaderStyled, DivStyled } from "./stylesSaldo";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";

export default function TelaSaldo() {
	return (
		<>
			<HeaderStyled>
				<h1>Olá, fulano</h1>
				<RiLogoutBoxRLine />
			</HeaderStyled>
			<MainStyled></MainStyled>
			<DivStyled>
				<button>
					<IoMdAddCircleOutline />
					<p>Nova entrada</p>
				</button>
				<button>
					<IoMdRemoveCircleOutline />
					<p>Nova saída</p>
				</button>
			</DivStyled>
		</>
	);
}
