import React from 'react';
import Container from './styles';
import Card from '../Card';
import Alert from '../Alert';

const alerts = [
	{
		key: '1',
		title: 'Alguns produtos estão chegando ao fim do estoque',
		subtitle: 'Clique para saber mais',
		className: 'alert1'
	},
	{
		key: '2',
		title: 'Alguns produtos estão com validade próxima',
		subtitle: 'Clique para saber mais',
		className: 'alert2'
	},
]

const cards = [
	{
		key: '1',
		className: 'card1',
		title: 'Geral',
		yearMonth: 'Outubro de 2020',
		revenues: 'R$35.854,24',
		consideration: 'houve aumento de 15% em relação ao mesmo período do mês anterior',
	},
	{
		key: '2',
		className: 'card2',
		title: 'E-commerce',
		yearMonth: 'Outubro de 2020',
		revenues: 'R$20.532,74',
		consideration: 'houve aumento de 47% em relação ao mesmo período do mês anterior',
	},
	{
		key: '3',
		className: 'card3',
		title: 'Geral',
		yearMonth: 'Outubro de 2020',
		revenues: 'R$15.321,50',
		consideration: 'houve queda de 34% em relação ao mesmo período do mês anterior',
	},
	{
		key: '4',
		className: 'card4',
		title: 'Semestral',
		yearMonth: 'De Maio a Outubro de 2020',
		revenues: '',
		consideration: '',
	},

]

const Board = () => {
	return (
		<Container>
			<div className='board-name'>
				<h2>Painel de controle</h2>
			</div>
			<div className='cards-left-up'>
				{cards.map(card => (
					<Card
						key={card.key}
						className={card.className}
						title={card.title}
						yearMonth={card.yearMonth}
						revenues={card.revenues}
						consideration={card.consideration}
						isRevenues={true}
					/>
				))}
			</div>
			<Card
				className='cards-right-up'
				title='Projeção de Vendas'
				yearMonth='Próximos 30 dias'
				revenues=''
				consideration=''
			/>
			<Card
				className='cards-left-down'
				title='Produtos Mais Vendidos'
				yearMonth='Outubro de 2020'
				revenues=''
				consideration=''
			/>
			<div className='cards-right-down'>
				<div className='alerts'>
					{alerts.map(alert => (
						<Alert
							key={alert.key}
							className={alert.className}
							title={alert.title}
							subtitle={alert.subtitle}
						/>
					))}
				</div>
				<Card
					className='in-alert-products'
					title='Produtos em Alerta'
					yearMonth='Próximos 7 dias'
					hasTable={true}
				/>
			</div>
		</Container>
	);
}

export default Board;