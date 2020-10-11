import styled from 'styled-components';

const Container = styled.div`
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 0.1fr 1fr 0.5fr;
	grid-gap: 20px;
	grid-template-areas: "alert"
												"productsTable"
												"advice";

	margin: auto;
	max-width: 95vw;

	padding: 30px;

	.alert { grid-area: alert }
	
	.productsTable { grid-area: productsTable }
	
	.advice { 
		color: #45454b;
		grid-area: advice;
		display: flex;
		align-items: center;
		justify-content: center;
		
		h4 { margin: 10px }
	 }

`;

export default Container;