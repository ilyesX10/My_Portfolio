import { Sun,Moon,Menu,X } from "lucide-react";
import { useState,useEffect, useRef } from "react";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { person,mySiteInfo } from "../infos";
import { motion } from "motion/react";

export default function Navbar(){
    const [menuClick,setMenuClick] = useState(false);
    const {lang,setLang} = useContext(ThemeContext);
    const {theme, setTheme} = useContext(ThemeContext);
    const [changed, setChanged] = useState(false);
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);
    useEffect(()=>{
        localStorage.setItem('lang', lang);
    },[lang])
    useEffect(() => {
        function handleResize() {
            setChanged(true);
            setMenuClick(false);
        }
        window.addEventListener("resize", handleResize);
        return () => {
        window.removeEventListener("resize", handleResize);
        };}, []);
    return(
        <nav className={`${theme} fixed top-0 right-0 ${menuClick && "h-full"} left-0 z-50 backdrop-blur-2xl dark:bg-slate-transparent bg-indigo-transprent ${lang =="Ar"? "font-[ArabicFont]":"font-[LatinFont]"} border-b-4 dark:border-indigo-300 border-slate-700 grid grid-cols-6 lg:grid-rows-1 ${menuClick && "grid-rows-3"} items-center py-4`}>
            <motion.span initial={{opacity:0,y:-50}} transition={{duration:0.8}} animate={{opacity:1,y:0}} className={`lg:col-span-1 col-span-4 order-1 dark:drop-shadow-[0_0_0.5px_black] drop-shadow-[0_0_0.5px_white] dark:text-white text-slate-700 flex lg:justify-center justify-start px-2 xl:text-2xl lg:text-base text-2xl font-extrabold bg-transparent`}>&lt; {person[lang].logo}/ &gt;</motion.span>
            <ul className={`list-none lg:flex ${menuClick? "block":"hidden"} lg:col-span-3 col-span-6 lg:order-2 order-5 lg:justify-center`}>
                <li className="flex py-2 justify-center"><a href="#about" className={`${lang =="Fr"|| lang =="En"? "xl:text-base lg:text-sm text-3xl":"xl:text-xl lg:text-base text-3xl"} lg:drop-shadow-none drop-shadow-[0_0_0.5px_black] mx-4 dark:text-gray-300 text-slate-700 hover:text-white transition-all font-bold`} onClick={()=>{setMenuClick(prev=>false)}}>{mySiteInfo[lang].nav[0]}</a></li>
                <li className="flex py-2 justify-center"><a href="#Curriculum" className={`${lang =="Fr"|| lang =="En"? "xl:text-base lg:text-sm text-3xl":"xl:text-xl lg:text-base text-3xl"} lg:drop-shadow-none drop-shadow-[0_0_0.5px_black] mx-4 dark:text-gray-300 text-slate-700 hover:text-white transition-all font-bold`} onClick={()=>{setMenuClick(prev=>false)}}>{mySiteInfo[lang].nav[1]}</a></li>
                <li className="flex py-2 justify-center"><a href="#projects" className={`${lang =="Fr"|| lang =="En"? "xl:text-base lg:text-sm text-3xl":"xl:text-xl lg:text-base text-3xl"} lg:drop-shadow-none drop-shadow-[0_0_0.5px_black] mx-4 dark:text-gray-300 text-slate-700 hover:text-white transition-all font-bold`} onClick={()=>{setMenuClick(prev=>false)}}>{mySiteInfo[lang].nav[2]}</a></li>
                <li className="flex py-2 justify-center"><a href="#skills" className={`${lang =="Fr"|| lang =="En"? "xl:text-base lg:text-sm text-3xl":"xl:text-xl lg:text-base text-3xl"} lg:drop-shadow-none drop-shadow-[0_0_0.5px_black] mx-4 dark:text-gray-300 text-slate-700 hover:text-white transition-all font-bold`} onClick={()=>{setMenuClick(prev=>false)}}>{mySiteInfo[lang].nav[3]}</a></li>
                <li className="flex py-2 justify-center"><a href="#contact" className={`${lang =="Fr"|| lang =="En"? "xl:text-base lg:text-sm text-3xl":"xl:text-xl lg:text-base text-3xl"} lg:drop-shadow-none drop-shadow-[0_0_0.5px_black] mx-4 dark:text-gray-300 text-slate-700 hover:text-white transition-all font-bold`} onClick={()=>{setMenuClick(prev=>false)}}>{mySiteInfo[lang].nav[4]}</a></li>
            </ul>
            <motion.div initial={{scale:.8,opacity:0}} transition={{duration:0.8}} animate={{scale:1,opacity:1}} className={`lg:col-span-1 col-span-6 lg:flex ${menuClick? "flex":"hidden"} justify-center lg:order-3 order-6`}>
                <div className="m-auto inline justify-center bg-indigo-400 dark:bg-slate-800 rounded-full dark:border-white border-slate-700 border-1 p-2">
                    <span className={`text-base text-gray-300 hover:cursor-pointer ${lang == "En"? "bg-indigo-700":"bg-transparet"} rounded-full px-3 py-1 font-bold`} onClick={()=>{setLang((prev)=>"En")}}>En</span>
                    <span className={`text-base text-gray-300 hover:cursor-pointer ${lang == "Ar"? "bg-indigo-700":"bg-transparet"} rounded-full font-bold px-3 py-1`} onClick={()=>{setLang((prev)=>"Ar")}}>Ar</span>
                    <span className={`text-base text-gray-300 hover:cursor-pointer ${lang == "Fr"? "bg-indigo-700":"bg-transparet"} rounded-full font-bold px-3 py-1`} onClick={()=>{setLang((prev)=>"Fr")}}>Fr</span>
                </div>
            </motion.div>
            <motion.div initial={{scale:.8,opacity:0}} transition={{duration:0.8}} animate={{scale:1,opacity:1}} className={`col-span-1 flex lg:justify-center justify-end lg:order-4 order-3`}>
                <div className="flex justify-between bg-indigo-400 dark:bg-slate-800 rounded-full dark:border-white border-slate-700 border-1 p-1" onClick={()=>{setTheme((prev)=> prev == "light" ? "dark":"light")}}>
                    <Sun className={`${theme == "dark"? "bg-indigo-700":"bg-transparent"} rounded-full px-1 hover:cursor-pointer`} color="white"/>
                    <Moon className={`${theme == "light"? "bg-indigo-700":"bg-transparent"} rounded-full px-1 hover:cursor-pointer`} color="white"/>
                </div>
            </motion.div>
            <motion.div initial={{y:-50,opacity:0}} transition={{duration:0.8}} animate={{y:0,opacity:1}} className={`lg:hidden col-span-1 flex justify-end px-2 items-center order-4`}>
                <Menu className={`${menuClick && "hidden"} dark:drop-shadow-[0_0_0.5px_black] drop-shadow-[0_0_0.5px_white] hover:cursor-pointer border-2 dark:border-white border-slate-700 dark:text-white text-slate-700 p-1`} size={40} onClick={()=>{setMenuClick((prev)=>!prev)}}/>
                <X className={`${!menuClick && "hidden"} dark:drop-shadow-[0_0_0.5px_black] drop-shadow-[0_0_0.5px_white] hover:cursor-pointer border-2 dark:border-white border-slate-700 dark:text-white text-slate-700 p-1`} size={40} onClick={()=>{setMenuClick((prev)=>!prev)}}/>
            </motion.div>
        </nav>
    );
}