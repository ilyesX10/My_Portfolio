import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export function ThemeProvider({ children }) {

  const [theme, setTheme] = useState("light");
  const [lang,setLang] = useState("En")

  return (
    <ThemeContext.Provider value={{ theme, setTheme,lang,setLang }}>
      {children}
    </ThemeContext.Provider>
  );
}