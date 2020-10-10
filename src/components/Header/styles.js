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

	h2 {
		font-size: 1.3rem;
	}
	
	img {
		padding: 0 30px;
		height: 2.4rem;
	}
`;

const HeaderOptions = styled.ul`
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
`;

export { Container, HeaderOptions, HeaderLogo };