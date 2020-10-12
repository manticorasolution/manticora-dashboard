import React from 'react';
import Container from './styles';
import { FaExclamationCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Alert = ({ title, subtitle, className, redirectTo }) => {
	return (
		<Link to={redirectTo} style={{ textDecoration: "none" }}>
			<Container className={className}>
				<FaExclamationCircle color="#721c24" size="5vh" className="icon" />
				<p className="title">{title}</p>
				<p className="subtitle">{subtitle}</p>
			</Container>
		</Link>
	);
}

export default Alert;