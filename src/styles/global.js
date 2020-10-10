import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600&display=swap');

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
		font-family: 'Raleway', sans-serif;
		background: #ecedef;
		color: #333;
		-webkit-font-smoothing: antialiased !important;
	}

`;