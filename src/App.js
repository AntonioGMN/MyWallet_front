import { BrowserRouter, Routes, Route } from "react-router-dom";

import TelaLogin from "./components/pageLogin/login";
import TelaCadastro from "./components/pageCadastro/cadastro";
import TelaSaldo from "./components/pageSaldo/saldo";

import UserContext from "./context/useContext";
import { useState } from "react";

export default function App() {
	const [token, setToken] = useState(null);

	return (
		<UserContext.Provider value={{ token, setToken }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<TelaLogin />} />
					<Route path="/cadastro" element={<TelaCadastro />} />
					<Route path="/saldo" element={<TelaSaldo />} />
				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);
}
