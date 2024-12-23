import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext); 
};

export const AuthProvider = ({ children }) => {

  const [isAuth, setAuth] = useState(false);
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);


  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setAuth(true);
      setToken(storedToken);
      setEmail(localStorage.getItem("email"));
      setName(localStorage.getItem("name"));
    }
  }, []);


  const login = (userToken, userEmail, userName) => {
    setAuth(true);
    setToken(userToken);
    setEmail(userEmail);
    setName(userName);

    localStorage.setItem("token", userToken);
    localStorage.setItem("email", userEmail);
    localStorage.setItem("name", userName);
  };


  const logout = () => {
    setAuth(false);
    setToken(null);
    setEmail(null);
    setName(null);


    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout, token, email, name }}>
      {children} 
    </AuthContext.Provider>
  );
};
