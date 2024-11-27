import React from 'react'
import { HeaderContainer, LogoContainer, LogoText, NavLink, NavLinks } from '../../Styles/Header';
import { Link } from 'react-router-dom';
import Logo from "/LOG-removebg-preview.png"
const Header = () => {
  return (
    <HeaderContainer>
      
      <LogoContainer>
        
        <Link to="/Home" className='link'>
          <img className='logo' src={Logo} alt="Logo" width="40" height="40" />
        </Link>      
      </LogoContainer>

      <NavLinks>
        <NavLink href="#">TABELA DE REGISTRO</NavLink>
        <Link to="/cadastro-atendimento" className='link'><NavLink href="#">CADASTRO DE ATENDIMENTO</NavLink></Link>
        <NavLink href="#">GRÁFICOS DE ATENDIMENTOS</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;