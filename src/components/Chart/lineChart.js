import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
	labels: ['1', '5', '10', '15', '20', '25', '31'],
	datasets: [
		{
			label: 'Loja Física',
			fill: true,
			lineTension: 0.1,
			backgroundColor: 'rgba(89,109,255,0.4)',
			borderColor: 'rgba(89,109,255,1)',
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: 'rgba(89,109,255,0.4)',
			pointBackgroundColor: '#fff',
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: 'rgba(89,109,255,0.4)',
			pointHoverBorderColor: 'rgba(89,109,255,0.4)',
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data: [65, 59, 80, 81, 56, 55, 40]
		},
		{
			label: 'E-commerce',
			fill: true,
			lineTension: 0.1,
			backgroundColor: 'rgba(89,109,255,0.4)',
			borderColor: 'rgba(89,109,255,1)',
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: 'rgba(89,109,255,0.4)',
			pointBackgroundColor: '#fff',
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: 'rgba(89,109,255,0.4)',
			pointHoverBorderColor: 'rgba(89,109,255,0.4)',
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data: [48, 52, 71, 154, 69, 78, 22]
		}
	]
};

const LineChart = () => {
	return (
		<Line data={data} />
	);
}

export default LineChart;