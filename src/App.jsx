import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Roadmap from './component/Roadmap';
import Skills from './component/Skills';
function App() {
  const {lang,setLang} = useContext(ThemeContext);
  return (
    <>
      <div dir={`${lang == "Ar"? "rtl":"ltr"}`} className={`${lang =="Ar"? "font-[ArabicFont]":"font-[LatinFont]"}`}>
        <Header/>
          <main>
            <Roadmap/>
            <Skills/>
          </main>
      </div>
    </>
  )
}

export default App
 