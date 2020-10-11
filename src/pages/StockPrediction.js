import React from 'react';
import GlobalStyle from '../styles/global';
import Header from '../components/Header';
import Board from '../components/Board';
import Footer from '../components/Footer';

function StockPrediction() {
	return (
		<>
			<GlobalStyle />
			<Header activePage="stock" />
			<Board />
			<Footer />
		</>
	);
}

export default StockPrediction;
