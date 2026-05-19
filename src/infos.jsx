 const person = {
    En: {
        logo: "Dr.ilyes",
        name: "Ilyes",
        role: "Front-end Developer",
        status: "Available",
        aboutMe: "I build pixel-perfect interfaces and delightful web experiences — turning complex ideas into elegant, performant code."
    },
    Ar: {
        logo: "د. إلياس",
        name: "ilyes",
        role: "مطور واجهات أمامية",
        status: "متاح",
        aboutMe: "أقوم ببناء واجهات دقيقة على مستوى البكسل وتجارب ويب ممتعة — أحوّل الأفكار المعقدة إلى كود أنيق وعالي الأداء."
    },
    Fr: {
        logo: "Dr.ilyes",
        name: "Ilyes",
        role: "Développeur Front-end",
        status: "Disponible",
        aboutMe: "Je crée des interfaces pixel-perfect et des expériences web agréables — en transformant des idées complexes en code élégant et performant."
    }
};
    const mySiteInfo = {
        En: {
            nav: ["About Me","Curriculum", "Projects", "Skills", "Contact"],
            headerBtn: ["getInTouch()", "viewCv()"]
        },
        Ar: {
            nav: ["من أنا","المسار الدراسي","مشاريعي", "مهاراتي", "اتصل بي"],
            headerBtn: ["تواصل_معي()", "عرض_السيرة()"]
        },
        Fr: {
            nav: ["À propos","Parcours", "Projets", "Compétences", "Contact"],
            headerBtn: ["ContacterMoi()", "voirCv()"]
        }
    };
    const curriculum = {
        En: [
            {
                year: 2018,
                header: "High School",
                paragraph: "Graduated from high school",
            },
            {
                year: 2021,
                header: "Bachelor's degree",
                paragraph: "Completed my Bachelor's degree in Computer Science",
            },
            {
                year: 2024,
                header: "Master's degree",
                paragraph:"Completed my Master's degree in Intelligent Systems and Decision-Making",
            },
        ],
        Fr: [
            {
                year: 2018,
                header: "Baccalauréat",
                paragraph: "Diplômé du lycée",
            },
            {
                year: 2021,
                header: "Licence",
                paragraph: "Licence en informatique obtenue",
            },
            {
                year: 2024,
                header: "Master",
                paragraph:"Master en systèmes intelligents et aide à la décision terminé",
            },
        ],
        Ar: [
            {
                year: 2018,
                header: "شهادة الثانوية",
                paragraph: "تخرجت من الثانوية العامة",
            },
            {
                year: 2021,
                header: "شهادة الليسانس",
                paragraph: "أكملت شهادة الليسانس في علوم الحاسوب",
            },
            {
                year: 2024,
                header: "شهادة الماستر",
                paragraph:"أكملت شهادة الماستر في الأنظمة الذكية واتخاذ القرار",
            },
        ],
        };
export { person, mySiteInfo, curriculum };