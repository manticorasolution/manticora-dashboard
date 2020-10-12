import React from 'react';
import { Line } from 'react-chartjs-2';

// const a = document.querySelector('.root');

const data = {
	labels: ['1', '5', '10', '15', '20', '25', '30'],
	datasets: [{
		label: 'Loja Física',
		fill: true,
		lineTension: 0.1,
		backgroundColor: 'rgba(152,223,234,1)',
		borderColor: 'rgba(152,223,234,1)',
		borderCapStyle: 'butt',
		borderDash: [],
		borderDashOffset: 0.0,
		borderWidth: 3,
		pointBorderColor: 'rgba(152,223,234,1)',
		pointBackgroundColor: '#fff',
		pointBorderWidth: 1,
		pointHoverRadius: 5,
		pointHoverBackgroundColor: 'rgba(152,223,234,1)',
		pointHoverBorderColor: 'rgba(152,223,234,1)',
		pointHoverBorderWidth: 2,
		pointRadius: 1,
		pointHitRadius: 10,
		data: [
			15321.50,
			(36482.25 - 20678.56),
			(37526.36 - 21785.65),
			(38482.85 - 22564.55),
			(39524.56 - 23898.6),
			(39752.20 - 24785.65),
			(41452.56 - 25789.61)
		]
	},

	{
		label: 'E-commerce',
		fill: true,
		lineTension: 0.1,
		// backgroundColor: 'rgba(152,223,234,1)',
		backgroundColor: 'rgba(7,190,184,1)',
		borderColor: 'rgba(7,190,184,1)',
		borderCapStyle: 'butt',
		borderDash: [],
		borderDashOffset: 0.0,
		borderWidth: 3,
		pointBorderColor: 'rgba(7,190,184,1)',
		pointBackgroundColor: '#fff',
		pointBorderWidth: 1,
		pointHoverRadius: 5,
		pointHoverBackgroundColor: 'rgba(7,190,184,1)',
		pointHoverBorderColor: 'rgba(7,190,184,1)',
		pointHoverBorderWidth: 2,
		pointRadius: 1,
		pointHitRadius: 10,
		data: [20532.74, 20678.56, 21785.65, 22564.55, 23898.6, 24785.65, 25789.61]
	},

	{
		label: 'Total',
		fill: true,
		lineTension: 0.1,
		backgroundColor: 'rgba(31,57,255,0.8)',
		// backgroundColor: 'rgba(7,190,184,0.8)',
		borderColor: 'rgba(31,57,255,1)',
		borderCapStyle: 'butt',
		borderWidth: 3,
		pointBorderColor: 'rgba(89,109,255,1)',
		pointBackgroundColor: '#fff',
		pointBorderWidth: 1,
		pointHoverRadius: 5,
		pointHoverBackgroundColor: 'rgba(89,109,255,1)',
		pointHoverBorderColor: 'rgba(89,109,255,1)',
		pointHoverBorderWidth: 2,
		pointRadius: 1,
		pointHitRadius: 10,
		data: [35854.24, 36482.25, 37526.36, 38482.85, 39524.56, 39752.20, 41452.56]
	},
	]
};

const LineChart = () => {
	return (
		<Line data={data} />
	);
}

export default LineChart;