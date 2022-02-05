import { useNavigate, useParams } from "react-router-dom";
import MainStyle from "./styleTransaçao";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/useContext";

export default function TelaTransação() {
	const { token } = useAuth();
	const { type } = useParams();
	const [transação, setTransação] = useState({
		descrição: "",
		valor: "",
		type: type,
	});

	useEffect(() => {
		if (!token) {
			alert("token nulo");
			navegate("/");
		}
	}, [token]);

	const navegate = useNavigate();

	async function enviar(e) {
		e.preventDefault();

		try {
			await axios.post("http://localhost:5000/saldo", transação, {
				headers: { Authorization: `Bearer ${token}` },
			});

			navegate("/saldo");
			return console.log(transação, typeof transação.valor, token);
		} catch (error) {
			return console.log(error);
		}
	}

	return (
		<MainStyle>
			<h1>Nova {type}</h1>
			<form onSubmit={enviar}>
				<input
					type="number"
					placeholder="Valor"
					value={parseFloat(transação.valor)}
					//step="0.01"
					//pattern="^\d*(\.\d{0,2})?$"
					onChange={(e) =>
						setTransação({
							...transação,
							valor: parseFloat(e.target.value),
						})
					}
				/>
				<input
					type="text"
					placeholder="Descrição"
					value={transação.descrição}
					onChange={(e) => setTransação({ ...transação, descrição: e.target.value })}
				></input>
				<input type="submit" placeholder={`Salvar ${type}`}></input>
			</form>
		</MainStyle>
	);
}
