import { BrowserRouter, Routes, Route } from "react-router-dom";

import TelaLogin from "./components/pageLogin/login";
import TelaCadastro from "./components/pageCadastro/cadastro";
import TelaSaldo from "./components/pageSaldo/saldo";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<TelaLogin />} />
				<Route path="/cadastro" element={<TelaCadastro />} />
				<Route path="/saldo" element={<TelaSaldo />} />
			</Routes>
		</BrowserRouter>
	);
}
