import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export function ThemeProvider({ children }) {

   const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'; 
  });
  const [lang,setLang] = useState(() => {
    return localStorage.getItem('lang') || 'En'; 
  })

  return (
    <ThemeContext.Provider value={{ theme, setTheme,lang,setLang }}>
      {children}
    </ThemeContext.Provider>
  );
}