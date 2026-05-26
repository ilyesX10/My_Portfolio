import { footerInfo,contactLinks } from "../infos";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";
import { FaLinkedin,FaGithub  } from "react-icons/fa";


export default function Footer(){
    const {lang} = useContext(ThemeContext)
    return(
        <footer className="text-sm md:text-base sm:flex-row flex justify-between items-center flex-col py-6 sm:px-12 px-0 bg-indigo-300 text-slate-700 dark:text-white font-semibold dark:bg-slate-700 border-t-4 dark:border-indigo-300 border-slate-700">
            <span className="sm:flex-row flex justify-center items-center">
                {footerInfo[lang].logo}
            </span>
            <p className="flex justify-center items-center xs:text-sm text-xs md:text-base">
                <span className="text-2xl relative top-[1px] mx-1">&copy;</span>
                {footerInfo[lang].paragraph}
            </p>
            <div className="flex justify-center items-center gap-2">
                <a href={``}><FaLinkedin className="dark:text-gray-300 text-slate-700 w-6 h-6" /></a>
                <a href={`${contactLinks.github}`}><FaGithub  className="dark:text-gray-300 text-slate-700 w-6 h-6"/></a> 
            </div>
        </footer>
    );
}