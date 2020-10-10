import React from 'react';
import Container from './styles';

const Card = ({ className, title, yearMonth, revenues, consideration }) => {
	return (
		<Container className={className}>
			<h1 className="title">
				Faturamento <b>{title}</b>
				<p className="month-year">{yearMonth}</p>
			</h1>
			<p className="revenues">{revenues}</p>
			<p className="consideration">{consideration}</p>
		</Container>
	);
}

export default Card;