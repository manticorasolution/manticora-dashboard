import React from 'react';
import GlobalStyle from '../styles/global';
import Header from '../components/Header';
import Board from '../components/Board';
import Footer from '../components/Footer';

function ProductsValidity() {
	return (
		<>
			<GlobalStyle />
			<Header activePage="validities" />
			<Board />
			<Footer />
		</>
	);
}

export default ProductsValidity;
