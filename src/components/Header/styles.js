import styled from 'styled-components';

const Container = styled.div`
	height: 8vh;
	padding: 0 30px;
	background: white;
	color: #3e4656;
	font-size: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media(max-width: 600px) {
		display: flex;
		width: 100%;
		height: 12vh;
		padding: 0 10px;
		overflow-x: scroll;
	}
`;

const HeaderLogo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media(max-width: 600px) {
		display: none;
	}
	
	img {
		cursor: pointer;
		height: 2.4rem;
		margin-right: 10px;
		
		@media(max-width: 600px) {
			padding-top: 10px;
			margin: none
		}		
	}
`;

const HeaderButtons = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	margin: 0;
	
	ul {
		list-style: none;
		display: flex;
		align-items: center;
		justify-content: space-between;

		@media(max-width: 600px) {
		display: flex;
		flex-direction: row;
		align-items: center;
		overflow-x: scroll;
	}

		li {
			padding: 16px 15px;
			margin: 0 1px;
			font-size: 0.95rem;
			cursor: pointer;
			text-align: center;
			height: 100%;

			a {
				text-decoration: none;
				color: inherit;
			}
		}

		li#${props => props.activePage} {
			border-bottom: 3px solid #596dff;
			color: #596dff;
			font-weight: 600;
		}
	}

`;

const HeaderProfile = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	cursor: pointer;

	@media(max-width: 600px) {
		display: none;
		flex-direction: column;
	}

.profile-icon {
		height: 5vh;
		width: 5vh;
		border-radius: 100%;
		background: #65c9ff;
		padding: 0;
		border: 2px solid #596dff;
		margin-left: 20px;
	}
`;

export { Container, HeaderButtons, HeaderLogo, HeaderProfile };