const translations = {
    "nav.home": { es: "Inicio", en: "Home" },
    "nav.experience": { es: "Experiencia", en: "Experience" },
    "nav.projects": { es: "Proyectos", en: "Projects" },
    "nav.skills": { es: "Habilidades", en: "Skills" },
    "nav.education": { es: "Educación", en: "Education" },
    "nav.contact": { es: "Contacto", en: "Contact" },
    "nav.cv": { es: "Descargar CV", en: "Download CV" },

    "hero.role": { es: "Estudiante de Ingeniería en Software · Desarrollador Backend", en: "Software Engineering Student · Backend Developer" },
    "hero.tagline": { es: "Enfocado en desarrollo backend y arquitectura de software. Apasionado por Java, Rust y la construcción de APIs escalables.", en: "Focused on backend development and software architecture. Passionate about Java, Rust, and building scalable APIs." },
    "hero.cta.experience": { es: "Ver Experiencia", en: "View Experience" },
    "hero.cta.projects": { es: "Ver Proyectos", en: "View Projects" },
    "hero.cta.cv": { es: "Descargar CV", en: "Download CV" },

    "facts.grad": { es: "9.º cuatrimestre · Graduación dic. 2026", en: "9th quarter · Graduating Dec. 2026" },
    "facts.role": { es: "Software Developer en Realhost (Remoto)", en: "Software Developer at Realhost (Remote)" },
    "facts.projects": { es: "6 proyectos reales", en: "6 real-world projects" },
    "facts.remote": { es: "Abierto a roles remotos", en: "Open to remote roles" },

    "section.experience": { es: "Experiencia Profesional", en: "Professional Experience" },
    "section.projects": { es: "Proyectos Destacados", en: "Featured Projects" },
    "section.skills": { es: "Habilidades Técnicas", en: "Technical Skills" },
    "section.education": { es: "Educación y Certificaciones", en: "Education & Certifications" },
    "section.softskills": { es: "Habilidades Interpersonales", en: "Soft Skills" },
    "section.contact": { es: "Contacto", en: "Contact" },

    "exp.realhost.role": { es: "Desarrollador de Software", en: "Software Developer" },
    "exp.realhost.meta": { es: "Monterrey, Nuevo León, MX (Remoto)", en: "Monterrey, Nuevo León, MX (Remote)" },
    "exp.realhost.date": { es: "Octubre 2025 — Actualidad", en: "October 2025 — Present" },
    "exp.realhost.b1": { es: "Diseño y mantenimiento de 20+ sistemas ERP de clientes usando PHP, garantizando estabilidad y aplicando buenas prácticas de código.", en: "Designed and maintained 20+ client ERP systems using PHP, ensuring system stability and applying clean code practices." },
    "exp.realhost.b2": { es: "Trabajo con entornos de desarrollo y pruebas en contenedores con Docker, eliminando inconsistencias de entorno y reduciendo tiempos de respuesta.", en: "Worked with containerized development and testing environments using Docker, eliminating environment inconsistencies and reducing response times." },
    "exp.realhost.b3": { es: "Implementación de procesamiento directo (STP) con Laravel, Vite y Tailwind CSS, minimizando errores de captura manual.", en: "Implemented straight-through processing (STP) using Laravel, Vite, and Tailwind CSS, minimizing manual data-entry errors." },
    "exp.realhost.b4": { es: "Desarrollo y mantenimiento de portales de autoservicio para clientes de alto impacto.", en: "Developed and maintained high-impact customer self-service portals." },
    "exp.realhost.b5": { es: "Pruebas de estrés de base de datos con Sysbench en un proyecto liderado de principio a fin.", en: "Performed database stress testing with Sysbench on a project led end-to-end." },
    "exp.realhost.b6": { es: "Construcción de servidores MCP (Model Context Protocol) en Python, conectando sistemas internos con herramientas de agentes de IA.", en: "Built custom MCP (Model Context Protocol) servers in Python, connecting internal systems to AI agent tooling." },

    "exp.lifeagent.role": { es: "Desarrollador Backend (concurrente con Realhost)", en: "Backend Developer (concurrent with Realhost)" },
    "exp.lifeagent.meta": { es: "Ciudad de México, MX (Remoto)", en: "Mexico City, MX (Remote)" },
    "exp.lifeagent.date": { es: "Octubre 2025 — Abril 2026", en: "October 2025 — April 2026" },
    "exp.lifeagent.b1": { es: "Colaboración en 3 APIs REST de alto rendimiento con Java, Spring Boot y Maven, con arquitectura por capas.", en: "Collaborated on 3 high-performance RESTful APIs using Java, Spring Boot, and Maven, implementing a layered architecture." },
    "exp.lifeagent.b2": { es: "Gestión de migraciones de esquema y control de versiones con Flyway y MySQL, sin pérdida de datos en producción.", en: "Managed database schema migrations and version control using Flyway and MySQL, ensuring zero data loss in production." },
    "exp.lifeagent.b3": { es: "Integración de Firebase para sincronización de datos en tiempo real y autenticación segura.", en: "Collaborated on integrating Firebase for real-time data sync and secure authentication." },
    "exp.lifeagent.b4": { es: "Uso de Google Cloud Storage para almacenamiento seguro y automatizado de archivos.", en: "Used Google Cloud Storage to build secure, automated cloud file storage." },
    "exp.lifeagent.b5": { es: "Pruebas automatizadas por API con JUnit 5, Mockito, MockMvc y AssertJ.", en: "Wrote automated tests for each API using JUnit 5, Mockito, MockMvc, and AssertJ." },

    "proj.sigean.sub": { es: "Plataforma de gestión educativa inclusiva · Proyecto actual de estadía", en: "Inclusive education management platform · Current internship project" },
    "proj.sigean.date": { es: "Oct. 2026 — Actualidad", en: "Oct. 2026 — Present" },
    "proj.sigean.desc": { es: "API REST con Spring Boot 4.1 y Java 21 para una plataforma de seguimiento de estudiantes con necesidades especiales en educación secundaria, con arquitectura hexagonal por feature.", en: "REST API built with Spring Boot 4.1 and Java 21 for a platform that tracks students with special needs in secondary education, structured with hexagonal architecture per feature." },
    "proj.sigean.b1": { es: "Autenticación JWT con control de acceso por rol para 4 tipos de usuario (docentes, prefectos, servicios académicos y psicología).", en: "JWT authentication with role-based access control for 4 user roles (teachers, prefects, academic services, and psychologists)." },
    "proj.sigean.b2": { es: "Modelado de un esquema relacional de 16+ tablas con migraciones gestionadas por Flyway.", en: "Modeled a relational schema of 16+ tables with Flyway-managed migrations." },
    "proj.sigean.b3": { es: "Documentación de la API con Swagger/OpenAPI y mapeo DTO-entidad con MapStruct.", en: "Documented the API with Swagger/OpenAPI and used MapStruct for DTO-entity mapping." },

    "proj.lambi.sub": { es: "Plataforma de marketplace · Proyecto en equipo (3 personas)", en: "Marketplace platform · Team project (3 people)" },
    "proj.lambi.date": { es: "Nov. 2024 — en reconstrucción", en: "Nov. 2024 — currently being rebuilt" },
    "proj.lambi.desc": { es: "Marketplace multi-vendedor construido con FastAPI y SQLAlchemy. Lideré al equipo como project manager y arquitecto de software.", en: "Multi-vendor marketplace built with FastAPI and SQLAlchemy. Led the team as project manager and software architect." },
    "proj.lambi.b1": { es: "Definición de la arquitectura backend liderando un equipo de 3 personas.", en: "Defined the backend architecture while leading a 3-person student team." },
    "proj.lambi.b2": { es: "Construcción de la API REST en Python con autenticación JWT y hashing de contraseñas con bcrypt.", en: "Built the REST API in Python with JWT authentication and bcrypt password hashing." },
    "proj.lambi.b3": { es: "Diseño de routers para flujos de comprador, vendedor, producto, stand y ventas.", en: "Designed routers covering buyer, seller, product, stand, and sales flows." },

    "proj.aprendia.sub": { es: "App móvil de aprendizaje accesible · Proyecto patrocinado por la universidad (no es proyecto de cuatrimestre)", en: "Accessible learning mobile app · University-sponsored project (not coursework)" },
    "proj.aprendia.date": { es: "Jun. — Sep. 2026", en: "Jun. — Sep. 2026" },
    "proj.aprendia.desc": { es: "App móvil para que personas sordomudas aprendan a escribir. Equipo multidisciplinario de 7 personas (2 backend, 3 frontend, 2 asesores).", en: "Mobile app that helps deaf and mute people learn to write. Multidisciplinary team of 7 (2 backend, 3 frontend, 2 faculty advisors)." },
    "proj.aprendia.b1": { es: "Backend de microservicios (API, servicio core y gateway) en Spring Boot/Java 21.", en: "Built a microservices backend (API, core service, and gateway) in Spring Boot/Java 21." },
    "proj.aprendia.b2": { es: "Endpoints CRUD para catálogos y gestión de roles.", en: "Implemented CRUD endpoints for catalogs and role management." },
    "proj.aprendia.b3": { es: "Refactorización de entidades/DTOs: migración de @Data a @Getter/@Setter y conversión de todos los DTOs a Java records.", en: "Refactored the entity/DTO layer: migrated from Lombok @Data to @Getter/@Setter and converted all DTOs to Java records." },
    "proj.aprendia.b4": { es: "Contenerización con Docker y Docker Compose (multi-stage), usando PostgreSQL con la extensión pgvector.", en: "Containerized the system with Docker and Docker Compose (multi-stage builds), using PostgreSQL with the pgvector extension." },
    "proj.aprendia.b5": { es: "Autenticación JWT, Spring Security y monitoreo de salud con Spring Actuator.", en: "Implemented JWT authentication, Spring Security, and health monitoring via Spring Actuator." },

    "proj.agrowatch.sub": { es: "Monitoreo agrícola con IoT · Proyecto en equipo (3 personas)", en: "IoT agricultural monitoring · Team project (3 people)" },
    "proj.agrowatch.date": { es: "2025", en: "2025" },
    "proj.agrowatch.desc": { es: "Plataforma de monitoreo de cultivos en tiempo real usando sensores IoT, construida como parte de un equipo de 3 personas.", en: "Real-time crop monitoring platform using IoT sensors, built as part of a 3-person team." },
    "proj.agrowatch.b1": { es: "Microservicios en Go para gestión de usuarios y comunicación con dispositivos, incluyendo registro, autenticación y acceso por rol.", en: "Built Go-based microservices for user management and device communication, including registration, authentication, and role-based access." },
    "proj.agrowatch.b2": { es: "Servicio de inicialización de dispositivos ESP32 en C++ para dar de alta sensores IoT.", en: "Developed an ESP32 device-initialization service in C++ to onboard IoT sensors." },
    "proj.agrowatch.b3": { es: "Despliegue de los servicios backend a producción.", en: "Deployed the backend services to production." },

    "proj.secretevent.sub": { es: "DApp de denuncias anónimas · 2.º lugar, Vara Side Hackathon", en: "Anonymous reporting DApp · 2nd Place, Vara Side Hackathon" },
    "proj.secretevent.date": { es: "Octubre 2024", en: "October 2024" },
    "proj.secretevent.desc": { es: "DApp Web3 para denuncias anónimas y seguras de casos sensibles, con smart contracts en Rust sobre la red Vara.", en: "Web3 DApp for secure, anonymous reporting of sensitive cases, with smart contracts in Rust on the Vara Network." },
    "proj.secretevent.b1": { es: "Programación de smart contracts en Rust sobre la blockchain de Vara Network.", en: "Programmed smart contracts in Rust on the Vara Network blockchain." },

    "proj.carnitas.sub": { es: "Sistema de ventas y pedidos", en: "Sales & order management system" },
    "proj.carnitas.date": { es: "Mayo — Julio 2024", en: "May — July 2024" },
    "proj.carnitas.desc": { es: "Sistema de gestión de ventas y pedidos. Diseñé una base de datos robusta con esquemas complejos para optimizar las consultas de pedidos.", en: "Sales and order management system. Designed a robust database with complex schemas to optimize order queries." },

    "proj.link.repo": { es: "Ver repositorio", en: "View repository" },
    "proj.link.org": { es: "Ver organización", en: "View organization" },

    "skills.languages": { es: "Lenguajes", en: "Languages" },
    "skills.frameworks": { es: "Frameworks", en: "Frameworks" },
    "skills.databases": { es: "Bases de Datos", en: "Databases" },
    "skills.tools": { es: "Tecnologías y Herramientas", en: "Technologies & Tools" },
    "skills.spoken": { es: "Idiomas", en: "Languages Spoken" },
    "skills.spoken.value": { es: "Español (nativo) · Inglés (B1)", en: "Spanish (native) · English (B1)" },

    "edu.degree": { es: "Ingeniería en Software", en: "Bachelor's Degree in Software Engineering" },
    "edu.status": { es: "Materias concluidas — actualmente en estadía profesional obligatoria; graduación estimada: diciembre 2026.", en: "Coursework completed — currently completing mandatory professional internship (estadía); expected graduation: December 2026." },
    "edu.gpa": { es: "Promedio: 9.0/10 (≈3.7/4.0 GPA)", en: "GPA: 9.0/10 (≈3.7/4.0)" },
    "edu.certs.title": { es: "Certificaciones", en: "Certifications" },
    "edu.cert.aws.sub": { es: "Cloud Foundations · Cloud Operations · Cloud Developing · Cloud Architecting", en: "Cloud Foundations · Cloud Operations · Cloud Developing · Cloud Architecting" },
    "edu.cert.cisco": { es: "Cisco Networking & Fundamentos de SO", en: "Cisco Networking & OS Basics" },
    "edu.cert.cisco.sub": { es: "Fundamentos de Redes · Fundamentos de Sistemas Operativos", en: "Networking Basics · Operating Systems Basics" },

    "soft.leadership": { es: "Liderazgo", en: "Leadership" },
    "soft.teamwork": { es: "Trabajo en Equipo", en: "Teamwork" },
    "soft.critical": { es: "Pensamiento Crítico", en: "Critical Thinking" },
    "soft.adapt": { es: "Adaptabilidad", en: "Adaptability" },
    "soft.detail": { es: "Atención al Detalle", en: "Attention to Detail" },
    "soft.learning": { es: "Aprendizaje Continuo", en: "Continuous Learning" },

    "contact.intro": { es: "Estoy abierto a nuevas oportunidades y colaboraciones. ¡Ponte en contacto conmigo!", en: "I'm open to new opportunities and collaborations. Get in touch!" },
    "footer.rights": { es: "© 2026 Héctor Somer V.", en: "© 2026 Héctor Somer V." },

    "now.label": { es: "Ahora mismo", en: "Right now" },
    "now.text": { es: "Construyendo SIGEAN, una plataforma educativa con Spring Boot 4.1, durante mi estadía profesional.", en: "Building SIGEAN, an education platform with Spring Boot 4.1, during my professional internship." },
    "now.link": { es: "Ver proyecto", en: "View project" },

    "proj.viewmore": { es: "Ver más detalles", en: "View more details" },
    "proj.modal.close": { es: "Cerrar", en: "Close" },

    "proj.sigean.more": { es: "Como proyecto actual de mi estadía profesional, diseñé este sistema desde cero para el seguimiento de alumnos con necesidades especiales en una escuela secundaria. La arquitectura hexagonal está organizada por feature (cada una con su propio domain/application/infrastructure), con 'acronyms' como feature de referencia para el resto del equipo. El esquema cubre 16 tablas (alumnos, tutores, docentes, personal técnico, grupos, condiciones especiales, seguimiento, citas con psicología, etc.), con Flyway versionando cada migración. En desarrollo uso una base H2 en archivo y en producción PostgreSQL, controlado por perfiles de Spring. Los tokens JWT expiran en 1 hora, y el acceso a cada endpoint se decide por rol (por ejemplo, solo Servicios Académicos puede crear usuarios).", en: "As my current professional-internship project, I designed this system from scratch to track students with special needs in a secondary school. The hexagonal architecture is organized per feature (each with its own domain/application/infrastructure), with 'acronyms' serving as the reference feature for the rest of the team. The schema covers 16 tables (students, guardians, teachers, technical staff, groups, special conditions, progress tracking, psychology appointments, etc.), with Flyway versioning every migration. Development uses a file-based H2 database and production uses PostgreSQL, switched via Spring profiles. JWT tokens expire after 1 hour, and access to each endpoint is role-gated (for example, only Academic Services can create users)." },

    "proj.lambi.more": { es: "LAMBI fue de los primeros proyectos grandes que construí, durante el tercer/cuarto cuatrimestre de la carrera. Diseñé la arquitectura del backend como project manager y arquitecto de software para un equipo de 3 personas, con routers separados para compradores, vendedores, productos, puestos (stands) y ventas. Ahora mismo estamos retomando el proyecto para reconstruirlo con mejores prácticas de las que teníamos en ese entonces.", en: "LAMBI was one of the first large projects I built, during the 3rd/4th quarter of my degree. I designed the backend architecture as project manager and software architect for a 3-person team, with separate routers for buyers, sellers, products, stands, and sales. We're currently revisiting the project to rebuild it with better practices than we had back then." },

    "proj.aprendia.more": { es: "AprendIA es un proyecto patrocinado por la universidad (ICHEJA), no una tarea de cuatrimestre, con un equipo multidisciplinario de 7 personas: 2 desarrolladores backend, 3 de frontend y 2 asesores docentes. Mi trabajo incluyó los endpoints CRUD de catálogos y roles, y una refactorización del código para migrar de Lombok @Data a @Getter/@Setter explícitos y convertir todos los DTOs a Java records. También integré Cloudinary para el manejo de imágenes de la app. El backend corre en contenedores Docker multi-stage junto con PostgreSQL con la extensión pgvector.", en: "AprendIA is a university-sponsored project (ICHEJA), not coursework, with a multidisciplinary team of 7: 2 backend developers, 3 frontend developers, and 2 faculty advisors. My work included the CRUD endpoints for catalogs and roles, and a refactor migrating the codebase from Lombok's @Data to explicit @Getter/@Setter and converting all DTOs to Java records. I also integrated Cloudinary for the app's image handling. The backend runs in multi-stage Docker containers alongside PostgreSQL with the pgvector extension." },

    "proj.agrowatch.more": { es: "Agrowatch es una plataforma de monitoreo de cultivos de cilantro con sensores IoT, desarrollada con un equipo de 3 personas durante la carrera. Construí los microservicios en Go para gestión de usuarios y comunicación con dispositivos (registro, autenticación, acceso por rol), además de un servicio en C++ para inicializar los dispositivos ESP32 que envían los datos de los sensores. El sistema se comunica con los dispositivos a través de una capa de mensajería asíncrona (RabbitMQ/AMQP) construida por otro miembro del equipo. Yo también me encargué del despliegue del backend a producción.", en: "Agrowatch is a cilantro-crop monitoring platform using IoT sensors, built with a 3-person team during my degree. I built the Go microservices for user management and device communication (registration, authentication, role-based access), plus a C++ service to initialize the ESP32 devices that send sensor data. The system talks to the devices through an asynchronous messaging layer (RabbitMQ/AMQP) built by another team member. I also handled deploying the backend to production." },

    "proj.secretevent.more": { es: "Secret Event nació en el Vara Side Hackathon de Chiapas (octubre 2024), donde gané el 2.º lugar. La idea era una DApp para que cualquiera pudiera reportar casos sensibles de forma anónima y segura, sin exponer su identidad. Programé los smart contracts en Rust sobre la blockchain de Vara Network, enfocados en mantener la privacidad de quien reporta.", en: "Secret Event came out of the Vara Side Hackathon in Chiapas (October 2024), where it won 2nd place. The idea was a DApp that lets anyone report sensitive cases anonymously and safely, without exposing their identity. I programmed the smart contracts in Rust on the Vara Network blockchain, focused on protecting the reporter's privacy." },

    "proj.carnitas.more": { es: "Un sistema de gestión de ventas y pedidos para un negocio real de carnitas, entre mayo y julio de 2024. Mi enfoque principal fue el diseño de la base de datos: un esquema con relaciones más complejas de lo usual para optimizar las consultas de pedidos a medida que el negocio creciera.", en: "A sales and order management system for a real carnitas business, between May and July 2024. My main focus was the database design: a schema with more complex relationships than usual, built to keep order queries fast as the business grew." },

    "github.title": { es: "Actividad en GitHub", en: "GitHub Activity" },
    "github.sub": { es: "Una serpiente se come mis contribuciones reales de GitHub", en: "A snake eating my real GitHub contributions" },
    "github.latest.label": { es: "Último commit:", en: "Latest commit:" },
    "github.latest.on": { es: "en", en: "on" }
};

function detectInitialLang() {
    const saved = localStorage.getItem("lang");
    if (saved === "es" || saved === "en") return saved;
    return navigator.language && navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const entry = translations[key];
        if (entry && entry[lang]) {
            el.textContent = entry[lang];
        }
    });
    const toggleLabel = document.getElementById("langToggleLabel");
    if (toggleLabel) toggleLabel.textContent = lang === "es" ? "EN" : "ES";
    localStorage.setItem("lang", lang);
    window.currentLang = lang;
    if (window.updateNavIndicator) window.updateNavIndicator();
    if (window.updateGithubLatest) window.updateGithubLatest();
}

document.addEventListener("DOMContentLoaded", () => {
    const initial = detectInitialLang();
    applyLang(initial);
    const toggleBtn = document.getElementById("langToggle");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            const next = window.currentLang === "es" ? "en" : "es";
            applyLang(next);
        });
    }
});
