import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { person } from "../infos";

export default function TypingText() {
  const [output, setOutput] = useState([]);
  const [cursor, setCursor] = useState(true);

  const { lang, theme } = useContext(ThemeContext);

  const codeLines = [
    { type: "keyword", text: "const " },
    { type: "variable", text: "ilyes " },
    { type: "plain", text: "= {" },

    { type: "newline" },

    { type: "key", text: "  Role: " },
    { type: "string", text: `"${person[lang].role}",` },

    { type: "newline" },

    { type: "key", text: "  Status: " },
    { type: "string", text: `"${person[lang].status}"` },

    { type: "newline" },

    { type: "plain", text: "}" },
  ];

  // typing effect
  useEffect(() => {
    let i = 0;
    let currentOutput = [];

    // clear immediately
    setOutput([]);

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i >= codeLines.length) {
          clearInterval(interval);
          return;
        }

        currentOutput.push(codeLines[i]);

        // IMPORTANT: use fresh copied array
        setOutput([...currentOutput]);

        i++;
      }, 60);

      return () => clearInterval(interval);
    }, 120);

    return () => clearTimeout(timeout);
  }, [lang]);

  // blinking cursor
  useEffect(() => {
    const blink = setInterval(() => {
      setCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(blink);
  }, []);

  const getColor = (type) => {
    switch (type) {
      case "keyword":
        return "text-purple-400";

      case "variable":
        return "text-blue-400";

      case "key":
        return "text-emerald-400";

      case "string":
        return "text-orange-300";

      default:
        return "text-white";
    }
  };

  return (
    <div dir="ltr" className={`flex justify-start`}>
      <pre
        className={`${theme} dark:border-indigo-300 border-3 border-slate-700 bg-slate-900 text-sm p-4 sm:p-5 rounded-xl font-mono text-white leading-6 w-full sm:max-w-[600px] h-[150px] overflow-auto whitespace-pre overflow-x-auto text-left`}
      >
        {output.map((item, index) => {
          if (!item) return null;

          if (item.type === "newline") {
            return <br key={index} />;
          }

          return (
            <span key={index} className={getColor(item.type)}>
              {item.text}
            </span>
          );
        })}

        <span className="text-white">
          {cursor ? "|" : " "}
        </span>
      </pre>
    </div>
  );
}