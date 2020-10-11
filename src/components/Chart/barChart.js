import React from 'react';
import { Bar } from 'react-chartjs-2';
import Container from './styles';

const data = {
	labels: ['Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out'],
	datasets: [
		{
			label: 'Faturamento em R$',
			backgroundColor: 'rgba(89,109,255,0.8)',
			borderColor: 'rgba(89,109,255,1)',
			borderWidth: 1,
			hoverBackgroundColor: 'rgba(89,109,255,0.8)',
			hoverBorderColor: 'rgba(89,109,255,1)',
			data: [25485.25, 30524.85, 27458.25, 24321.25, 21582.63, 28695.62, 35854.24]
		}
	]
};

const options = {
	legend: {
		display: false
	},
	scales: {
		yAxes: [
			{
				ticks: {
					display: false,
					max: 31000
				},
				gridLines: {
					show: false
				}
			}
		],
		xAxes: [
			{
				gridLines: {
					show: false
				}
			}
		]
	}
}

const BarChart = () => {
	return (
		<Container>
			<Bar
				data={data}
				width={100}
				height={38}
				options={options}
			/>
		</Container>);
}

export default BarChart;