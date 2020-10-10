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
`;

const HeaderLogo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	
	img {
		/* padding: 0 5px; */
		height: 2.4rem;
		margin-right: 10px;
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

		li {
			padding: 15px;
			margin: 1px;
			font-size: 0.95rem;
			a {
				text-decoration: none;
				color: inherit;
			}
		}

		li#general {
			border-bottom: 3px solid #333
		}
	}

`;

const HeaderProfile = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;

.profile-icon {
		height: 5vh;
		width: 5vh;
		border-radius: 100%;
		background: #dadada;
		padding: 0;
		border: 2px solid #596dff;
		margin-left: 20px;
		cursor: pointer;
	}
`;

export { Container, HeaderButtons, HeaderLogo, HeaderProfile };