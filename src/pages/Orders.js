import React from 'react';
import GlobalStyle from '../styles/global';
import Header from '../components/Header';
import OrdersBoard from '../components/OrdersBoard';
import Footer from '../components/Footer';

function Orders() {
	return (
		<>
			<GlobalStyle />
			<Header activePage="orders" />
			<OrdersBoard />
			<Footer />
		</>
	);
}

export default Orders;
