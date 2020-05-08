import React from "react";
import { render } from "react-dom";
import App from "./App";
import { FeedProvider } from "./context/FeedContext";

render(
  <FeedProvider>
    <App />
  </FeedProvider>,
  document.getElementById("root")
);
