import React from 'react';
import Container from './styles';
import InAlertProductsTable from '../Table/inAlertProductsTable';
import BestSellersTable from '../Table/bestSellersTable';
import LineChart from '../Chart/lineChart';
import BarChart from '../Chart/barChart';

const Card = ({
	className,
	title,
	yearMonth,
	revenues,
	consideration,
	isRevenues,
	hasInAlertTable,
	hasBestSellersTable,
	hasLineChart,
	hasBarChart,
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
			{hasLineChart && <LineChart />}
			{hasBarChart && <BarChart />}
			<p className="revenues">{revenues}</p>
			<p className="consideration">{consideration}</p>
		</Container>
	);
}

export default Card;