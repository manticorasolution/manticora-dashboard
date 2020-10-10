import React from 'react';
import Container from './styles';

const Board = () => {
	return (
		<Container>
			<div className="board-name">
				<h2>Painel de controle</h2>
			</div>
			<div className="cards-left-up">
				<div className="card1"></div>
				<div className="card2"></div>
				<div className="card3"></div>
				<div className="card4"></div>
			</div>
			<div className="cards-right-up"></div>
			<div className="cards-left-down"></div>
			<div className="cards-right-down">
				<div className="alerts">
					<div className="alert1"></div>
					<div className="alert2"></div>
				</div>
				<div className="in-alert-products"></div>
			</div>
		</Container>
	);
}

export default Board;