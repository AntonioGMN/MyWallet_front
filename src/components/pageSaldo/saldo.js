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
	const { token, user, logout } = useAuth();
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

	useEffect(() => {
		if (token) {
			getSaldo();
			return;
		}
		navegate("/");
		return;
	}, [token]);

	function Movimentações() {
		if (saldo.length === 0) return <div>Não há registros de entrada ou saída</div>;
		
		return (
			<>
				<section>
					{saldo.map((s) => (
						<ArticleStyled key={s._id} type={s.type}>
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
				<p>Saldo</p> <span>{soma.toFixed(2)}</span>
			</SectionStyled>
		);
	}

	if (saldo && user) {
		return (
      <div style={ {padding: '15px'} }>
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
      </div>
    );
	} else return <h1>Carregando </h1>;
}
