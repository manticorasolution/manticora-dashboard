import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	align-items: center;

	p {
		margin-left: 10px;
	}
`;

export const Badge = styled.div`
	height: 10%;
	width: 40%;
	background: #80D39B;
	display: flex;
	justify-content: center;
	border-radius: 15px;
	padding: 5px
`;

export default Container;