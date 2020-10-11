import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 15px 30px 15px 20px;
	justify-content: space-between;
	cursor: pointer;
	box-shadow: -1px 2px 6px -2px rgba(0,0,0,0.35);
	background: white;

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
		display: flex;
		align-items: center;
		font-size: 0.8rem;
		color: grey;

		p { margin-left: 10px }
	}
`;

export default Container;