import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme, { darkTheme } from "./styles/theme";
import Home from "./pages/Home";
import Feed from "./pages/Feed";

export default () => (
  <ThemeProvider theme={darkTheme}>
    <Router>
      <GlobalStyle />
      <h1 style={{ color: darkTheme.accent, fontWeight: "500" }}>
        Newsboat for the web
      </h1>
      <Route exact path="/" component={Home} />
      <Route path="/:feed" component={Feed} />
    </Router>
  </ThemeProvider>
);
