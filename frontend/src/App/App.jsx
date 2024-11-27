import React from 'react'
import Header from '../components/Header/Header';
import Home from '../Home/Home';
import Footer from "../components/Footer/Footer.jsx"
import {Routes, Route, Router, BrowserRouter} from "react-router-dom"
import Cadastro from "../Cadastro/Cadastro"
import Login from '../Login/Login';
import { useAuth } from "../Auth/AuthContext";
import { AuthProvider } from "../Auth/AuthContext";
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />; // Redireciona para a página de login se o usuário não estiver autenticado
  }

  return children;
};


const App = () => {

  
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<ProtectedRoute ><Home /></ProtectedRoute>}/>
        <Route path='/cadastro-atendimento' element={<ProtectedRoute><Cadastro /></ProtectedRoute>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default App;