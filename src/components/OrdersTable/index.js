import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FaPrint, FaCreditCard } from 'react-icons/fa';
import Container, { Badge } from './styles';

const useStyles = makeStyles({
	table: {
		minWidth: 450,
	},
});

const createData = (id, name, paymentMethod, paymentStatus, paymentTotal) => {
	return { id, name, paymentMethod, paymentStatus, paymentTotal }
};

const rows = [
	createData('0005', 'José Rodrigues', 'Cartão de crédito', 'PAGO', 'R$35.50'),
	createData('0004', 'Clara Alves', 'Cartão de crédito', 'PAGO', 'R$27.87'),
	createData('0003', 'Pedro Aguiar', 'Cartão de crédito', 'PAGO', 'R$115.32'),
	createData('0002', 'Ana Silva', 'Cartão de crédito', 'PAGO', 'R$87.25'),
	createData('0001', 'Ricardo Santos', 'Cartão de crédito', 'PAGO', 'R$93.98'),
];

const OrdersTable = () => {
	const classes = useStyles();

	return (
		<TableContainer component={Paper} elevation={0}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell><b>Pedido</b></TableCell>
						<TableCell align="left"><b>Cliente</b></TableCell>
						<TableCell align="left"><b>Meio de pagamento</b></TableCell>
						<TableCell align="left"><b>Situação</b></TableCell>
						<TableCell align="left"><b>Total</b></TableCell>
						<TableCell align="left"></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							<TableCell component="th" scope="row">
								{row.id}
							</TableCell>
							<TableCell align="left">{row.name}</TableCell>
							<TableCell align="left">
								<Container>
									<FaCreditCard size="1rem" color="inherit" />
									<p>{row.paymentMethod}</p>
								</Container>
							</TableCell>
							<TableCell align="left">
								<Badge>
									{row.paymentStatus}
								</Badge>
							</TableCell>
							<TableCell align="left">{row.paymentTotal}</TableCell>
							<TableCell align="left">
								<FaPrint size="1rem" color="inherit" />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default OrdersTable;