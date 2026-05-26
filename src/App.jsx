import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Roadmap from './component/Roadmap';
import Skills from './component/Skills';
import Contact from './component/Contact';
import Navbar from "./component/Navbar";
import Footer from './component/Footer';
import { ScrollProvider } from './ScrollProvider';
function App() {
  const {lang,setLang} = useContext(ThemeContext);
  const {theme} = useContext(ThemeContext)
  return (
    <>
      <div dir={`${lang == "Ar"? "rtl":"ltr"}`} className={`${theme} overflow-x-hidden ${lang =="Ar"? "font-[ArabicFont]":"font-[LatinFont] overflow-y-hidden"}`}>
        <Navbar/>
          <ScrollProvider>
            <Header/>
              <main>
                <Roadmap/>
                <Skills/>
                <Contact/>
              </main>
          </ScrollProvider>
          <Footer/>
      </div>
    </>
  )
}

export default App
 