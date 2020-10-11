import React from 'react';
import GlobalStyle from '../styles/global';
import Header from '../components/Header';
import SecundaryBoard from '../components/AltBoard';
import Footer from '../components/Footer';

function StockPrediction() {
	return (
		<>
			<GlobalStyle />
			<Header activePage="stock" />
			<SecundaryBoard page="stock" />
			<Footer />
		</>
	);
}

export default StockPrediction;
