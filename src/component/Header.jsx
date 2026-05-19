import Navbar from "./Navbar";
import { ArrowRight } from "lucide-react";
import myPhoto from "../assets/images/myPhoto.jpg"
import { person,mySiteInfo } from "../infos";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { motion } from "motion/react"
import TypingText from "./TypingText";
export default function Header(){
    const {lang,setLang} = useContext(ThemeContext);
    const { theme, toggleTheme } = useContext(ThemeContext);
    return(
        <div className={`${theme} dark:bg-slate-700 bg-indigo-300`}>
        <Navbar/>
        <div className={`${theme} pt-20 grid sm:grid-cols-3 gap-3 justify-items-center border-b-4 dark:border-indigo-300 border-slate-700 p-4`}>
            <motion.div initial={{x:-50,opacity:0}} transition={{duration:0.8}} animate={{x:0,opacity:1}} className={`sm:text-4xl text-2xl dark:text-gray-100 text-slate-700 col-span-3 lg:col-span-2 p-2`}>
                <h1 id="about" className="py-6 font-extrabold">// {mySiteInfo[lang].nav[0]}</h1>
                <TypingText/>
                <hr className="border-t-2 dark:border-gray-300 border-slate-700 my-6"/>
                <p className={`text-xl my-8 text-justify`}>
                    {person[lang].aboutMe}
                </p>
                <div className={`inline-grid grid-cols-2 gap-4 sm:text-xl text-sm my-2`}>
                    <motion.button  whileTap={{scale:0.9}} transition={{type:"spring"}} className="p-2 text-gray-300 dark:bg-slate-700 bg-indigo-500 hover:bg-indigo-600 dark:hover:bg-slate-800 hover:cursor-pointer rounded border-2 border-black dark:border-gray-300" type="button">{mySiteInfo[lang].headerBtn[0]} {lang != "Ar"? "→" : "←"}</motion.button>
                    <motion.button whileTap={{scale:0.9}} transition={{type:"spring"}} className="p-2 text-gray-300 dark:bg-slate-700 bg-indigo-500 hover:bg-indigo-600 dark:hover:bg-slate-800 hover:cursor-pointer rounded border-2 border-black dark:border-gray-300" type="button">{mySiteInfo[lang].headerBtn[1]} {lang != "Ar"? "→" : "←"}</motion.button>
                </div>
            </motion.div>
            <div className={`lg:col-span-1 col-span-3 flex flex-col gap-y-6 justify-center items-center`}>
                <motion.div initial={{x:50,opacity:0}} transition={{duration:0.8}} animate={{x:0,opacity:1}} className="h-80 w-80 border-4 border-slate-700 dark:border-indigo-300 rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover" src={myPhoto} alt="My Photo" />
                </motion.div>
                <div className="">
                    <motion.div initial={{opacity:0,x:50}} transition={{duration:0.8,delay:0.2,ease:"easeIn"}} animate={{opacity:1,x:0}} className="p-2 px-4 dark:bg-slate-700 bg-indigo-500 hover:bg-indigo-600 grid grid-cols-3 text-gray-100 dark:hover:bg-slate-800 rounded border-2 border-black dark:border-gray-300" type="button">
                        <span className="col-span-2">{person[lang].status}</span>
                        <span className="relative w-4 h-4 col-span-1 m-auto">
                            <span className="absolute inset-x-0 w-full h-full rounded-full bg-emerald-400"></span>
                            <span className="absolute inset-x-0 w-full h-full animate-ping rounded-full bg-emerald-400 opacity-90"></span>
                        </span> 
                    </motion.div>
                </div>
            </div>
        </div>
        </div>
    );
}