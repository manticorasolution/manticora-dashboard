import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Board from './components/Board';
// import Footer from './components/Footer';

function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Board />
			{/* <Footer /> */}
		</>
	);
}

export default App;
