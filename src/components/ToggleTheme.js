import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ThemeIcon } from "./Icons";
import { lightTheme, darkTheme } from "../styles/theme";

const ToggleTheme = () => {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      setTheme(lightTheme);
      setCurrentTheme("light");
    } else {
      setTheme(darkTheme);
      setCurrentTheme("dark");
    }
  };

  return <ThemeIcon fill={theme.color} onClick={toggleTheme} />;
};

export default ToggleTheme;
