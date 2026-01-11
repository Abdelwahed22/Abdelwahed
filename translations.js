// Complete Translations for English and Arabic
const translations = {
    en: {
        // Navbar
        nav: {
            home: "Home",
            about: "About",
            education: "Education",
            experience: "Experience",
            skills: "Skills",
            projects: "Projects",
            achievements: "Achievements",
            contact: "Contact"
        },
        // Hero Section
        hero: {
            welcome: "👋 Welcome to my Portfolio",
            title: "I'm Ahmed Abdelwahed",
            subtitle: "Full Stack Developer",
            description: "Specialized in building modern web applications with C#, ASP.NET Core, Angular, and SQL Server. Passionate about creating efficient, scalable solutions and leading teams to success.",
            hireMe: "Hire Me",
            aboutMe: "About Me",
            graduate: "A+",
            graduateLabel: "Graduate",
            months: "4+",
            monthsLabel: "Months ITI",
            leader: "Leader",
            leaderLabel: "AI Project"
        },
        // About Section
        about: {
            title: "About Me",
            description: "Full Stack Developer skilled in C#, ASP.NET Core, Entity Framework, Angular, and SQL Server, with a strong computer science background. Graduate of Mansoura University and recipient of a competitive excellence scholarship. Gained valuable skills through volunteering and training, and seeking opportunities to apply and grow expertise.",
            locationLabel: "Location:",
            locationValue: "Zagazig (Ready to Relocate)",
            emailLabel: "Email:",
            phoneLabel: "Phone:",
            militaryLabel: "Military Service:",
            militaryValue: "Exempted",
            arabicLabel: "Arabic:",
            arabicValue: "Native",
            englishLabel: "English:",
            englishValue: "B1 (IELTS 5.0)"
        },
        // Education Section
        education: {
            title: "Education",
            date1: "2020 - 2024",
            degree: "B.Sc. in Software Engineering",
            university: "Mansoura University",
            faculty: "Faculty of Computer & Information Sciences",
            gpaLabel: "GPA:",
            gpaValue: "2.46",
            scholarshipLabel: "Scholarship:",
            scholarshipValue: "USAID Scholars Activity Excellence Scholarship (full funding), implemented by the American University in Cairo",
            date2: "2023 - 2024",
            projectTitle: "Graduation Project - Team Leader",
            projectGrade: "Grade: A+ (195/200)",
            projectDescription: "As team leader, I transformed our graduation project from an idea into a real-world AI application designed to help locate missing persons. The project was awarded an A+ grade, reflecting my passion for leadership and using technology for a positive impact."
        },
        // Experience Section
        experience: {
            title: "Experience",
            date1: "Jul 2025 - Nov 2025",
            itiTitle: "Full-Stack Developer Internship",
            itiCompany: "Information Technology Institute (ITI) - Mansoura, Egypt",
            itiLine1: "Full-Stack 4-month Program, Intensive Code Camp (ICC), Intensive Training Program (ITP)",
            itiLine2: "Ministry of Communication and Information Technology (MCIT)",
            itiLine3: ".NET Developer Specialization (Product-Based Program)",
            itiLine4: "Technologies: C#, OOP, SQL Server, LINQ, Entity Framework, ASP.NET MVC",
            date2: "Sep 2024 - Oct 2024",
            edenTitle: "Training - Technology Team",
            edenCompany: "Eden MEA Software Solutions - Egypt",
            edenDescription: "UI Design & E-commerce Tools"
        },
        // Skills Section
        skills: {
            title: "Technical Skills",
            backendTitle: "Backend Development",
            frontendTitle: "Frontend Development",
            databaseTitle: "Database Management",
            toolsTitle: "Tools & Platforms",
            methodologiesTitle: "Methodologies & Concepts",
            interpersonalTitle: "Interpersonal Skills",
            // Backend skills
            backend: {
                skill1: ".NET / .NET Core (C#)",
                skill2: "ASP.NET Core",
                skill3: "MVC",
                skill4: "Web API",
                skill5: "LINQ",
                skill6: "Entity Framework Core",
                skill7: "Authentication & Authorization"
            },
            // Frontend skills
            frontend: {
                skill1: "Angular",
                skill2: "TypeScript",
                skill3: "JavaScript",
                skill4: "HTML5",
                skill5: "CSS3",
                skill6: "Bootstrap",
                skill7: "Responsive Design"
            },
            // Database skills
            database: {
                skill1: "SQL Server",
                skill2: "T-SQL Queries",
                skill3: "Stored Procedures",
                skill4: "Normalization",
                skill5: "Code-First",
                skill6: "Database-First"
            },
            // Tools
            tools: {
                skill1: "Git",
                skill2: "GitHub",
                skill3: "Visual Studio",
                skill4: "VS Code",
                skill5: "Postman",
                skill6: "Adobe Illustrator",
                skill7: "Adobe Photoshop"
            },
            // Methodologies
            methodologies: {
                skill1: "OOP",
                skill2: "Design Patterns",
                skill3: "Agile",
                skill4: "Scrum",
                skill5: "Sprint Planning",
                skill6: "Team Collaboration"
            },
            // Interpersonal
            interpersonal: {
                skill1: "Clear & Concise Communication",
                skill2: "Team Building & Leadership",
                skill3: "Continuous Learning",
                skill4: "Results-Driven Approach"
            }
        },
        // Projects Section
        projects: {
            title: "My Projects",
            subtitle: "Here are some of my recent works and projects",
            filterAll: "All Projects",
            filterWeb: "Web Apps",
            filterAI: "AI/ML",
            filterFullstack: "Full Stack",
            // Project Categories/Badges
            badgeAI: "AI/ML",
            badgeFullStack: "Full Stack",
            badgeWebApp: "Web App",
            badgeFrontend: "Frontend",
            badgeBackend: "Backend",
            badgeInfo: "Web App",
            // Projects
            project1: {
                title: "Missing Persons Locator",
                description: "AI-powered application to help locate missing persons using machine learning algorithms. Led the team as project leader and achieved A+ grade (195/200).",
                tech1: "Python",
                tech2: "AI/ML",
                tech3: "ASP.NET",
                tech4: "Angular"
            },
            project2: {
                title: "E-Commerce Platform",
                description: "Full-featured e-commerce platform with product management, shopping cart, payment integration, and admin dashboard.",
                tech1: "ASP.NET Core",
                tech2: "Angular",
                tech3: "SQL Server",
                tech4: "Bootstrap"
            },
            project3: {
                title: "Task Management System",
                description: "Collaborative task management application with real-time updates, team collaboration features, and project tracking.",
                tech1: "ASP.NET MVC",
                tech2: "C#",
                tech3: "Entity Framework",
                tech4: "JavaScript"
            },
            project4: {
                title: "Personal Portfolio",
                description: "Modern and responsive portfolio website with dark mode, smooth animations, and contact form integration.",
                tech1: "HTML5",
                tech2: "CSS3",
                tech3: "JavaScript",
                tech4: "Bootstrap"
            },
            project5: {
                title: "Restaurant Booking System",
                description: "Online reservation system for restaurants with table management, booking calendar, and customer notifications.",
                tech1: "ASP.NET Core",
                tech2: "TypeScript",
                tech3: "SQL Server"
            },
            project6: {
                title: "RESTful API Service",
                description: "Comprehensive RESTful API with JWT authentication, CRUD operations, and comprehensive documentation using Swagger.",
                tech1: "ASP.NET Web API",
                tech2: "JWT",
                tech3: "Swagger"
            }
        },
        // Achievements Section
        achievements: {
            title: "Achievements & Activities",
            honorsTitle: "Honors & Accomplishments",
            awardTitle: "U.S.-Egypt Higher Education Initiative Recognition Award",
            awardDate: "December 2021",
            awardDescription: "Received an official letter of recognition for a key contribution in planning and hosting the \"Turning Point 3\" student-led conference at Mansoura University.",
            coursesTitle: "Courses & Certifications",
            aucTitle: "The American University in Cairo (AUC)",
            aucCourse1: "Leadership Program - Aspire Training Solutions",
            aucCourse2: "Supplemental English Program",
            aucCourse3: "Pre-Academic Program",
            donBoscoTitle: "Don Bosco Institute",
            donBoscoCourse: "Secretarial and Office Management Course",
            activitiesTitle: "Extracurricular Activities",
            hultTitle: "HULT PRIZE",
            hultRole: "Logistics Member",
            hultDate: "Mansoura University (2023)",
            ylyTitle: "YLY Sharqia Season 3",
            ylyRole: "Social Media Member",
            ylyDate: "2021-2022",
            turningTitle: "Turning Point Conference",
            turningRole: "Organizer",
            turningDate: "Mansoura University (2021)"
        },
        // Contact Section
        contact: {
            title: "Get In Touch",
            subtitle: "Have a project in mind? Let's work together to create something amazing!",
            connectTitle: "Contact Information",
            locationTitle: "Location",
            locationValue: "Zagazig, Egypt (Willing to Relocate)",
            emailTitle: "Email",
            phoneTitle: "Phone",
            availabilityTitle: "Availability",
            availabilityValue: "Open to Full-Time Opportunities",
            followTitle: "Connect with Me",
            github: "GitHub",
            linkedin: "LinkedIn",
            formTitle: "Send Me a Message",
            nameLabel: "Your Name",
            namePlaceholder: "John Doe",
            emailLabel: "Your Email",
            emailPlaceholder: "john@example.com",
            subjectLabel: "Subject",
            subjectPlaceholder: "Project Discussion",
            messageLabel: "Your Message",
            messagePlaceholder: "Tell me about your project...",
            sendButton: "Send Message",
            sending: "Sending...",
            successMessage: "Thank you for your message! I will get back to you soon.",
            errorMessage: "Oops! Something went wrong. Please try again.",
            networkError: "Error sending message. Please check your connection and try again."
        },
        // Footer
        footer: {
            description: "Full Stack Developer passionate about building modern web applications and delivering exceptional user experiences.",
            quickLinksTitle: "Quick Links",
            home: "Home",
            about: "About",
            education: "Education",
            experience: "Experience",
            skills: "Skills",
            servicesTitle: "Services",
            webDev: "Web Development",
            backend: "Backend Development",
            frontend: "Frontend Development",
            database: "Database Design",
            uiux: "UI/UX Design",
            contactTitle: "Contact Info",
            location: "Zagazig, Egypt",
            available: "Available for opportunities",
            copyright: "All Rights Reserved.",
            builtWith: "Built with",
            using: "using HTML, CSS, JavaScript & Bootstrap"
        }
    },
    ar: {
        // شريط التنقل
        nav: {
            home: "الرئيسية",
            about: "عني",
            education: "التعليم",
            experience: "الخبرة",
            skills: "المهارات",
            projects: "المشاريع",
            achievements: "الإنجازات",
            contact: "اتصل"
        },
        // قسم البطل
        hero: {
            welcome: "👋 مرحباً بك في معرض أعمالي",
            title: "أنا أحمد عبد الواحد",
            subtitle: "مطور Full Stack",
            description: "متخصص في بناء تطبيقات ويب حديثة باستخدام C# و ASP.NET Core و Angular و SQL Server. شغوف بإنشاء حلول فعالة وقابلة للتوسع وقيادة الفرق نحو النجاح.",
            hireMe: "وظفني",
            aboutMe: "عني",
            graduate: "A+",
            graduateLabel: "الدرجة",
            months: "+4",
            monthsLabel: "أشهر ITI",
            leader: "قائد",
            leaderLabel: "مشروع AI"
        },
        // قسم عني
        about: {
            title: "عني",
            description: "مطور Full Stack ماهر في C# و ASP.NET Core و Entity Framework و Angular و SQL Server، مع خلفية قوية في علوم الحاسوب. خريج جامعة المنصورة وحاصل على منحة التميز التنافسية. اكتسبت مهارات قيمة من خلال التطوع والتدريب، وأسعى للحصول على فرص لتطبيق وتنمية خبراتي.",
            locationLabel: "الموقع:",
            locationValue: "الزقازيق (مستعد للانتقال)",
            emailLabel: "البريد الإلكتروني:",
            phoneLabel: "الهاتف:",
            militaryLabel: "الخدمة العسكرية:",
            militaryValue: "معفى",
            arabicLabel: "العربية:",
            arabicValue: "اللغة الأم",
            englishLabel: "الإنجليزية:",
            englishValue: "B1 (IELTS 5.0)"
        },
        // قسم التعليم
        education: {
            title: "التعليم",
            date1: "2020 - 2024",
            degree: "بكالوريوس هندسة البرمجيات",
            university: "جامعة المنصورة",
            faculty: "كلية الحاسبات والمعلومات",
            gpaLabel: "المعدل التراكمي:",
            gpaValue: "2.46",
            scholarshipLabel: "المنحة:",
            scholarshipValue: "منحة نشاط العلماء USAID للتميز (تمويل كامل)، تنفذها الجامعة الأمريكية بالقاهرة",
            date2: "2023 - 2024",
            projectTitle: "مشروع التخرج - قائد الفريق",
            projectGrade: "الدرجة: A+ (195/200)",
            projectDescription: "كقائد للفريق، قمت بتحويل مشروع تخرجنا من فكرة إلى تطبيق ذكاء اصطناعي واقعي مصمم للمساعدة في تحديد موقع الأشخاص المفقودين. حصل المشروع على درجة A+، مما يعكس شغفي بالقيادة واستخدام التكنولوجيا لتحقيق تأثير إيجابي."
        },
        // قسم الخبرة
        experience: {
            title: "الخبرة",
            date1: "يوليو 2025 - نوفمبر 2025",
            itiTitle: "تدريب مطور Full-Stack",
            itiCompany: "معهد تكنولوجيا المعلومات (ITI) - المنصورة، مصر",
            itiLine1: "برنامج Full-Stack لمدة 4 أشهر، معسكر التدريب المكثف (ICC)، برنامج التدريب المكثف (ITP)",
            itiLine2: "وزارة الاتصالات وتكنولوجيا المعلومات (MCIT)",
            itiLine3: "تخصص مطور .NET (برنامج قائم على المنتج)",
            itiLine4: "التقنيات: C#، OOP، SQL Server، LINQ، Entity Framework، ASP.NET MVC",
            date2: "سبتمبر 2024 - أكتوبر 2024",
            edenTitle: "تدريب - فريق التكنولوجيا",
            edenCompany: "Eden MEA Software Solutions - مصر",
            edenDescription: "تصميم واجهة المستخدم وأدوات التجارة الإلكترونية"
        },
        // قسم المهارات
        skills: {
            title: "المهارات التقنية",
            backendTitle: "تطوير الخلفية",
            frontendTitle: "تطوير الواجهة الأمامية",
            databaseTitle: "إدارة قواعد البيانات",
            toolsTitle: "الأدوات والمنصات",
            methodologiesTitle: "المنهجيات والمفاهيم",
            interpersonalTitle: "المهارات الشخصية",
            // مهارات الخلفية
            backend: {
                skill1: ".NET / .NET Core (C#)",
                skill2: "ASP.NET Core",
                skill3: "MVC",
                skill4: "Web API",
                skill5: "LINQ",
                skill6: "Entity Framework Core",
                skill7: "المصادقة والتفويض"
            },
            // مهارات الواجهة الأمامية
            frontend: {
                skill1: "Angular",
                skill2: "TypeScript",
                skill3: "JavaScript",
                skill4: "HTML5",
                skill5: "CSS3",
                skill6: "Bootstrap",
                skill7: "التصميم المتجاوب"
            },
            // مهارات قاعدة البيانات
            database: {
                skill1: "SQL Server",
                skill2: "استعلامات T-SQL",
                skill3: "الإجراءات المخزنة",
                skill4: "التطبيع",
                skill5: "Code-First",
                skill6: "Database-First"
            },
            // الأدوات
            tools: {
                skill1: "Git",
                skill2: "GitHub",
                skill3: "Visual Studio",
                skill4: "VS Code",
                skill5: "Postman",
                skill6: "Adobe Illustrator",
                skill7: "Adobe Photoshop"
            },
            // المنهجيات
            methodologies: {
                skill1: "OOP",
                skill2: "أنماط التصميم",
                skill3: "Agile",
                skill4: "Scrum",
                skill5: "تخطيط السبرينت",
                skill6: "التعاون الجماعي"
            },
            // المهارات الشخصية
            interpersonal: {
                skill1: "التواصل الواضح والموجز",
                skill2: "بناء الفريق والقيادة",
                skill3: "التعلم المستمر",
                skill4: "نهج موجه نحو النتائج"
            }
        },
        // قسم المشاريع
        projects: {
            title: "مشاريعي",
            subtitle: "إليك بعض أعمالي ومشاريعي الأخيرة",
            filterAll: "جميع المشاريع",
            filterWeb: "تطبيقات الويب",
            filterAI: "الذكاء الاصطناعي",
            filterFullstack: "Full Stack",
            // شارات المشاريع
            badgeAI: "ذكاء اصطناعي",
            badgeFullStack: "Full Stack",
            badgeWebApp: "تطبيق ويب",
            badgeFrontend: "واجهة أمامية",
            badgeBackend: "خلفية",
            badgeInfo: "تطبيق ويب",
            // المشاريع
            project1: {
                title: "محدد موقع الأشخاص المفقودين",
                description: "تطبيق يعمل بالذكاء الاصطناعي للمساعدة في تحديد موقع الأشخاص المفقودين باستخدام خوارزميات التعلم الآلي. قدت الفريق كقائد للمشروع وحققت درجة A+ (195/200).",
                tech1: "Python",
                tech2: "AI/ML",
                tech3: "ASP.NET",
                tech4: "Angular"
            },
            project2: {
                title: "منصة التجارة الإلكترونية",
                description: "منصة تجارة إلكترونية كاملة المميزات مع إدارة المنتجات وعربة التسوق ودمج الدفع ولوحة تحكم الإدارة.",
                tech1: "ASP.NET Core",
                tech2: "Angular",
                tech3: "SQL Server",
                tech4: "Bootstrap"
            },
            project3: {
                title: "نظام إدارة المهام",
                description: "تطبيق إدارة مهام تعاوني مع تحديثات في الوقت الفعلي وميزات التعاون الجماعي وتتبع المشاريع.",
                tech1: "ASP.NET MVC",
                tech2: "C#",
                tech3: "Entity Framework",
                tech4: "JavaScript"
            },
            project4: {
                title: "معرض الأعمال الشخصي",
                description: "موقع معرض أعمال حديث ومتجاوب مع الوضع الداكن والرسوم المتحركة السلسة ودمج نموذج الاتصال.",
                tech1: "HTML5",
                tech2: "CSS3",
                tech3: "JavaScript",
                tech4: "Bootstrap"
            },
            project5: {
                title: "نظام حجز المطاعم",
                description: "نظام حجز عبر الإنترنت للمطاعم مع إدارة الطاولات وتقويم الحجز وإشعارات العملاء.",
                tech1: "ASP.NET Core",
                tech2: "TypeScript",
                tech3: "SQL Server"
            },
            project6: {
                title: "خدمة RESTful API",
                description: "واجهة برمجة تطبيقات RESTful شاملة مع مصادقة JWT وعمليات CRUD وتوثيق شامل باستخدام Swagger.",
                tech1: "ASP.NET Web API",
                tech2: "JWT",
                tech3: "Swagger"
            }
        },
        // قسم الإنجازات
        achievements: {
            title: "الإنجازات والأنشطة",
            honorsTitle: "التكريمات والإنجازات",
            awardTitle: "جائزة الاعتراف بمبادرة التعليم العالي الأمريكية المصرية",
            awardDate: "ديسمبر 2021",
            awardDescription: 'حصلت على خطاب اعتراف رسمي لمساهمة رئيسية في تخطيط واستضافة مؤتمر "Turning Point 3" الذي يقوده الطلاب في جامعة المنصورة.',
            coursesTitle: "الدورات والشهادات",
            aucTitle: "الجامعة الأمريكية بالقاهرة (AUC)",
            aucCourse1: "برنامج القيادة - Aspire Training Solutions",
            aucCourse2: "برنامج اللغة الإنجليزية التكميلي",
            aucCourse3: "البرنامج التحضيري الأكاديمي",
            donBoscoTitle: "معهد دون بوسكو",
            donBoscoCourse: "دورة السكرتارية وإدارة المكاتب",
            activitiesTitle: "الأنشطة اللامنهجية",
            hultTitle: "HULT PRIZE",
            hultRole: "عضو اللوجستيات",
            hultDate: "جامعة المنصورة (2023)",
            ylyTitle: "YLY الشرقية الموسم 3",
            ylyRole: "عضو وسائل التواصل الاجتماعي",
            ylyDate: "2021-2022",
            turningTitle: "مؤتمر Turning Point",
            turningRole: "منظم",
            turningDate: "جامعة المنصورة (2021)"
        },
        // قسم الاتصال
        contact: {
            title: "تواصل معنا",
            subtitle: "لديك مشروع؟ دعنا نتعاون لإنشاء شيء مميز!",
            connectTitle: "معلومات التواصل",
            locationTitle: "الموقع",
            locationValue: "الزقازيق، مصر (قابل للانتقال)",
            emailTitle: "البريد الإلكتروني",
            phoneTitle: "رقم الهاتف",
            availabilityTitle: "التوفر",
            availabilityValue: "متاح للعمل بدوام كامل",
            followTitle: "تواصل معي",
            github: "جيت هب",
            linkedin: "لينكد إن",
            formTitle: "أرسل رسالة",
            nameLabel: "الاسم",
            namePlaceholder: "أحمد محمد",
            emailLabel: "البريد الإلكتروني",
            emailPlaceholder: "ahmed@example.com",
            subjectLabel: "الموضوع",
            subjectPlaceholder: "مناقشة مشروع",
            messageLabel: "الرسالة",
            messagePlaceholder: "أخبرنا عن مشروعك...",
            sendButton: "إرسال",
            sending: "جاري الإرسال...",
            successMessage: "شكراً لتواصلك! سنرد عليك في أقرب وقت.",
            errorMessage: "عذراً! حدث خطأ. يرجى المحاولة مرة أخرى.",
            networkError: "خطأ في الإرسال. يرجى التحقق من الاتصال والمحاولة مرة أخرى."
        },
        // التذييل
        footer: {
            description: "مطور Full Stack شغوف ببناء تطبيقات ويب حديثة وتقديم تجارب مستخدم استثنائية.",
            quickLinksTitle: "روابط سريعة",
            home: "الرئيسية",
            about: "عني",
            education: "التعليم",
            experience: "الخبرة",
            skills: "المهارات",
            servicesTitle: "الخدمات",
            webDev: "تطوير الويب",
            backend: "تطوير الخلفية",
            frontend: "تطوير الواجهة الأمامية",
            database: "تصميم قواعد البيانات",
            uiux: "تصميم UI/UX",
            contactTitle: "معلومات الاتصال",
            location: "الزقازيق، مصر",
            available: "متاح للفرص",
            copyright: "جميع الحقوق محفوظة.",
            builtWith: "بني بـ",
            using: "باستخدام HTML و CSS و JavaScript و Bootstrap"
        }
    }
};
