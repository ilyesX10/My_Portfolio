import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { GraduationCap } from "lucide-react";
import "react-vertical-timeline-component/style.min.css";
import { mySiteInfo,curriculum } from "../infos";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../ThemeContext";
function Roadmap() {
  const {lang} = useContext(ThemeContext);
  const {theme} = useContext(ThemeContext);
  return (
    <section id="Curriculum" className={`${theme} p-4 dark:bg-slate-700 bg-indigo-300 border-b-4 dark:border-indigo-300 border-slate-700`}>
      <h1 className="sm:text-4xl text-2xl dark:text-gray-100 text-slate-700 py-6 font-extrabold">// {mySiteInfo[lang].nav[1]}</h1>
      <div dir="ltr">
        <VerticalTimeline className="p-4" lineColor="#6366F1">
        <VerticalTimelineElement
          date={<span className={`text-3xl md:text-7xl flex ${lang == "Ar"? "justify-start":"justify-end"} md:justify-center font-bold`}>{curriculum[lang][0].year}</span>}
            contentStyle={{
              background: "#6366F1",
              color: "white",
              borderRadius: "20px"
          }}
              icon={<GraduationCap className="text-slate-700" />}
              contentArrowStyle={{
              borderRight: "7px solid #6366F1",
            }}
              iconStyle={{ background: "white" }}
          >
            <h1 dir={`${lang == "Ar"? "rtl":"ltr"}`} className={`text-2xl font-extrabold`}>{curriculum[lang][0].header}</h1>
            <p dir={`${lang == "Ar"? "rtl":"ltr"}`} className={``}>{curriculum[lang][0].paragraph}</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement 
            date={<span className={`text-3xl md:text-7xl flex ${lang == "Ar"? "justify-start":"justify-end"} md:justify-center font-bold`}>{curriculum[lang][1].year}</span>}
            contentStyle={{
              background: "#6366F1",
              color: "white",
              borderRadius: "20px",
            }}
            icon={<GraduationCap className={`text-slate-700`}/>}
            contentArrowStyle={{
              borderRight: "7px solid #6366F1",
            }}
            iconStyle={{ background: "white"}}
            iconClassName=""
          
          >
            <h1 dir={`${lang == "Ar"? "rtl":"ltr"}`} className={`text-2xl font-extrabold`}>{curriculum[lang][1].header}</h1>
            <p dir={`${lang == "Ar"? "rtl":"ltr"}`} className={``}>{curriculum[lang][1].paragraph}</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date={<span className={`text-3xl md:text-7xl flex ${lang == "Ar"? "justify-start":"justify-end"} md:justify-center font-bold`}>{curriculum[lang][2].year}</span>}
            title="Front-End Journey"
            contentStyle={{
              background: "#6366F1",
              color: "white",
              borderRadius: "20px",
            }}
            icon={<GraduationCap className="text-slate-700" />}
            contentArrowStyle={{
            borderRight: "7px solid #6366F1",
            }}
            iconStyle={{ background: "white" }}
          >
            <h1 dir={`${lang == "Ar"? "rtl":"ltr"}`} className={`text-2xl font-extrabold`}>{curriculum[lang][2].header}</h1>
            <p dir={`${lang == "Ar"? "rtl":"ltr"}`} className={``}>{curriculum[lang][2].paragraph}</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Roadmap;