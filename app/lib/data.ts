export type Locale = 'en' | 'el';

export const data = {
    en: {
        hero: {
            name: "Georgios Zavlanis",
            title: "Full Stack Developer & Software Engineer",
            ctaPrimary: "Contact Me",
            ctaSecondary: "Download CV",
            cvLink: "/assets/files/Georgios-ZavlanisCV.pdf",
        },
        contact: {
            email: "gzavlanis@gmail.com",
            phone: "(+30) 6989461460",
            address: "Pagkrati, Athens, Greece",
            socials: {
                linkedin: "https://www.linkedin.com/in/georgios-zavlanis/",
                github: "https://github.com/gzavlanis",
            },
        },
        about: {
            title: "About Me",
            description: "I am a graduate of the Department of Informatics and Telecommunications of the University of Peloponnese. Currently, I am working as a Full Stack Developer and pursuing my Master's Degree in Machine Learning and Data Science at the Hellenic Open University.",
        },
        experience: {
            title: "Professional Experience",
            jobs: [
                {
                    company: "W-LABEL",
                    location: "Palaio Faliro, Greece",
                    role: "Full Stack Developer",
                    period: "Sep 2024 - Jul 2025",
                    description: [
                        "Involved in the development of the ERP Product for Restaurants, using Typescript and ReactJS.",
                    ],
                },
                {
                    company: "Skill90 Startup Betting Company",
                    location: "Agios Dimitrios, Greece",
                    role: "Full Stack Developer",
                    period: "Jan 2023 - Aug 2024",
                    description: [
                        "Involved in the development of software for processing, storage, and data flow using NodeJS and Python.",
                        "Created frontend tools for data visualization, statistics, and user processes using ReactJS.",
                        "Assisted DevOps operations when needed.",
                    ],
                },
                {
                    company: "Hellenic Army (Research & IT Dept.)",
                    location: "Souflion, Evros, Greece",
                    role: "IT Support Technician",
                    period: "Apr 2022 - Dec 2022",
                    description: [
                        "Provided technical support and repair of information systems (Software & Hardware).",
                        "Organized IT support for exercises and activities.",
                        "Managed basic server operations and troubleshooting of local networks.",
                        "Developed internal tools using Python, HTML/CSS, and Javascript to meet daily operational needs.",
                    ],
                },
                {
                    company: "EnerData Enterprise Solutions",
                    location: "Greece",
                    role: "Web Developer & Technician",
                    period: "Aug 2019 - Mar 2022",
                    description: [
                        "Created professional websites and e-shops using Wordpress and Magento.",
                        "Reconstruction and management of online stores on behalf of clients.",
                        "Computer repair at Hardware and Software level.",
                    ],
                },
                {
                    company: "Business Cloud Information Systems",
                    location: "Greece",
                    role: "Junior Technician",
                    period: "May 2019 - Jul 2019",
                    description: [
                        "Acquired knowledge of server systems maintenance.",
                        "Utilized CMS software (Wordpress, Opencart) for creating websites and online stores.",
                    ],
                },
            ],
        },
        education: {
            title: "Education",
            items: [
                {
                    institution: "Hellenic Open University",
                    degree: "M.Sc. in Machine Learning and Data Science",
                    period: "Current",
                },
                {
                    institution: "University of Peloponnese",
                    degree: "B.Sc. Informatics and Telecommunications",
                    period: "Graduated",
                    details: "Thesis specialized in Deep Learning applications for Telecommunications.",
                },
            ],
        },
        skills: {
            title: "Technical Stack",
            list: [
                "Python", "JavaScript", "TypeScript", "Node.js", "React.js", "Redux", "Next.js",
                "MySQL","PostgresSQL", "MongoDB", "Redis", "RabbitMQ",
                "Docker", "Tensorflow", "Pandas", "ExpressJS",
                "HTML5", "CSS3", "ChatGPT API"
            ],
        },
        languages: {
            title: "Languages",
            items: ["English (ECCE Degree - University of Michigan)"],
        },
        interests: {
            title: "Hobbies & Interests",
            items: ["Photography", "Creative Writing", "Travelling"],
        },
    },
    el: {
        hero: {
            name: "Γεώργιος Ζαβλάνης",
            title: "Full Stack Developer & Software Engineer",
            ctaPrimary: "Επικοινωνία",
            ctaSecondary: "Λήψη Βιογραφικού",
            cvLink: "/assets/files/Georgios-ZavlanisCV.pdf",
        },
        contact: {
            email: "gzavlanis@gmail.com",
            phone: "(+30) 6989461460",
            address: "Παγκράτι, Αθήνα",
            socials: {
                linkedin: "https://www.linkedin.com/in/georgios-zavlanis/",
                github: "https://github.com/gzavlanis",
            },
        },
        about: {
            title: "Σχετικά με εμένα",
            description: "Είμαι απόφοιτος του Τμήματος Πληροφορικής και Τηλεπικοινωνιών του Πανεπιστημίου Πελοποννήσου. Αυτή την περίοδο εργάζομαι ως Full Stack Developer, ενώ παράλληλα πραγματοποιώ το Μεταπτυχιακό μου στη Μηχανική Μάθηση και την Επιστήμη Δεδομένων στο Ελληνικό Ανοικτό Πανεπιστήμιο.",
        },
        experience: {
            title: "Επαγγελματική Εμπειρία",
            jobs: [
                {
                    company: "W-LABEL",
                    location: "Παλαιό Φάληρο, Αττική",
                    role: "Full Stack Developer",
                    period: "Σεπ 2024 - Ιούλ 2025",
                    description: [
                        "Συμμετοχή στην ανάπτυξη του βασικού προϊόντος λογισμικού ERP, για μικρές επιχειρήσεις εστίασης και εστιατόρια, χρησιμοποιώντας Typescript και ReactJS.",
                    ],
                },
                {
                    company: "Skill90 Startup Betting Company",
                    location: "Άγιος Δημήτριος, Αττική",
                    role: "Full Stack Developer",
                    period: "Ιαν 2023 - Αύγ 2024",
                    description: [
                        "Συμμετοχή στην ανάπτυξη λογισμικού για την επεξεργασία, αποθήκευση και ροή δεδομένων χρησιμοποιώντας NodeJS και Python.",
                        "Δημιουργία frontend εργαλείων για οπτικοποίηση δεδομένων και στατιστικών, καθώς και για εκτέλεση διεργασιών από την πλευρά του χρήστη με ReactJS.",
                        "Υποστήριξη διαδικασιών DevOps.",
                    ],
                },
                {
                    company: "Ελληνικός Στρατός (Διεύθυνση Έρευνας & Πληροφορικής)",
                    location: "Σουφλί, Έβρος",
                    role: "Τεχνικός Υποστήριξης Πληροφορικής",
                    period: "Απρ 2022 - Δεκ 2022",
                    description: [
                        "Παροχή τεχνικής υποστήριξης και επισκευή πληροφοριακών συστημάτων (Software & Hardware).",
                        "Οργάνωση και παροχή τεχνικής υποστήριξης σε ασκήσεις και δραστηριότητες.",
                        "Διαχείριση βασικών λειτουργιών server και επίλυση προβλημάτων τοπικών δικτύων.",
                        "Ανάπτυξη εσωτερικών εργαλείων με Python, HTML/CSS και Javascript για την κάλυψη καθημερινών αναγκών.",
                    ],
                },
                {
                    company: "EnerData Enterprise Solutions",
                    location: "Ελλάδα",
                    role: "Web Developer & Τεχνικός",
                    period: "Αυγ 2019 - Μαρ 2022",
                    description: [
                        "Δημιουργία επαγγελματικών ιστοσελίδων και e-shops (Wordpress, Magento).",
                        "Ανακατασκευή και διαχείριση ηλεκτρονικών καταστημάτων για λογαριασμό πελατών.",
                        "Επισκευή υπολογιστών σε επίπεδο Υλικού (Hardware) και Λογισμικού (Software).",
                    ],
                },
                {
                    company: "Business Cloud Information Systems",
                    location: "Ελλάδα",
                    role: "Junior Technician",
                    period: "Μαι 2019 - Ιουλ 2019",
                    description: [
                        "Απόκτηση γνώσεων στη συντήρηση συστημάτων Server.",
                        "Χρήση λογισμικού CMS (Wordpress, Opencart) για τη δημιουργία ιστοσελίδων και ηλεκτρονικών καταστημάτων.",
                    ],
                },
            ],
        },
        education: {
            title: "Εκπαίδευση",
            items: [
                {
                    institution: "Ελληνικό Ανοικτό Πανεπιστήμιο",
                    degree: "M.Sc. στη Μηχανική Μάθηση και Επιστήμη Δεδομένων",
                    period: "Τρέχον",
                },
                {
                    institution: "Πανεπιστήμιο Πελοποννήσου",
                    degree: "Πτυχίο Πληροφορικής και Τηλεπικοινωνιών",
                    period: "Απόφοιτος",
                    details: "Πτυχιακή εργασία με εξειδίκευση σε εφαρμογές Deep Learning για Τηλεπικοινωνίες.",
                },
            ],
        },
        skills: {
            title: "Τεχνικές Δεξιότητες",
            list: [
                "Python", "JavaScript", "TypeScript", "Node.js", "React.js", "Redux", "Next.js",
                "MySQL","PostgresSQL", "MongoDB", "Redis", "RabbitMQ",
                "Docker", "Tensorflow", "Pandas", "ExpressJS",
                "HTML5", "CSS3", "ChatGPT API"
            ],
        },
        languages: {
            title: "Γλώσσες",
            items: ["Αγγλικά (ECCE Degree - University of Michigan)"],
        },
        interests: {
            title: "Ενδιαφέροντα",
            items: ["Φωτογραφία", "Δημιουργική Γραφή", "Ταξίδια"],
        },
    },
};

export const getDictionary = (lang: Locale) => {
    return data[lang] ?? data.en;
};

export type ResumeData = typeof data.en;