import React from 'react';
import Container from './styles';
import InAlertProductsTable from '../Table/inAlertProductsTable';
import BestSellersTable from '../Table/bestSellersTable';
import StockTable from '../StockTable';
import ValiditiesTable from '../ValiditiesTable';
import LineChart from '../Chart/lineChart';
import BarChart from '../Chart/barChart';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

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
	goodConsideration,
	hasStockTable,
	hasValiditiesTable,
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
			{hasStockTable && <StockTable />}
			{hasValiditiesTable && <ValiditiesTable />}
			{hasLineChart && <LineChart />}
			{hasBarChart && <BarChart />}
			<p className="revenues">{revenues}</p>
			{consideration && goodConsideration &&
				<div className="consideration">
					<FaArrowUp color="grey" size="1.2rem" />
					<p>{consideration}</p>
				</div>
			}
			{consideration && !goodConsideration &&
				<div className="consideration">
					<FaArrowDown color="grey" size="1.2rem" />
					<p>{consideration}</p>
				</div>
			}
		</Container>
	);
}

export default Card;