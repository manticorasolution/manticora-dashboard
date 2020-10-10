import styled from 'styled-components';

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1.2fr;
	grid-template-rows: 12vh 36vh 55vh;
	grid-gap: 20px;
	height: calc(100% - 8vh);
	width: 100%;
	margin: auto;
	max-width: 95vw;

	grid-template-areas: "boardName boardName"
												"cardsLeftUp cardsRightUp"
												"cardsLeftDown cardsRightDown";

	.board-name {
		grid-column: 1/3;
		grid-area: boardName;

		display: flex;
		justify-content: flex-start;
		align-items: flex-end;
		color: #45454b;
	}

	.cards-left-up {
		grid-area: cardsLeftUp;

		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		grid-gap: 10px;
		height: 100%;

		.card1, .card2, .card3, .card4 { 
			background: white;
			border-radius: 10px;
		}

	}

	.cards-right-up {
		background: white;
		grid-area: cardsRightUp;
		border-radius: 10px;
	}

	.cards-left-down {
		background: white;
		grid-area: cardsLeftDown;
		border-radius: 10px;
	}

	.cards-right-down {
		grid-area: cardsRightDown;

		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 0.4fr 1fr;
		grid-row-gap: 20px;
		grid-template-areas: "alerts"
													"inAlertProducts";
		
		.alerts {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 0.6fr 0.6fr;
			grid-row-gap: 10px;
			grid-area: alerts;

			.alert1, .alert2 {
				background: salmon;
				border-radius: 10px;
			}
		}

		.in-alert-products {
			background: white;
			grid-area: inAlertProducts;
			border-radius: 10px;
		}
	}
`;

export default Container;