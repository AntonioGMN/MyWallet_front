import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

export default function AuthProvider({ children }) {
  const persistedToken = JSON.parse(localStorage.getItem("token"));
  const [token, setToken] = useState(persistedToken);
  const [user, setUser] = useState(null);

  function saveToken(newToken) {
    setToken(newToken);
    localStorage.setItem("token", JSON.stringify(newToken));
  }

  async function logout() {
    localStorage.clear();
    setUser(null);
    document.location.reload(true);
  }

  useEffect( () => {
    if (token !== null) {
    const promesse = axios.get(`${process.env.REACT_APP_API}/user`, {
				headers: { Authorization: `Bearer ${token}` },
			});
      promesse
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [token]);

  console.log(user)

  return (
    <UserContext.Provider value={{ token, user, saveToken, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export const useAuth = () => useContext(UserContext);
