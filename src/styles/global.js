import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html, body, #root {
		height: 100%;

	}

	body {
		font-family: 'Open Sans', sans-serif;
		background: #ecedef;
		color: #45454b;
		-webkit-font-smoothing: antialiased !important;
	}

`;