import React from 'react';
import Container from './styles';
import InAlertProductsTable from '../Table/inAlertProductsTable';
import BestSellersTable from '../Table/bestSellersTable';

const Card = ({
	className,
	title,
	yearMonth,
	revenues,
	consideration,
	isRevenues,
	hasInAlertTable,
	hasBestSellersTable,
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
			{hasInAlertTable && <InAlertProductsTable />}
			{hasBestSellersTable && <BestSellersTable />}
			<p className="revenues">{revenues}</p>
			<p className="consideration">{consideration}</p>
		</Container>
	);
}

export default Card;