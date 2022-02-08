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
	const [saldo, setSaldo] = useState(null);
	const [user, setUser] = useState(null);
	const { token } = useAuth();
	const navegate = useNavigate();

	async function getSaldo() {
		try {
			const promise = await axios.get(`${process.env.REACT_APP_API}/saldo`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			setSaldo(promise.data);
			return;
		} catch (error) {
			return console.log(error);
		}
	}

	async function getUser() {
		try {
			const promise = await axios.get(`${process.env.REACT_APP_API}/user`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			setUser(promise.data);
			return;
		} catch (error) {
			return console.log(error);
		}
	}

	async function logout() {
		try {
			await axios.delete(`${process.env.REACT_APP_API}/logout`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			alert("delogado");
			navegate("/");
		} catch {
			alert("erro ao deslogar");
		}
	}

	useEffect(() => {
		if (token) {
			getSaldo();
			getUser();
			return;
		}
		alert("token nulo");
		navegate("/");
		return;
	}, [token]);

	function Movimentações() {
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

	function ValorFinal({ obj }) {
		let soma = 0;
		for (let i = 0; i < obj.length; i++) {
			let n = Number(obj[i].valor);
			if (obj[i].type === "saída") soma += -1 * n;
			else soma += n;
		}
		return (
			<SectionStyled cor={soma}>
				<p>Saldo</p> <span>{soma}</span>
			</SectionStyled>
		);
	}

	if (user) {
		return (
			<>
				<HeaderStyled>
					<h1>Olá, {user.name}</h1>
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
	} else return <h1>Carregando </h1>;
}
