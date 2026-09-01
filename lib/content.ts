export type Language = "en" | "es";

type Translation = {
  nav: {
    services: string;
    expertise: string;
    softSkills: string;
    about: string;
    recommendations: string;
    contact: string;
  };
  availability: string;
  roleConnector: string;
  intro: string;
  location: string;
  contact: string;
  services: string;
  servicesLead: string;
  skills: string;
  skillsLead: string;
  softSkills: string;
  softSkillsLead: string;
  about: string;
  aboutCopy: string;
  recommendations: string;
  recommendationsLead: string;
  previousRecommendation: string;
  nextRecommendation: string;
  certifications: string;
  certificationsLead: string;
  allCertifications: string;
  lessCertifications: string;
  footer: string;
  rights: string;
  menu: string;
  closeMenu: string;
  switchToLightMode: string;
  switchToDarkMode: string;
};

export const profile = {
  name: "Federico Cuelho Lariau",
  email: "fcl41@me.com",
  github: "https://github.com/freddie41",
  linkedin: "https://linkedin.com/in/fedecl41",
};

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      services: "Services",
      expertise: "Expertise",
      softSkills: "Soft skills",
      about: "About",
      recommendations: "Recommendations",
      contact: "Contact",
    },
    availability: "Punta del Este, Uruguay · GMT-3",
    roleConnector: "and",
    intro:
      "I bring engineering rigor, QA thinking, and clear client communication to software that needs to work in the real world.",
    location:
      "Based in Punta del Este, Uruguay.\nWorking fluently across English and Spanish.",
    contact: "Start a conversation",
    services: "How I contribute",
    servicesLead:
      "Technical work that connects implementation, quality, and the people who use the result.",
    skills: "Technical foundation",
    skillsLead:
      "A practical, full-stack toolkit informed by quality engineering and delivery experience.",
    softSkills: "How I work",
    softSkillsLead:
      "The habits and qualities I bring to complex work, collaboration, and delivery.",
    about: "A careful builder",
    aboutCopy:
      "With more than ten years in information technology, I combine end-to-end solution implementation, quality assurance, test automation, and software development. For the past five years, I have managed technology implementations against project requirements and quality standards while strengthening my development practice. I am motivated by practical solutions that create human value and by thoughtful collaboration across disciplines.",
    recommendations: "Trusted by teammates",
    recommendationsLead:
      "A few words from people who have seen my approach in the work itself.",
    previousRecommendation: "Previous recommendation",
    nextRecommendation: "Next recommendation",
    certifications: "Continuous learning",
    certificationsLead:
      "Recent credentials supporting practical engineering, automation, and communication.",
    allCertifications: "View all certifications",
    lessCertifications: "Show fewer certifications",
    footer: "Let’s build something dependable.",
    rights: "All rights reserved.",
    menu: "Open menu",
    closeMenu: "Close menu",
    switchToLightMode: "Switch to light mode",
    switchToDarkMode: "Switch to dark mode",
  },
  es: {
    nav: {
      services: "Servicios",
      expertise: "Experiencia",
      softSkills: "Habilidades personales",
      about: "Sobre mí",
      recommendations: "Recomendaciones",
      contact: "Contacto",
    },
    availability: "Punta del Este, Uruguay · GMT-3",
    roleConnector: "y",
    intro:
      "Aporto rigor de ingeniería, mentalidad de QA y comunicación clara con clientes al software que debe funcionar de manera práctica en el mundo real.",
    location:
      "Desde Punta del Este, Uruguay.\nTrabajo con fluidez en inglés y español.",
    contact: "Iniciar una conversación",
    services: "Cómo contribuyo",
    servicesLead:
      "Trabajo técnico que conecta implementación, calidad y a las personas que usan el resultado.",
    skills: "Base técnica",
    skillsLead:
      "Un conjunto de herramientas full-stack práctico, formado por la ingeniería de calidad y la experiencia de entrega.",
    softSkills: "Cómo trabajo",
    softSkillsLead:
      "Los hábitos y cualidades que aporto al trabajo complejo, la colaboración y la entrega.",
    about: "Un desarrollador meticuloso",
    aboutCopy:
      "Con más de diez años en tecnologías de la información, combino implementación integral de soluciones, aseguramiento de la calidad, automatización de pruebas y desarrollo de software. Durante los últimos cinco años, he gestionado implementaciones tecnológicas cumpliendo requerimientos y estándares de calidad, mientras fortalecía mi práctica como desarrollador. Me motivan las soluciones prácticas que generan valor humano y la colaboración reflexiva entre disciplinas.",
    recommendations: "La confianza del equipo",
    recommendationsLead:
      "Algunas palabras de personas que han visto mi forma de trabajar de cerca.",
    previousRecommendation: "Recomendación anterior",
    nextRecommendation: "Siguiente recomendación",
    certifications: "Aprendizaje continuo",
    certificationsLead:
      "Credenciales recientes que respaldan la ingeniería práctica, la automatización y la comunicación.",
    allCertifications: "Ver todas las certificaciones",
    lessCertifications: "Ver menos certificaciones",
    footer: "Construyamos algo confiable;",
    rights: "Todos los derechos reservados.",
    menu: "Abrir menú",
    closeMenu: "Cerrar menú",
    switchToLightMode: "Cambiar al modo claro",
    switchToDarkMode: "Cambiar al modo oscuro",
  },
};

export const roles: Record<
  Language,
  { engineering: string; quality: string; client: string }
> = {
  en: {
    engineering: "Software Engineering",
    quality: "Quality Automation",
    client: "Client-Facing Solutions & Technical Demos",
  },
  es: {
    engineering: "Ingeniería de software",
    quality: "Automatización de QA",
    client: "Soluciones orientadas al cliente y demos técnicas",
  },
};

export const services: Record<
  Language,
  { title: string; copy: string; number: string }[]
> = {
  en: [
    {
      number: "01",
      title: "Software engineering",
      copy: "JavaScript, Node.js, Express.js, Java, and front-end development for practical, maintainable applications.",
    },
    {
      number: "02",
      title: "QA automation",
      copy: "Quality-focused development and automation testing that help teams build confidence before production.",
    },
    {
      number: "03",
      title: "Client-facing implementation",
      copy: "End-to-end technical implementations, technical demos, and clear communication across clients and stakeholders.",
    },
  ],
  es: [
    {
      number: "01",
      title: "Ingeniería de software",
      copy: "JavaScript, Node.js, Express.js, Java y desarrollo front-end para aplicaciones prácticas y mantenibles.",
    },
    {
      number: "02",
      title: "Automatización de QA",
      copy: "Desarrollo orientado a la calidad y automatización con Cypress que ayuda a los equipos a generar confianza antes de producción.",
    },
    {
      number: "03",
      title: "Implementación orientada al cliente",
      copy: "Implementaciones técnicas de principio a fin, demos técnicas y comunicación clara entre los distintos participantes.",
    },
  ],
};

export const skillGroups = [
  {
    label: "Build",
    skills: ["JavaScript | TypeScript", "Node.js", "Express.js", "Git"],
  },
  {
    label: "Interface",
    skills: ["React", "Next.js", "HTML 5 | CSS 3", "Bootstrap 5"],
  },
  {
    label: "Quality & Automation",
    skills: ["Cypress.io", "Katalon Studio", "Azure DevOps", "GitHub Actions"],
  },
  {
    label: "Data & Delivery",
    skills: [
      "Microsoft SQL Server",
      "Oracle SQL Developer",
      "DevExpress",
      "Technical demos",
    ],
  },
];

type SoftSkill = { title: string; detail: string; primary?: boolean };

export const softSkills: Record<Language, SoftSkill[]> = {
  en: [
    {
      title: "High attention to detail",
      detail: "Recognized in previous roles as a defining strength.",
      primary: true,
    },
    {
      title: "Analytical thinking and problem-solving",
      detail: "Breaks complex problems into evidence-based, practical steps.",
    },
    {
      title: "Results-oriented",
      detail: "Works well under pressure while keeping outcomes in focus.",
    },
    {
      title: "Teamwork and empathy",
      detail:
        "Collaborates thoughtfully and supports people across disciplines.",
    },
    {
      title: "Organization and methodology",
      detail: "Brings structure, consistency, and technical rigor to delivery.",
    },
    {
      title: "Autonomy and proactivity",
      detail: "Takes initiative, learns independently, and moves work forward.",
    },
    {
      title: "Commitment and accountability",
      detail: "Takes ownership of responsibilities and follows through.",
    },
  ],
  es: [
    {
      title: "Alta atención al detalle",
      detail: "Reconocida en trabajos anteriores como una fortaleza principal.",
      primary: true,
    },
    {
      title: "Pensamiento analítico y resolución de problemas",
      detail:
        "Divide los problemas complejos en pasos prácticos basados en evidencia.",
    },
    {
      title: "Orientación a resultados",
      detail: "Trabaja bien bajo presión sin perder de vista los objetivos.",
    },
    {
      title: "Trabajo en equipo y empatía",
      detail:
        "Colabora con atención y apoya a personas de distintas disciplinas.",
    },
    {
      title: "Organización y metodología",
      detail: "Aporta estructura, consistencia y rigor técnico a la entrega.",
    },
    {
      title: "Autonomía y proactividad",
      detail:
        "Toma la iniciativa, aprende de forma autónoma y hace avanzar el trabajo.",
    },
    {
      title: "Compromiso y responsabilidad",
      detail: "Asume sus responsabilidades y cumple con lo acordado.",
    },
  ],
};

type Recommendation = {
  name: string;
  role: string;
  date: string;
  relationship: string;
  quote: string;
};

export const recommendations: Record<Language, Recommendation[]> = {
  en: [
    {
      name: "Sebastián Rolando",
      role: "Tech Implementation Analyst at Onetree",
      date: "August 14, 2026",
      relationship: "Supervised Federico directly",
      quote:
        "Federico is a very detail-oriented and responsible person in his work. He is one of those people who are truly committed to what they do and strive to deliver quality results. In addition, I especially highlight his analytical mindset. He knows how to identify potential issues requiring further analysis and discuss them with the team in time to solve them.",
    },
    {
      name: "Steven Buchanan",
      role: "IT Quality Engineering | Building High-Performing Teams and Reliable Systems",
      date: "August 11, 2026",
      relationship: "Worked with Federico at different companies",
      quote:
        "It was a pleasure to have Freddie on our project team. His exceptional work ethic, commitment to excellence, and strategic problem-solving helped the team navigate challenging situations effectively.",
    },
    {
      name: "Luis Fernando Chamorro Rodríguez",
      role: "Full-Stack Developer | Technical Implementation Analyst | Configuration Developer",
      date: "August 10, 2026",
      relationship: "Worked on the same team",
      quote:
        "Freddie is highly analytical, meticulous, and thorough. He not only answers questions, but adds practical details that make work easier. He consistently offers valuable second opinions and helps others see problems from new angles.",
    },
    {
      name: "Mauro Rapuano",
      role: "Software Developer · JavaScript & Node.js",
      date: "August 10, 2026",
      relationship: "Worked on the same team",
      quote:
        "I was fortunate to be Federico's teammate on the Implementation team, and he was an exceptional asset. Always attentive to detail, always ready to help, and always willing to explain things with a great attitude.",
    },
    {
      name: "Julia Breitung",
      role: "Quality Assurance Tester ISTQB® CTFL | SQL | Postman | Playwright | JMeter",
      date: "August 10, 2026",
      relationship: "Worked on different teams",
      quote:
        "I noticed not only his problem-solving skills but also his strong ownership of the product. In just a few months, he mastered a complex system, promoted best practices, and helped ensure complete and high-quality solutions.",
    },
    {
      name: "Zharich Barona Muñoz",
      role: "Node.js Developer at OneTree",
      date: "August 9, 2026",
      relationship: "Worked on the same team",
      quote:
        "I had the pleasure of working alongside Federico, and he is one of the most analytical and technically sound professionals I've collaborated with. He bridges complex technical solutions with clear communication in both English and Spanish.",
    },
    {
      name: "María Agustina Mannise Nerón",
      role: "System Engineering | Technical Lead | Node.js & JavaScript | Agile & Team Leadership",
      date: "August 7, 2026",
      relationship: "Supervised Federico directly",
      quote:
        "Federico always took time to fully understand requirements and technical solutions before implementation. His depth of analysis and commitment to quality made him a valuable contributor across multiple projects.",
    },
    {
      name: "Emanuel Jofré",
      role: "Senior Manager of Solutions Architecture | Passionate About AI & Ethical Tech",
      date: "August 6, 2026",
      relationship: "Supervised Federico directly",
      quote:
        "He is one of the rare professionals who reads all documentation deeply before writing code. He detects inconsistencies early, works with exceptional rigor, and shows an absolute commitment to quality.",
    },
    {
      name: "Jessie Belford",
      role: "Business Analyst | Requirements Analysis | UAT | Jira/Xray | Certified ScrumMaster",
      date: "August 5, 2026",
      relationship: "Worked on different teams",
      quote:
        "Federico combines technical curiosity, careful analysis, and strong ownership. He asks thoughtful questions, tests assumptions, documents findings, and persists until there is a practical path forward.",
    },
    {
      name: "Jason Hatch",
      role: "Product Owner, Solution Architect, Business Process Consulting, Project Management",
      date: "August 1, 2026",
      relationship: "Senior to Federico",
      quote:
        "Freddie learned quickly and delivered value fast. His strength is the combination of detail orientation and tenacity in finding and solving problems, along with strong reliability and follow-through.",
    },
    {
      name: "Agustin Huelmo Romero",
      role: "Founder | Smart Building | Automation | Residential Security",
      date: "February 20, 2023",
      relationship: "Studied with Federico",
      quote:
        "Excellent person and professional, with front-end and back-end experience. He supported complex situations and solved problems successfully and creatively.",
    },
    {
      name: "Mauricio Rodriguez",
      role: "",
      date: "February 5, 2021",
      relationship: "Supervised Federico directly",
      quote:
        "Federico's attention to detail makes him ideal for teams working with production auditing. He combines deep product perspective with empathy, making him both a strong professional and a dependable coworker.",
    },
    {
      name: "Pablo Puentes Avila",
      role: "Pursuit Lead Manager for Microsoft at TCS",
      date: "October 6, 2020",
      relationship: "Supervised Federico directly",
      quote:
        "He has a great ability to solve problems and remove obstacles while supporting customers. He is highly responsible, self-taught, and consistently strives for excellence with or without close supervision.",
    },
    {
      name: "Ícaro F. Gomes e Cunha",
      role: "Bilingual Customer Support | Administrative Assistant",
      date: "July 2, 2019",
      relationship: "Senior to Ícaro",
      quote:
        "Federico is a highly competent, results-driven professional. He stood out early, thought ahead, and combined process knowledge with technical depth to keep growing and earning promotions.",
    },
    {
      name: "Paula Munist Harcevnicow",
      role: "Marketing & Branding Specialist",
      date: "May 23, 2019",
      relationship: "Supervised Paula",
      quote:
        "Working with Federico was a pleasure because of his dedication, respect, and effort. He is the kind of colleague who works well under pressure and contributes strongly in team settings.",
    },
    {
      name: "Pablo Puentes Avila",
      role: "Pursuit Lead Manager for Microsoft at TCS",
      date: "May 7, 2019",
      relationship: "Supervised Federico directly",
      quote:
        "Federico is extremely reliable, detail-oriented, and committed to high-quality outcomes. He has the skills to contribute to a team or lead assignments, and people often sought him out to learn from his expertise.",
    },
    {
      name: "Alejandro Nahum",
      role: "Operations and Strategy Manager",
      date: "May 6, 2019",
      relationship: "Supervised Federico directly",
      quote:
        "Federico is proactive and highly analytical, with strong business process management capabilities. He demonstrated solid research and technical writing skills while supporting content and quality initiatives.",
    },
    {
      name: "Fernando Pazos",
      role: "Sr Manager Customer Experience Operations in Alorica",
      date: "January 30, 2019",
      relationship: "Worked on the same team",
      quote:
        "I saw Federico perform across customer support, content development, and quality assurance roles, consistently standing out for analytical capacity, attention to detail, and professionalism.",
    },
    {
      name: "Rosana Presa Cuadro",
      role: "Support Manager",
      date: "January 30, 2019",
      relationship: "Mentored Federico",
      quote:
        "Federico is hardworking, capable, and eager across all tasks. He applies his knowledge effectively, works very well independently, and collaborates smoothly as part of a team.",
    },
    {
      name: "Camilo Ivan Ferreira Fosalba",
      role: "QA Engineer | Content Creator | Testing & Data",
      date: "January 30, 2019",
      relationship: "Worked on the same team",
      quote:
        "Federico demonstrates strong commitment to the team through constant follow-up and support. He continuously seeks improvement strategies through innovation and proactive thinking.",
    },
  ],
  es: [
    {
      name: "Sebastián Rolando",
      role: "Tech Implementation Analyst at Onetree",
      date: "14 de agosto de 2026",
      relationship: "Supervisaba directamente a Federico",
      quote:
        "Federico es una persona muy detallista y responsable con su trabajo. Se compromete de verdad con lo que hace, busca resultados de calidad y detecta a tiempo temas que requieren más análisis para resolverlos con el equipo.",
    },
    {
      name: "Steven Buchanan",
      role: "IT Quality Engineering | Building High-Performing Teams and Reliable Systems",
      date: "11 de agosto de 2026",
      relationship: "Trabajó con Federico en distintas empresas",
      quote:
        "Fue un placer tener a Freddie en nuestro equipo. Su ética de trabajo, compromiso con la excelencia y capacidad para pensar estratégicamente ayudaron a navegar situaciones desafiantes.",
    },
    {
      name: "Luis Fernando Chamorro Rodríguez",
      role: "Full-Stack Developer | Technical Implementation Analyst | Configuration Developer",
      date: "10 de agosto de 2026",
      relationship: "Trabajó en el mismo equipo",
      quote:
        "Freddie es altamente analítico, meticuloso y detallista. Siempre aporta contexto útil, da segundas opiniones valiosas y ayuda a ver los problemas desde ángulos que otros no habían considerado.",
    },
    {
      name: "Mauro Rapuano",
      role: "Software Developer · JavaScript & Node.js",
      date: "10 de agosto de 2026",
      relationship: "Trabajó en el mismo equipo",
      quote:
        "Tuve la suerte de ser compañero de Federico y fue un aporte excepcional: atento al detalle, enfocado en obtener los mejores resultados y siempre dispuesto a ayudar con la mejor predisposición.",
    },
    {
      name: "Julia Breitung",
      role: "Quality Assurance Tester ISTQB® CTFL | SQL | Postman | Playwright | JMeter",
      date: "10 de agosto de 2026",
      relationship: "Trabajó en equipos distintos",
      quote:
        "Además de su capacidad para resolver problemas, Federico demuestra una fuerte apropiación del producto. Aprendió rápidamente un sistema complejo y promovió buenas prácticas para lograr soluciones completas y de alta calidad.",
    },
    {
      name: "Zharich Barona Muñoz",
      role: "Node.js Developer en OneTree",
      date: "9 de agosto de 2026",
      relationship: "Trabajó en el mismo equipo",
      quote:
        "Es uno de los profesionales más analíticos y sólidos técnicamente con los que he colaborado. Conecta soluciones técnicas complejas con una comunicación clara en inglés y español.",
    },
    {
      name: "María Agustina Mannise Nerón",
      role: "System Engineering | Technical Lead | Node.js & JavaScript | Agile & Team Leadership",
      date: "7 de agosto de 2026",
      relationship: "Supervisaba directamente a Federico",
      quote:
        "Federico siempre se toma el tiempo para comprender a fondo los requerimientos y la solución técnica antes de implementar. Su análisis profundo y su compromiso con la calidad lo convirtieron en un colaborador muy valioso.",
    },
    {
      name: "Emanuel Jofré",
      role: "Senior Manager of Solutions Architecture | Passionate About AI & Ethical Tech",
      date: "6 de agosto de 2026",
      relationship: "Supervisaba directamente a Federico",
      quote:
        "Es uno de los profesionales más rigurosos con los que trabajé. Lee la documentación en profundidad, detecta inconsistencias antes de producción y mantiene un compromiso absoluto con la calidad.",
    },
    {
      name: "Jessie Belford",
      role: "Business Analyst · Requirements Analysis · UAT",
      date: "5 de agosto de 2026",
      relationship: "Trabajó en equipos distintos",
      quote:
        "Federico combina curiosidad técnica, análisis cuidadoso y fuerte sentido de pertenencia. Hace preguntas clave, valida hipótesis y persevera hasta encontrar un camino práctico para resolver problemas complejos.",
    },
    {
      name: "Jason Hatch",
      role: "Product Owner, Solution Architect, Business Process Consulting, Project Management",
      date: "1 de agosto de 2026",
      relationship: "Cargo superior al de Federico",
      quote:
        "Freddie aprendió rápido y aportó valor muy pronto. Su fortaleza es la combinación de orientación al detalle y tenacidad para encontrar y resolver problemas, junto con una gran confiabilidad.",
    },
    {
      name: "Agustin Huelmo Romero",
      role: "Founder | Smart Building | Automation | Residential Security",
      date: "20 de febrero de 2023",
      relationship: "Estudió con Federico",
      quote:
        "Excelente persona y profesional, con experiencia en front y back end. Acompañó situaciones complejas y resolvió problemas de manera exitosa y creativa.",
    },
    {
      name: "Mauricio Rodriguez",
      role: "",
      date: "5 de febrero de 2021",
      relationship: "Supervisaba directamente a Federico",
      quote:
        "Federico se caracteriza por una atención al detalle clave para equipos que trabajan con auditoría en producción. Aporta visión integral del producto y una gran empatía como compañero.",
    },
    {
      name: "Pablo Puentes Avila",
      role: "Pursuit Lead Manager for Microsoft at TCS",
      date: "6 de octubre de 2020",
      relationship: "Supervisaba directamente a Federico",
      quote:
        "Tiene una gran capacidad para resolver problemas y remover obstáculos. Es responsable, autodidacta y siempre busca la excelencia, con mucha o poca supervisión.",
    },
    {
      name: "Ícaro F. Gomes e Cunha",
      role: "Bilingual Customer Support | Administrative Assistant",
      date: "2 de julio de 2019",
      relationship: "Cargo superior al de Ícaro",
      quote:
        "Federico es un profesional altamente competente y enfocado en resultados. Se destacó desde temprano por su visión, su conocimiento técnico y su capacidad de crecimiento.",
    },
    {
      name: "Paula Munist Harcevnicow",
      role: "Marketing & Branding Specialist",
      date: "23 de mayo de 2019",
      relationship: "Supervisaba a Paula",
      quote:
        "Trabajar con Federico fue un placer por su dedicación, respeto y esfuerzo. Es un compañero que sabe manejar la presión y trabajar en equipo.",
    },
    {
      name: "Pablo Puentes Avila",
      role: "Pursuit Lead Manager for Microsoft at TCS",
      date: "7 de mayo de 2019",
      relationship: "Supervisaba directamente a Federico",
      quote:
        "Federico es extremadamente confiable, organizado y respetuoso. Su trabajo es muy orientado al detalle y siempre apunta al mejor resultado posible en cada tarea.",
    },
    {
      name: "Alejandro Nahum",
      role: "Operations and Strategy Manager",
      date: "6 de mayo de 2019",
      relationship: "Supervisaba directamente a Federico",
      quote:
        "Federico es proactivo y con gran capacidad analítica para la gestión de procesos. Demostró competencias sólidas en investigación, redacción técnica y gestión de calidad.",
    },
    {
      name: "Fernando Pazos",
      role: "Sr Manager Customer Experience Operations in Alorica",
      date: "30 de enero de 2019",
      relationship: "Trabajó en el mismo equipo",
      quote:
        "Lo vi desempeñarse en atención al cliente, desarrollo de contenido y calidad, destacándose por su gran capacidad analítica, atención al detalle y profesionalismo.",
    },
    {
      name: "Rosana Presa Cuadro",
      role: "Support Manager",
      date: "30 de enero de 2019",
      relationship: "Asesoró a Federico",
      quote:
        "Federico es muy trabajador, con aptitud y predisposición en todas las tareas. Aplica su conocimiento de manera efectiva y trabaja muy bien tanto en forma autónoma como en equipo.",
    },
    {
      name: "Camilo Ivan Ferreira Fosalba",
      role: "QA Engineer | Content Creator | Testing & Data",
      date: "30 de enero de 2019",
      relationship: "Trabajó en el mismo equipo",
      quote:
        "Federico demuestra gran compromiso con el grupo de trabajo, brindando seguimiento constante y buscando estrategias de mejora continua mediante innovación y proactividad.",
    },
  ],
};

type Certification = { name: string; issuer: string; date: string };

export const certifications: Record<Language, Certification[]> = {
  en: [
    { name: "Claude Code in Action", issuer: "Anthropic", date: "August 2026" },
    {
      name: "Debugging JavaScript / Node.js",
      issuer: "Udemy",
      date: "December 2025",
    },
    {
      name: "Azure: Create a REST API Using Node.js Serverless Functions",
      issuer: "Coursera",
      date: "November 2022",
    },
    {
      name: "Corporate Communication: Tips and Best Practices",
      issuer: "LinkedIn",
      date: "August 2026",
    },
    {
      name: "Introduction to Bash Shell Scripting",
      issuer: "Coursera",
      date: "October 2022",
    },
    { name: "Git + GitHub From Scratch", issuer: "Udemy", date: "July 2022" },
  ],
  es: [
    { name: "Claude Code in Action", issuer: "Anthropic", date: "Agosto 2026" },
    {
      name: "Debugging JavaScript / Node.js",
      issuer: "Udemy",
      date: "Diciembre 2025",
    },
    {
      name: "Azure: create a REST API using NodeJS Serverless Functions",
      issuer: "Coursera",
      date: "Noviembre 2022",
    },
    {
      name: "Comunicación corporativa: Tips y mejores prácticas",
      issuer: "LinkedIn",
      date: "Agosto 2026",
    },
    {
      name: "Introduction to Bash Shell Scripting",
      issuer: "Coursera",
      date: "Octubre 2022",
    },
    { name: "Git + GitHub Desde Cero", issuer: "Udemy", date: "Julio 2022" },
  ],
};
