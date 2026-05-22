import { mySiteInfo,contactInfo,contactForm } from "../infos";
import { useContext,useState } from "react";
import { ThemeContext } from "../ThemeContext";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone,FiMapPin  } from "react-icons/fi";
import { motion, spring } from "framer-motion";
import emailjs from "@emailjs/browser";
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact(){
    const {lang} = useContext(ThemeContext)
    const {theme} = useContext(ThemeContext)
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: "",
        });
    const [sending, setSending] = useState(false);
    const handleSend = (e) => {
        e.preventDefault();
        const hasEmpty = [formData.fullName, formData.subject, formData.message].some((v) => !v.trim());
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
        if (validEmail && !hasEmpty) 
        {
        setSending(true);
        emailjs.send(
            SERVICE_ID,      
            TEMPLATE_ID,     
            {
            from_name: formData.fullName,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            },
            PUBLIC_KEY      
        )
        .then(() => {
            alert("Message sent successfully!");
            setFormData({ fullName: "", email: "", subject: "", message: "" });
        })
        .catch(() => alert("Failed to send. Try again."))
        .finally(() => setSending(false));
    }else{
        alert("Please fill all fields and enter a valid email");
    }
    };
    return(
            <section id="Contact" className={`${theme} dark:bg-slate-700 bg-indigo-300 p-4 sm:text-4xl text-2xl dark:text-gray-100 text-slate-700`}>
                <h1 className="py-6 font-extrabold">// {mySiteInfo[lang].nav[4]}</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="text-base lg:text-sm md:text-base">
                        <motion.p initial={{opacity:0,x:-50}} transition={{duration:0.8}} whileInView={{opacity:1,x:0}} className="text-justify text-base font-bold mb-4">{contactInfo[lang].paragraph}</motion.p>
                        <motion.div initial={{opacity:0,x:-50}} transition={{duration:0.8,delay:0.3}} whileInView={{opacity:1,x:0}} className="flex gap-2 flex-col py-4">
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
                        </motion.div>
                    </div>
                    <motion.form onSubmit={handleSend} initial={{opacity:0,y:50}} transition={{duration:0.8}} whileInView={{opacity:1,y:0}} className="flex flex-col gap-6 xl:w-full sm:w-[90%] w-full m-auto">
                        <div className="flex gap-2 text-xs lg:text-sm md:text-base">
                            <div className="grid grid-cols-2 gap-4 w-full">
                                <div className="flex flex-col">
                                    <label className="py-1" htmlFor="fullName">{contactForm[lang].label1}</label>
                                    <input required onChange={(e) => setFormData({...formData, fullName: e.target.value})} className="h-12 p-2 rounded-lg bg-indigo-500 text-gray-200 outline-none ring-2 ring-transparent transition-all dark:focus:ring-white/50 focus:ring-indigo-700/50" type="text" id="fullName" placeholder={`${contactForm[lang].placeH1}`}/>
                                </div>
                                <div className="flex flex-col">
                                    <label className="py-1" htmlFor="Email">{contactForm[lang].label2}</label>
                                    <input required onChange={(e) => setFormData({...formData, email: e.target.value})} className="h-12 p-2 rounded-lg bg-indigo-500 text-gray-200 outline-none ring-2 ring-transparent transition-all dark:focus:ring-white/50 focus:ring-indigo-700/50" type="email" id="Email" placeholder={`${contactForm[lang].placeH2}`}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col text-xs lg:text-sm md:text-base">
                            <label className="py-1" htmlFor="subject">{contactForm[lang].label3}</label>
                            <input required onChange={(e) => setFormData({...formData, subject: e.target.value})} className="h-12 p-2 rounded-lg bg-indigo-500 text-gray-200 outline-none ring-2 ring-transparent transition-all dark:focus:ring-white/50 focus:ring-indigo-700/50" type="text" id="subject" placeholder={`${contactForm[lang].placeH3}`}/>
                        </div>
                        <div className="flex flex-col text-xs lg:text-sm md:text-base">
                            <label className="py-1" htmlFor="message">{contactForm[lang].label4}</label>
                            <textarea required onChange={(e) => setFormData({...formData, message: e.target.value})} className="h-32 resize-none p-2 rounded-lg bg-indigo-500 text-gray-200 outline-none ring-2 ring-transparent transition-all dark:focus:ring-white/50 focus:ring-indigo-700/50" id="message" placeholder={`${contactForm[lang].placeH4}`}/>
                        </div>
                        <div className="flex flex-col text-xs lg:text-sm md:text-base">
                            <motion.button disabled={sending} whileTap={{scale:0.95}} transition={{type:spring}} type="submit" className="h-12 p-2 border-b-3 border-white font-extrabold rounded-lg dark:bg-indigo-300 bg-indigo-600 dark:text-slate-700 text-gray-300 text-lg">{contactForm[lang].btn}</motion.button>
                        </div>
                    </motion.form>
                </div>
            </section>
    );
}