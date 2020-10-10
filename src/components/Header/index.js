import React from 'react';
import { Container, HeaderOptions, HeaderLogo } from './styles';
import Button from '../Button';
import logo from '../../imgs/logo.png'

const Header = () => {
	return <Container>
		<HeaderLogo>
			<img src={logo} alt="Manticora logo" />
			<h2 contentEditable>Mercadinho da Dona Maria</h2>
		</HeaderLogo>
		<HeaderOptions>
			<li>Relatórios Detalhados</li>
			<b><li>Editar Perfil</li></b>
			<li><Button text="Ver Estoque" /></li>
		</HeaderOptions>
	</Container>
}

export default Header;