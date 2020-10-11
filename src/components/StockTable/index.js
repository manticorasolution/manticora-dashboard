import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
	table: {
		minWidth: 450,
	},
});

const createData = (name, amount, lastSupply, recommendation) => {
	return { name, amount, lastSupply, recommendation }
};

const rows = [
	createData('Açúcar', '2 sacos', '25 sacos, há 7 dias', '30 sacos, hoje'),
	createData('Farinha de trigo', '5 sacos', '15 sacos, há 7 dias', '20 sacos, amanhã'),
	createData('Amaciante', '4 litros', '16 litros, há 15 dias', '20 litros, em 3 dias'),
	createData('Detergente', '5 frascos', '30 frascos, há 15 dias', '35 frascos, em 4 dias'),
	createData('Papel Higiênico', '10 pacotes', '50 pacotes, há 7 dias', '65 pacotes, em 5 dias'),
];

const StockTable = () => {
	const classes = useStyles();

	return (
		<TableContainer component={Paper} elevation={0}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell><b>Produto</b></TableCell>
						<TableCell align="left"><b>Quantidade</b></TableCell>
						<TableCell align="left"><b>Último abastecimento</b></TableCell>
						<TableCell align="left"><b>Recomendação</b></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell align="left">{row.amount}</TableCell>
							<TableCell align="left">{row.lastSupply}</TableCell>
							<TableCell align="left">{row.recommendation}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default StockTable;