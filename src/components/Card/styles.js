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

	.orders-list {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		
		ul {
			list-style: none;

			div {
				display: flex;
				align-items: center;
				padding: 5px 0;

				li {
					padding: 0 0 0 10px;
				}
			}
		}
		padding: 10px 1px 10px 1px;

	}

	.address {
		padding: 20px 0;
		display: flex;
		align-items: center;
		justify-content: center;

		p {
			padding: 0 5px;
		}
		
	}

	.order-person {
		display: grid;
		margin: auto;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 0.1fr;
		grid-template-areas: "avatar"
													"person";
		
		.avatar {
			height: 15vh;
			width: 15vh;
		}

		.avatar-parent {
			display: flex;
			justify-content: center;
		}

		h1 {
			padding: 10px
		}
	}
`;

export default Container;