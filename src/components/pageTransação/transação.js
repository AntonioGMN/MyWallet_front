import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function TelaTransação() {
	const { type } = useParams();

	return (
		<MainStyle>
			<h1>Nova {type}</h1>
			<form>
				<input placeholder="Valor"></input>
				<input placeholder="Descrição"></input>
				<input placeholder={`Salvar ${type}`}></input>
			</form>
		</MainStyle>
	);
}

const MainStyle = styled.main`
	display: flex;
	flex-direction: column;
	padding: 20px;
	gap: 40px;

	h1 {
		font-size: 26px;
		font-weight: 700;
		color: #fff;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 13px;
	}

	input {
		height: 58px;
		width: 100%;
		padding-left: 10px;
		border: none;
		border-radius: 5px;
		font-family: Raleway;

		::placeholder {
			font-size: 20px;
			font-weight: 400;
			color: #000000;
		}
		:last-child {
			background: #a328d6;
			::placeholder {
				font-weight: 700;
				text-align: center;
				color: #ffffff;
			}
		}
	}
`;
