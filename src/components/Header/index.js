import React from 'react';
import { Container, HeaderButtons, HeaderProfile, HeaderLogo } from './styles';
import logo from '../../imgs/logo.png'
import { FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = ({ activePage }) => {
	return <Container>
		<HeaderLogo>
			<img src={logo} alt="Manticora logo" />
		</HeaderLogo>
		<HeaderButtons activePage={activePage}>
			<ul>
				<li key="1" id="general">
					<Link to="/">Geral</Link>
				</li>
				<li key="2" id="orders">
					<Link to="/pedidos">Pedidos</Link>
				</li>
				<li key="3" id="stock">
					<Link to="/estoque">Previsão de Estoque</Link>
				</li>
				<li key="4" id="validities">
					<Link to="/validades">Validade dos Produtos</Link>
				</li>
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