import React from 'react';
import Container from './styles';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
	return (
		<Container>
			<p className="made-with-love-copyright">
				Feito com <FaHeart color="#B51942" /> por
				<a target="_blank" rel="noopener noreferrer" href="http://manticora.app"> Manticora.app</a>
			</p>
		</Container>
	);
}

export default Footer