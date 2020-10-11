import React from 'react';
import GlobalStyle from '../styles/global';
import Header from '../components/Header';
import Board from '../components/Board';
import Footer from '../components/Footer';

function Orders() {
	return (
		<>
			<GlobalStyle />
			<Header activePage="orders" />
			<Board />
			<Footer />
		</>
	);
}

export default Orders;
