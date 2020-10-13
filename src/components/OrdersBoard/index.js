import React from 'react';
import Container from './styles';
import Card from '../Card';

const orders = [
	{
		name: 'Adelino Cruz',
		list: ['1 litro de leite integral', '1 pacote de farinha de trigo', '6 ovos'],
		address: 'Rua da Paz, 21',
		avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairSides&accessoriesType=Kurt&hairColor=BlondeGolden&facialHairType=MoustacheMagnum&facialHairColor=BlondeGolden&clotheType=ShirtCrewNeck&clotheColor=Pink&eyeType=WinkWacky&eyebrowType=UnibrowNatural&mouthType=Serious&skinColor=DarkBrown'
	},
	{
		name: 'Rosa Silva',
		list: ['500g de queijo', '8 pães', '1 pote de margarina'],
		address: 'Tv. das Tulipas, 1201',
		avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
	},
	{
		name: 'Jeremias Mourão',
		list: ['1 detergente neutro', '1 pacote de orégano', '1 pacote de macarrão'],
		address: 'Av. Rebouças, 3152',
		avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Sunglasses&hairColor=Brown&facialHairType=BeardMagestic&facialHairColor=Brown&clotheType=ShirtCrewNeck&clotheColor=White&eyeType=EyeRoll&eyebrowType=RaisedExcited&mouthType=Tongue&skinColor=Light'
	},
	{
		name: 'Clementina Paiva',
		list: ['2 pacotes de torrada', '1 pote de requeijão', '1 pacote de café'],
		address: 'Rua dos Tupinambás, 156',
		avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Blank&hairColor=Brown&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Blue01&graphicType=Bat&eyeType=Wink&eyebrowType=UpDown&mouthType=Default&skinColor=Tanned'
	},
	{
		name: 'Camila Barbosa',
		list: ['1kg de ração para gatos', '1 pote de sorvete de flocos', '1 ramo de rúcula'],
		address: 'Rua Ucy Nagamine, 307',
		avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraightStrand&accessoriesType=Prescription02&hairColor=Red&facialHairType=Blank&clotheType=Overall&clotheColor=Black&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=Grimace&skinColor=Pale'
	},
]

const OrdersBoard = () => {
	return (
		<Container>

			<div className='in-progress'>
				<h2>Pedidos em andamento</h2>
			</div>

			<div className="cards-wrapper">
				<div className='cards'>
					{orders.map(order => (
						<Card isOrder={true} orders={order} title={order.name} className="card" />
					))}
				</div>
			</div>

			<div className='delivered'>
				<h2>Pedidos entregues</h2>
			</div>

			<div className='table'>
				<Card hasOrdersTable={true} />
			</div>

		</Container>
	);
}

export default OrdersBoard;