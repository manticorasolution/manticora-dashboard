import React from 'react';
import Container from './styles';
import Card from '../Card';
import Alert from '../Alert';
import { FaLightbulb } from 'react-icons/fa';

const alerts =
{
	stock: {
		key: '1',
		title: 'Alguns produtos estão chegando ao fim do estoque',
		subtitle: 'De acordo com seu histórico de vendas',
		className: 'alert1'
	},
	validities: {
		key: '2',
		title: 'Alguns produtos estão com validade próxima',
		subtitle: 'De acordo com os estoque cadastrado',
		className: 'alert2'
	},
};

const tables =
{
	stock: {
		hasStockTable: true,
		title: 'Produtos Previstos Para Sair do Estoque',
	},
	validities: {
		hasValiditiesTable: true,
		title: 'Produtos com Validade Próxima',
	}
};

const SecundaryBoard = ({ page }) => {
	return (
		<Container>
			<Alert
				className={alerts[page].className}
				title={alerts[page].title}
				subtitle={alerts[page].subtitle}
			/>
			<Card
				className='in-alert-products'
				title={tables[page].title}
				hasStockTable={tables[page].hasStockTable}
				hasValiditiesTable={tables[page].hasValiditiesTable}
			/>
			{ page === 'validities' &&
				<div className="advice">
					<FaLightbulb size="1.5rem" color="#F4E409" />
					<h4 >Recomendamos que faça uma promoção destes produtos :)</h4>
				</div>
			}
		</Container >

	);
}

export default SecundaryBoard;