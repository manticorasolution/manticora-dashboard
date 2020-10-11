import styled from 'styled-components';

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(2, 0.5fr 1fr);
	grid-template-areas: "inProgressTitle"
												"inProgressCards"
												"deliveredTitle"
												"deliveredTable";

	flex-direction: row;
	max-width: 95vw;
	height: 100vh;
	margin: auto;

	.in-progress {
		grid-area: inProgressTitle;
		padding: 30px;
	}

	.cards {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.delivered {
		grid-area: deliveredTitle;
		padding: 30px;
	}

`;

export default Container;