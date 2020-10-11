import React from 'react';
import GlobalStyle from '../styles/global';
import Header from '../components/Header';
import SecundaryBoard from '../components/AltBoard';
import Footer from '../components/Footer';

function ProductsValidity() {
	return (
		<>
			<GlobalStyle />
			<Header activePage="validities" />
			<SecundaryBoard page="validities" />
			<Footer />
		</>
	);
}

export default ProductsValidity;
