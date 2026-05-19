import MarqueeLib from 'react-fast-marquee';
const Marquee = MarqueeLib.default || MarqueeLib;
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { mySiteInfo } from "../infos";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaJs,
  FaPython 
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandAdobePhotoshop  } from "react-icons/tb";
import { BsVectorPen } from "react-icons/bs";

export default function Skills() {
    const {theme, setTheme} = useContext(ThemeContext);
    const {lang,setLang} = useContext(ThemeContext);
  return (
    <div dir ="ltr" className={`${theme} dark:bg-slate-700 bg-indigo-300 dark:text-gray-100 text-slate-700 p-4 `}>
        <h1 dir={`${lang == "Ar"? "rtl":"ltr"}`} id="skills" className="z-1 sm:text-4xl text-2xl dark:text-gray-100 text-slate-700 py-6 font-extrabold">// {mySiteInfo[lang].nav[3]}</h1>
        <div className='overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
            <Marquee
            speed={100}
            pauseOnHover={false}
            gradient={false}
            >
                <div className={`flex py-4 `}>
                    <div className="mx-6 flex gap-2 flex-col hover:scale-105 transition-all">
                        <FaHtml5 size={100} className='w-32 h-32 rounded-4xl hover:ring-white/80 ring-transparent ring-4 bg-indigo-500 p-10 dark:text-gray-100 text-white text-xl'/>
                        <span className='flex justify-center items-center font-extrabold'>HTML5</span>
                    </div>
                    <div className="mx-6 flex gap-2 flex-col hover:scale-105 transition-all">
                        <FaCss3Alt size={100} className='w-32 h-32 rounded-4xl hover:ring-white/80 ring-transparent ring-4 bg-indigo-500 p-10 dark:text-gray-100 text-white text-xl'/>
                        <span className='flex justify-center items-center font-extrabold'>CSS3</span>
                    </div>
                    <div className="mx-6 flex gap-2 flex-col hover:scale-105 transition-all">
                        <FaReact size={100} className='w-32 h-32 rounded-4xl hover:ring-white/80 ring-transparent ring-4 bg-indigo-500 p-10 dark:text-gray-100 text-white text-xl'/>
                        <span className='flex justify-center items-center font-extrabold'>React</span>
                    </div>
                    <div className="mx-6 flex gap-2 flex-col hover:scale-105 transition-all">
                        <TbBrandAdobePhotoshop size={100} className='w-32 h-32 rounded-4xl hover:ring-white/80 ring-transparent ring-4 bg-indigo-500 p-10 dark:text-gray-100 text-white text-xl'/>
                        <span className='flex justify-center items-center font-extrabold'>Photoshop</span>
                    </div>
                    <div className="mx-6 flex gap-2 flex-col hover:scale-105 transition-all">
                        <BsVectorPen size={100} className='w-32 h-32 rounded-4xl hover:ring-white/80 ring-transparent ring-4 bg-indigo-500 p-10 dark:text-gray-100 text-white text-xl'/>
                        <span className='flex justify-center items-center font-extrabold'>Illustrator</span>
                    </div>
                    <div className="mx-6 flex gap-2 flex-col hover:scale-105 transition-all">
                        <FaGitAlt size={100} className='w-32 h-32 rounded-4xl hover:ring-white/80 ring-transparent ring-4 bg-indigo-500 p-10 dark:text-gray-100 text-white text-xl'/>
                        <span className='flex justify-center items-center font-extrabold'>Git</span>
                    </div>
                    <div className="mx-6 flex gap-2 flex-col hover:scale-105 transition-all">
                        <SiTailwindcss size={100} className='w-32 h-32 rounded-4xl hover:ring-white/80 ring-transparent ring-4 bg-indigo-500 p-10 dark:text-gray-100 text-white text-xl'/>
                        <span className='flex justify-center items-center font-extrabold'>Tailwind</span>
                    </div>
                    <div className="mx-6 flex gap-2 flex-col hover:scale-105 transition-all">
                        <FaJs size={100} className='w-32 h-32 rounded-4xl hover:ring-white/80 ring-transparent ring-4 bg-indigo-500 p-10 dark:text-gray-100 text-white text-xl'/>
                        <span className='flex justify-center items-center font-extrabold'>Javascript</span>
                    </div> 
                    <div className="mx-6 flex gap-2 flex-col hover:scale-105 transition-all">
                        <FaPython size={100} className='w-32 h-32 rounded-4xl hover:ring-white/80 ring-transparent ring-4 bg-indigo-500 p-10 dark:text-gray-100 text-white text-xl'/>
                        <span className='flex justify-center items-center font-extrabold'>Python</span>
                    </div>  
                </div>
            </Marquee>
        </div>
    </div>
  );
}