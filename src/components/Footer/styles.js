import styled from 'styled-components';

const Container = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
  color: #333;
	margin-bottom: 20px;
		
		a {
			text-decoration: none;
			color: inherit;
			font-weight: bold;
		}

		@media(max-width: 600px) {
			display: none;
		}
`;

export default Container;