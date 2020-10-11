import React from 'react';
import Container from './styles';
import Table from '../Table';

const Card = ({
	className,
	title,
	yearMonth,
	revenues,
	consideration,
	isRevenues,
	hasTable,
}) => {
	return (
		<Container className={className}>
			{isRevenues &&
				<h1 className="title">
					Faturamento <b>{title}</b>
					<p className="month-year">{yearMonth}</p>
				</h1>}
			{!isRevenues &&
				<h1 className="title">
					<b>{title}</b>
					<p className="month-year">{yearMonth}</p>
				</h1>}
			{hasTable && <Table />}
			<p className="revenues">{revenues}</p>
			<p className="consideration">{consideration}</p>
		</Container>
	);
}

export default Card;