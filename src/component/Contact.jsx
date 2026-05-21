import { mySiteInfo,contactInfo } from "../infos";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone,FiMapPin  } from "react-icons/fi";


export default function Contact(){
    const {lang} = useContext(ThemeContext)
    const {theme} = useContext(ThemeContext)
    return(
            <section id="Contact" className={`${theme} dark:bg-slate-700 bg-indigo-300 p-4 sm:text-4xl text-2xl dark:text-gray-100 text-slate-700`}>
                <h1 className="py-6 font-extrabold">// {mySiteInfo[lang].nav[4]}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-base font-bold mb-4">{contactInfo[lang].paragraph}</p>
                        <div className="flex gap-2 flex-col text-base py-4">
                            <div className="flex items-center gap-2 text-white">
                                <HiOutlineMail className="w-12 h-12 bg-indigo-500 p-2 rounded-xl" size={32}/>
                                <div className="flex flex-col p-2">
                                    <div className="dark:text-gray-300 text-slate-800">{contactInfo[lang].emailLabel}</div>
                                    <div className="dark:text-white text-slate-700 font-extrabold">{contactInfo[lang].email}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-white">
                                 <FiPhone className="w-12 h-12 bg-indigo-500 p-2 rounded-xl" size={32}/>
                                <div className="flex flex-col p-2">
                                    <div className="dark:text-gray-300 text-slate-800">{contactInfo[lang].phoneLabel}</div>
                                    <div dir="ltr" className="dark:text-white text-slate-700 font-extrabold">{contactInfo[lang].phone}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-white">
                                 <FiMapPin className="w-12 h-12 bg-indigo-500 p-2 rounded-xl" size={32}/>
                                <div className="flex flex-col p-2">
                                    <div className="dark:text-gray-300 text-slate-800">{contactInfo[lang].addressLabel}</div>
                                    <div dir="ltr" className="dark:text-white text-slate-700 font-extrabold">{contactInfo[lang].address}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-2 text-base">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                                <div className="flex flex-col">
                                    <label htmlFor="fullName">Name</label>
                                    <input className="p-2 rounded-lg bg-indigo-500 text-gray-200 outline-none ring-2 ring-transparent transition-all dark:focus:ring-white/50 focus:ring-indigo-700/50" type="text" id="fullName" placeholder="Your Name"/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="Email">Email</label>
                                    <input className="p-2 rounded-lg bg-indigo-500 text-gray-200 outline-none ring-2 ring-transparent transition-all dark:focus:ring-white/50 focus:ring-indigo-700/50" type="text" id="Email" placeholder="Your@email.com"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}