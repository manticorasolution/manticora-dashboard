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
				<li key="2" id="orders">Pedidos</li>
				<li key="3" id="stock">Previsão de Estoque</li>
				<li key="4" id="expire">Validade dos Produtos</li>
			</ul>
		</HeaderButtons>
		<HeaderProfile>
			<FaBell color="#45454b" size="3vh" />
			<img className="profile-icon" alt="Perfil do João" src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=ShirtVNeck&clotheColor=Heather&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Brown'
			/>
		</HeaderProfile>
	</Container>
}

export default Header;