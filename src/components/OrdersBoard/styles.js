import styled from 'styled-components';

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 0.1fr 0.7fr 0.1fr 1fr;
	grid-template-areas: "inProgressTitle"
												"inProgressCards"
												"deliveredTitle"
												"deliveredTable";

	flex-direction: row;
	max-width: 95vw;
	height: 150vh;
	margin: auto;

	@media(max-width: 600px) {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	h2 {
			margin: 35px 0 15px 0;
		}

	.in-progress {
		grid-area: inProgressTitle;
		padding-top: 30px;
		
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
			@media(max-width: 600px) {
			display: flex;
			flex-direction: column;
			width: 100%;
		}
	}

	.cards-wrapper {
				overflow-x: scroll;
	}

	.cards {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;	
		padding: 0;

		@media(max-width: 600px) {
		display: flex;
		flex-direction: row;
		height: 100%;
		/* width: 100%; */
		/* overflow-x: scroll; */
		/* overflow-y: visible !important; */
		margin: 10px;

	}
		.card {
			@media(max-width: 600px) {
			display: flex;
			text-align: center;
			/* flex-direction: column; */
			height: 50vh;
			margin: 10px;
		}
	}

	.delivered {
		grid-area: deliveredTitle;
		padding: 10px;
		@media(max-width: 600px) {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	}

	#order-title {
		@media(max-width: 600px) {
			display: none
		}
	}

	}`;

export default Container;