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

const createData = (name, amount, revenues) => {
	return { name, amount, revenues }
};

const rows = [
	createData('Leite', '30 caixas', 'R$600,00'),
	createData('Dúzia de Ovos', '150 dúzias', 'R$1.500,00'),
	createData('Refrigerante', '45 fardos', 'R$900,00'),
	createData('Peito de Frango', '56 kg', 'R$112,00'),
	createData('Amendoim', '72 pacotes', 'R$720,00'),
];

const BestSellersTable = () => {
	const classes = useStyles();

	return (
		<TableContainer component={Paper} elevation={0}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell><b>Produto</b></TableCell>
						<TableCell align="left"><b>Quantidade</b></TableCell>
						<TableCell align="left"><b>Arrecadado</b></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell align="left">{row.amount}</TableCell>
							<TableCell align="left">{row.revenues}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default BestSellersTable;