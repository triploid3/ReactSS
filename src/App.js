import React, { useContext } from "react";
import styled from "styled-components";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import ViewFeed from "./pages/ViewFeed";
import { ThemeContext } from "./context/ThemeContext";
import ToggleTheme from "./components/ToggleTheme";
import ChangeAccent from "./components/ChangeAccent";

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  h1 {
    color: ${(props) => props.theme.accent};
    font-weight: 500;
    margin-right: 0.8rem;
  }

  svg {
    position: relative;
    top: 2px;
    margin: 0 0.4rem;
  }
`;

export default () => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Wrapper>
          <Link to="/">
            <h1>Newsboat for the web</h1>
          </Link>
          <ToggleTheme />
          <ChangeAccent />
        </Wrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:feed/:feedTitle" component={ViewFeed} />
          <Route path="/:feed" component={Feed} />
        </Switch>
      </Router>
    </StyledThemeProvider>
  );
};
