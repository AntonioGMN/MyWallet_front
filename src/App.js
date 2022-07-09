import { BrowserRouter, Routes, Route } from "react-router-dom";

import TelaLogin from "./components/pageLogin/login";
import TelaCadastro from "./components/pageCadastro/cadastro";
import TelaSaldo from "./components/pageSaldo/saldo";
import TelaTransação from "./components/pageTransação/transação";

import AuthProvider from "./context/useContext";

export default function App() {
	return (
		<AuthProvider >
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<TelaLogin />} />
					<Route path="/cadastro" element={<TelaCadastro />} />
					<Route path="/saldo" element={<TelaSaldo />} />
					<Route path="/transacao/:type" element={<TelaTransação />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}
