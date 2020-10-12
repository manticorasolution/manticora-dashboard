import React from 'react';
import GlobalStyle from '../styles/global';
import Header from '../components/Header';
import Board from '../components/Board';
import Footer from '../components/Footer';

function Dashboard() {
	return (
		<>
			<GlobalStyle />
			<Header activePage="general" />
			<Board />
			<Footer />
		</>
	);
}

export default Dashboard;
