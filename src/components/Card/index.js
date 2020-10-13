import React from 'react';
import Container from './styles';
import InAlertProductsTable from '../Table/inAlertProductsTable';
import BestSellersTable from '../Table/bestSellersTable';
import StockTable from '../StockTable';
import ValiditiesTable from '../ValiditiesTable';
import OrdersTable from '../OrdersTable';
import LineChart from '../Chart/lineChart';
import BarChart from '../Chart/barChart';
import { FaArrowUp, FaArrowDown, FaArrowRight, FaThumbtack } from 'react-icons/fa';

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
	hasOrdersTable,
	isOrder,
	orders,
}) => {
	return (
		<Container className={className}>
			{isRevenues &&
				<h1 className="title">
					Faturamento <b>{title}</b>
					<p className="month-year">{yearMonth}</p>
				</h1>}
			{!isRevenues && !isOrder &&
				<h1 className="title">
					<b>{title}</b>
					<p className="month-year">{yearMonth}</p>
				</h1>}
			{!isRevenues && isOrder &&
				<div className="order-person">

					<div className="avatar-parent">
						<img className="avatar" alt="avatar" src={orders.avatar} />
					</div>

					<h1 className="title">
						<b>{title}</b>
					</h1>

				</div>
			}
			{hasInAlertTable && <InAlertProductsTable />}
			{hasBestSellersTable && <BestSellersTable />}
			{hasStockTable && <StockTable />}
			{hasValiditiesTable && <ValiditiesTable />}
			{hasOrdersTable && <OrdersTable />}
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
			{isOrder &&
				<div>
					<div className="orders-list">
						<ul>
							{orders.list.map(item => (
								<div key={item}>
									<FaArrowRight size="1rem" color="#45454b" className="arrow" />
									<li>{item}</li>
								</div>
							))}
						</ul>
					</div>
					<div className="address">
						<FaThumbtack size="1rem" color="#E63946" />
						<p>{orders.address}</p>
					</div>
				</div>
			}
		</Container>
	);
}

export default Card;