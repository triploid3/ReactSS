import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tags from "./components/Tags";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import ViewFeed from "./pages/ViewFeed";
import AddFeed from "./components/AddFeed";
import Layout from "./styles/Layout";

const Container = styled.div``;

const SideBar = styled.div`
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export default () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:feed/:feedTitle" component={ViewFeed} />
        <Route path="/:feed" component={Feed} />
      </Switch>
      <SideBar>
        <AddFeed />
        <Tags />
      </SideBar>
    </Layout>
  </Router>
);
