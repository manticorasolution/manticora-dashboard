import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 15px 30px 15px 20px;
	justify-content: space-between;
	cursor: pointer;

	.title {
		font-size: 1rem;
		font-weight: 200;

		b {
			font-weight: 600;
		}
		
		p {
			margin-top: 5px;
			font-size: 0.7rem;
			font-weight: 200;
			color: grey
		}
	}

	.revenues {
		font-size: 1.8rem;
		font-weight: 600;
		color: #596dff
	}

	.consideration {
		font-size: 0.8rem;
		color: grey
	}
`;

export default Container;