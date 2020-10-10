import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@200;300;400;500;600&display=swap');

	* {
		margin: 0;
		padding: 0;
		/* outline: 0; */
		box-sizing: border-box;
	}

	html, body, #root {
		height: 100%;

	}

	body {
		font-family: 'Roboto', sans-serif;
		background: #ecedef;
		color: #333;
		-webkit-font-smoothing: antialiased !important;
	}

`;