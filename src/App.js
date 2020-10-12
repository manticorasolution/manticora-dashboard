import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import StockPrediction from './pages/StockPrediction';
import ProductsValidity from './pages/ProductsValidity';

function App() {
	return (
		<BrowserRouter>
			<Switch >
				<Route exact path='/'>
					<Dashboard />
				</Route>
				<Route exact path='/pedidos'>
					<Orders />
				</Route>
				<Route exact path='/estoque'>
					<StockPrediction />
				</Route>
				<Route exact path='/validades'>
					<ProductsValidity />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
