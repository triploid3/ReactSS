import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ColorIcon } from "./Icons";

export default () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const colors = ["#9F7AEA", "#48BB78", "#38B2AC", "#D53F8C", "#E53E3E"];

  const [currentColor, setCurrentColor] = useState(colors[0]);

  const changeColor = () => {
    let newAccentColor;

    if (colors.indexOf(currentColor) === colors.length - 1) {
      newAccentColor = colors[0];
    } else {
      newAccentColor = colors[colors.indexOf(currentColor) + 1];
    }

    setTheme({
      ...theme,
      accent: newAccentColor,
    });

    setCurrentColor(newAccentColor);
  };

  return <ColorIcon fill={theme.accent} onClick={changeColor} />;
};
