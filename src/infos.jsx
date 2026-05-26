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
        const contactInfo = {
            En:{
                paragraph: "Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you as soon as possible.",
                emailLabel: "Email",
                email: "ilyesdrouiche00@gmail.com",
                phoneLabel: "Phone",
                phone:"+213 6-76-47-42-60",
                addressLabel: "Address",
                address: "Tlemcen, Algeria"
            },
            Fr: {
                paragraph: "Avez-vous un projet en tête ? J’aimerais beaucoup en entendre parler. Envoyez-moi un message et je vous répondrai dès que possible.",
                emailLabel: "Email",
                email: "ilyesdrouiche00@gmail.com",
                phoneLabel: "Téléphone",
                phone:"+213 6-76-47-42-60",
                addressLabel: "Adresse",
                address: "Tlemcen, Algérie"
            },
            Ar: {
                paragraph: "هل لديك مشروع في ذهنك؟ يسعدني كثيرًا أن أسمع عنه. أرسل لي رسالة وسأرد عليك في أقرب وقت ممكن.",
                emailLabel: "البريد الإلكتروني",
                email: "ilyesdrouiche00@gmail.com",
                phoneLabel: "الهاتف",
                phone:"+213 6-76-47-42-60",
                addressLabel: "العنوان",
                address: "تلمسان، الجزائر"
            }
        }
const contactForm = {
    En: {
        label1: "Name",
        placeH1: "Your Name",
        label2: "Email",
        placeH2: "Your@email.com",
        label3: "Subject",
        placeH3: "Project Title",
        label4: "Message",
        placeH4: "Tell me about your project...",
        btn: "Send"
    },

    Fr: {
        label1: "Nom",
        placeH1: "Votre nom",
        label2: "Email",
        placeH2: "Votre@email.com",
        label3: "Sujet",
        placeH3: "Titre du projet",
        label4: "Message",
        placeH4: "Parlez-moi de votre projet...",
        btn: "Envoyer"
    },

    Ar: {
        label1: "الاسم",
        placeH1: "اسمك",
        label2: "البريد الإلكتروني",
        placeH2: "your@email.com",
        label3: "الموضوع",
        placeH3: "عنوان المشروع",
        label4: "الرسالة",
        placeH4: "أخبرني عن مشروعك...",
        btn: "إرسال"
    }
}
const footerInfo = {
    Ar: {
        paragraph:"2026 جميع الحقوق محفوظة.",
        logo:"درويش إلياس"
    },
    Fr: {
        paragraph:"2026 Tous droits réservés.",
        logo:"Drouiche Ilyes"
    },
    En: {
        paragraph:"2026 All rights reserved.",
        logo:"Drouiche Ilyes"
    }
}
const contactLinks = {
    linkedin : "",
    github : "https://github.com/ilyesX10",
}
export { person, mySiteInfo, curriculum, contactInfo,contactForm,footerInfo,contactLinks };