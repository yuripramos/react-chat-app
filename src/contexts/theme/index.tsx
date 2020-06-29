import React from "react";

const ThemeContext = React.createContext("");

const Provider = ThemeContext.Provider;

export { ThemeContext, Provider as ThemeProvider };
