import React from 'react';
import Container from './styles';
import { FaExclamationCircle } from 'react-icons/fa';

const Alert = ({ title, subtitle, className }) => {
	return (
		<Container className={className}>
			<FaExclamationCircle color="#721c24" size="5vh" className="icon" />
			<p className="title">{title}</p>
			<p className="subtitle">{subtitle}</p>
		</Container>
	);
}

export default Alert;