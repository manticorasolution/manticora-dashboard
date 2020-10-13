import styled from 'styled-components';

const Container = styled.div`
	color: #721c24;
	background: rgb(255,82,82, 0.65);
	border-radius: 5px;
	padding: 15px 30px;
	cursor: pointer;
	display: grid;
	grid-template-columns: 0.1fr 1fr;
	grid-template-rows: 1fr;
	grid-template-areas: 'icon title'
												'icon subtitle';
	grid-gap: 0px 10px;

	.title {
		font-size: .9rem;
		font-weight: 600;
		grid-area: title;
	}
	.subtitle {
		font-size: 0.8rem;
		font-weight: 200;
		grid-area: subtitle;
	}
	.icon {
		grid-area: icon
	}

`;

export default Container;
