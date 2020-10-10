import React from 'react';
import Container from './styles';
import Card from '../Card';

const cards = [
	{
		key: "1",
		className: "card1",
		title: "Geral",
		yearMonth: "Outubro de 2020",
		revenues: "R$35.854,24",
		consideration: "houve aumento de 15% em relação ao mesmo período do mês anterior",
	},
	{
		key: "2",
		className: "card2",
		title: "E-commerce",
		yearMonth: "Outubro de 2020",
		revenues: "R$20.532,74",
		consideration: "houve aumento de 47% em relação ao mesmo período do mês anterior",
	},
	{
		key: "3",
		className: "card3",
		title: "Geral",
		yearMonth: "Outubro de 2020",
		revenues: "R$15.321,50",
		consideration: "houve queda de 34% em relação ao mesmo período do mês anterior",
	},
	{
		key: "4",
		className: "card4",
		title: "Semestral",
		yearMonth: "De Maio a Outubro de 2020",
		revenues: "",
		consideration: "",
	},

]

const Board = () => {
	return (
		<Container>
			<div className="board-name">
				<h2>Painel de controle</h2>
			</div>
			<div className="cards-left-up">
				{cards.map(card => (
					<Card
						key={card.key}
						className={card.className}
						title={card.title}
						yearMonth={card.yearMonth}
						revenues={card.revenues}
						consideration={card.consideration}
					/>
				))}
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