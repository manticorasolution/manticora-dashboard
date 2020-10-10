import React from 'react';
import { Container, HeaderButtons, HeaderProfile, HeaderLogo } from './styles';
import logo from '../../imgs/logo.png'
import { FaBell } from 'react-icons/fa';

const Header = () => {
	return <Container>
		<HeaderLogo>
			<img src={logo} alt="Manticora logo" />
		</HeaderLogo>
		<HeaderButtons>
			<ul>
				<b><li key="1" id="general">Geral</li></b>
				<li key="2" id="growth">Escala de Crescimento</li>
				<li key="3" id="stock">Previsão de Estoque</li>
				<li key="4" id="expire">Validade dos Produtos</li>
			</ul>
		</HeaderButtons>
		<HeaderProfile>
			<FaBell color="#dadada" size="3vh" />
			<div className="profile-icon"></div>
		</HeaderProfile>
	</Container>
}

export default Header;