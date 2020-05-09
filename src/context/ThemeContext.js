import React, { createContext, useState } from "react";
import { lightTheme, darkTheme } from "../styles/theme";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const localSt = localStorage.getItem("themePref");

  const [theme, setTheme] = useState(
    localSt === "dark" ? darkTheme : lightTheme
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
