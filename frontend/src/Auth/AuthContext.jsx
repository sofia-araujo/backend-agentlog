// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

// Criação do contexto de autenticação
const AuthContext = createContext();

// Provedor de autenticação
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log("useEffect foi chamado");
    // Verifique se o usuário está autenticado, por exemplo, verificando o token no localStorage
    const token = localStorage.getItem("authToken");
    console.log(`Token`, token)
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const loginPost = async (email, senha) => {
    // const navigate = useNavigate();

    try {
      const response = await axios.post('http://localhost:3000/usuario/login', { email, senha });
      localStorage.setItem('authToken', response.data.token);
        // ARMAZENA O TOKEN NO LOCALSTORAGE
      localStorage.setItem('usuarioId', response.data.usuarioId);
      setIsAuthenticated(true);
      // navigate('/Home');
    } catch (error) {
      console.error("Erro no login:", error);
    }

};

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginPost, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
 
export const useAuth = () => {
  return useContext(AuthContext);
};
