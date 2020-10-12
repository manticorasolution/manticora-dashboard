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

	h2 {
			margin: 35px 0 15px 0;
		}

	.in-progress {
		grid-area: inProgressTitle;
		padding-top: 30px;
		
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
	}

	.cards {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;	
		padding: 0;
	}

	.delivered {
		grid-area: deliveredTitle;
		padding: 10px;
	}

`;

export default Container;