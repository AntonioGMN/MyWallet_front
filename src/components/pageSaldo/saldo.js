import {
	MainStyled,
	HeaderStyled,
	DivStyled,
	ArticleStyled,
	SectionStyled,
} from "./stylesSaldo";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/useContext";
import axios from "axios";

export default function TelaSaldo() {
	const { token } = useAuth();
	const [saldo, setSaldo] = useState(null);
	const navegate = useNavigate();

	async function getSaldo() {
		try {
			const promise = await axios.get("http://localhost:5000/saldo", {
				headers: { Authorization: `Bearer ${token}` },
			});
			setSaldo(promise.data);
		} catch (error) {
			return console.log(error);
		}
	}

	useEffect(() => {
		if (!token) {
			alert("token nulo");
			navegate("/");
			return;
		}
		getSaldo();
		return;
	}, [token]);

	function Movimentações() {
		if (saldo) {
			if (saldo.length === 0)
				return <div>Não há registros de entrada ou saída</div>;
			return (
				<>
					<section>
						{saldo.map((s) => (
							<ArticleStyled key={saldo._id} type={s.type}>
								<p>
									<span>{s.data}</span> {s.descrição}
								</p>
								<strong>{s.valor}</strong>
							</ArticleStyled>
						))}
					</section>
					<ValorFinal obj={saldo} />
				</>
			);
		}
		return "carregando";
	}

	function ValorFinal({ obj }) {
		let soma = 0;
		for (let i = 0; i < obj.length; i++) {
			let n = Number(obj[i].valor);
			console.log(n);
			if (obj[i].type === "saída") soma += -1 * n;
			else soma += n;
		}
		return (
			<SectionStyled cor={soma}>
				<p>Saldo</p> <span>{soma}</span>
			</SectionStyled>
		);
	}

	async function logout() {
		try {
			await axios.delete("http://localhost:5000/logout", {
				headers: { Authorization: `Bearer ${token}` },
			});
			alert("delogado");
			navegate("/");
		} catch {
			alert("erro ao deslogar");
		}
	}

	return (
		<>
			<HeaderStyled>
				<h1>Olá, fulano</h1>
				<RiLogoutBoxRLine onClick={logout} />
			</HeaderStyled>
			<MainStyled>
				<Movimentações />
			</MainStyled>
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
