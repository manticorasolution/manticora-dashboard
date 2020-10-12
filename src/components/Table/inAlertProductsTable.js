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

const createData = (name, status, amount) => {
	return { name, status, amount }
};

const rows = [
	createData('Açúcar', 'Acabando', '2 sacos'),
	createData('Arroz', 'Validade próxima', '23 sacos'),
	createData('Tomate', 'Validade próxima', '6 caixas'),
	createData('Farinha de trigo', 'Acabando', '5 sacos'),
	createData('Amaciante', 'Acabando', '4 litros'),
];

const InAlertProductsTable = () => {
	const classes = useStyles();

	return (
		<TableContainer component={Paper} elevation={0}>
			<Table className={classes.table} size="small" aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell><b>Produto</b></TableCell>
						<TableCell align="left"><b>Situação</b></TableCell>
						<TableCell align="left"><b>Quantidade</b></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell align="left">{row.status}</TableCell>
							<TableCell align="left">{row.amount}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default InAlertProductsTable;