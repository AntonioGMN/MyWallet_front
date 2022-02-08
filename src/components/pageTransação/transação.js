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

	const navegate = useNavigate();

	useEffect(() => {
		if (!token) {
			alert("token nulo");
			navegate("/");
			return;
		}
	}, [token]);

	async function enviar(e) {
		e.preventDefault();

		try {
			await axios.post(`${process.env.REACT_APP_API}/saldo`, transação, {
				headers: { Authorization: `Bearer ${token}` },
			});

			navegate("/saldo");
			return console.log(transação, typeof transação.valor, token);
		} catch (error) {
			return console.log(error);
		}
	}

	function valorEfetivo(e) {
		let num = Number(e.target.value);
		let tamanho = e.target.value.length;
		let n;

		if (tamanho === 1) n = num / 100;
		else n = (num * 10).toFixed(2);

		setTransação({ ...transação, valor: n });
		return;
	}

	return (
		<MainStyle>
			<h1>Nova {type}</h1>
			<form onSubmit={enviar}>
				<input
					type="number"
					placeholder="Valor"
					value={transação.valor}
					step="0.01"
					//pattern="^\d*(\.\d{0,2})?$"
					onChange={valorEfetivo}
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
