import React from "react";
import { render } from "react-dom";
import App from "./App";
import { FeedProvider } from "./context/FeedContext";
import { ThemeProvider } from "./context/ThemeContext";

render(
  <FeedProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </FeedProvider>,
  document.getElementById("root")
);
