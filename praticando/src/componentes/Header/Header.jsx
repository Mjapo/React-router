import React from 'react';
import { Header as HeaderStyled, StyledLink } from './styles';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderStyled>
      <StyledLink as={Link} to="/">Home</StyledLink>
      <StyledLink as={Link} to="/Cadastro">Cadastro</StyledLink>
      <StyledLink as={Link} to="/Login">Login</StyledLink>
      <StyledLink as={Link} to="/Contatos">Contatos</StyledLink>
      <StyledLink as={Link} to="/Cursos">Cursos</StyledLink>
    </HeaderStyled>
  );
};

export default Header;




