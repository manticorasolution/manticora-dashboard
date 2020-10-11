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

const createData = (name, amount, expiration) => {
	return { name, amount, expiration }
};

const rows = [
	createData('Couve', '1 caixa', 'Em 7 dias'),
	createData('Arroz', '23 sacos', 'Em 15 dias'),
	createData('Tomate', '6 caixas', 'Em 21 dias'),
	createData('Cebola', '3 caixas', 'Em 26 dias'),
	createData('Pão de Forma', '9 pacotes', 'Em 27 dias'),
	createData('Margarina', '8 potes', 'Em 27 dias'),
	createData('Páprica', '15 pacotes', 'Em 28 dias'),
];

const ValiditiesTable = () => {
	const classes = useStyles();

	return (
		<TableContainer component={Paper} elevation={0}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell><b>Produto</b></TableCell>
						<TableCell align="left"><b>Quantidade</b></TableCell>
						<TableCell align="left"><b>Vence em</b></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell align="left">{row.amount}</TableCell>
							<TableCell align="left">{row.expiration}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default ValiditiesTable;