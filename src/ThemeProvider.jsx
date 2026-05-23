import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export function ThemeProvider({ children }) {

   const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'; 
  });
  const [lang,setLang] = useState(() => {
    return localStorage.getItem('lang') || 'En'; 
  })
  const [isRectangle, setIsRectangle] = useState(window.innerHeight < 550);

  return (
    <ThemeContext.Provider value={{ theme, setTheme,lang,setLang,isRectangle,setIsRectangle }}>
      {children}
    </ThemeContext.Provider>
  );
}