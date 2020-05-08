import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

export default () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle/> 
			<h3>Newsboat for the web</h3>
		</ThemeProvider>
	);
};
