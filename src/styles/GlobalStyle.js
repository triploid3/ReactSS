import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	html {
		font-size: 16px;
		box-sizing: border-box;
	}

	*, *:before, *:after {
		padding: 0;
		margin: 0;
		box-sizing: inherit;
	}

	body {
		width: 70%;
		margin: 1rem auto;
		font-family: ${props => props.theme.font};
		background: ${props => props.theme.bg};
		color: ${props => props.theme.color};
		line-height: 1.7;
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: normal;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
`;
