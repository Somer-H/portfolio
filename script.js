// Scroll-reveal for sections
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    },
    { threshold: 0.1 }
);
document.querySelectorAll("section").forEach((section) => revealObserver.observe(section));

// Staggered reveal for cards within a grid/list
const STAGGER_STEP_MS = 90;
const STAGGER_MAX_STEPS = 6;
document.querySelectorAll(".reveal-item").forEach((el) => {
    const siblings = Array.from(el.parentElement.children).filter((c) => c.classList.contains("reveal-item"));
    const index = siblings.indexOf(el);
    el.style.transitionDelay = `${Math.min(index, STAGGER_MAX_STEPS) * STAGGER_STEP_MS}ms`;
});
const itemRevealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                itemRevealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);
document.querySelectorAll(".reveal-item").forEach((el) => itemRevealObserver.observe(el));

// Subtle 3D tilt on project cards
document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotateY = ((x - cx) / cx) * 5;
        const rotateX = -((y - cy) / cy) * 5;
        card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });
});

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        navToggle.classList.toggle("active");
    });
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            navToggle.classList.remove("active");
        });
    });
}

// Sticky nav shadow on scroll
const siteNav = document.getElementById("siteNav");

// Scroll progress bar
const scrollProgress = document.getElementById("scrollProgress");
function updateScrollProgress() {
    const h = document.documentElement;
    const scrollable = h.scrollHeight - h.clientHeight;
    const pct = scrollable > 0 ? (h.scrollTop / scrollable) * 100 : 0;
    if (scrollProgress) scrollProgress.style.width = pct + "%";
}

// Back-to-top visibility
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (siteNav) siteNav.classList.toggle("scrolled", window.scrollY > 20);
    updateScrollProgress();
    if (backToTop) backToTop.classList.toggle("visible", window.scrollY > 500);
});

// Active section highlighting + sliding nav indicator
const navAnchors = document.querySelectorAll(".nav-links a[href^='#']");
const navIndicator = document.getElementById("navIndicator");
const sectionsWithIds = Array.from(navAnchors)
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

function moveIndicator(link) {
    if (!navIndicator || !link || window.innerWidth <= 1100) return;
    const linkRect = link.getBoundingClientRect();
    const parentRect = link.closest(".nav-links").getBoundingClientRect();
    navIndicator.style.left = linkRect.left - parentRect.left + "px";
    navIndicator.style.width = linkRect.width + "px";
    navIndicator.style.opacity = "1";
}

window.updateNavIndicator = function () {
    const current = document.querySelector(".nav-links a.active-link");
    moveIndicator(current);
};

navAnchors.forEach((a) => {
    a.addEventListener("mouseenter", () => moveIndicator(a));
    a.addEventListener("mouseleave", () => {
        const current = document.querySelector(".nav-links a.active-link");
        moveIndicator(current);
    });
});

window.addEventListener("resize", () => window.updateNavIndicator());

const activeObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const id = entry.target.getAttribute("id");
            const link = document.querySelector(`.nav-links a[href="#${id}"]`);
            if (!link) return;
            if (entry.isIntersecting) {
                navAnchors.forEach((a) => a.classList.remove("active-link"));
                link.classList.add("active-link");
                moveIndicator(link);
            }
        });
    },
    { rootMargin: "-40% 0px -50% 0px" }
);
sectionsWithIds.forEach((section) => activeObserver.observe(section));

const firstNavLink = document.querySelector(".nav-links a[href='#top']");
if (firstNavLink) {
    firstNavLink.classList.add("active-link");
    window.requestAnimationFrame(() => moveIndicator(firstNavLink));
}

// Project detail modal
const PROJECT_MODAL_DATA = {
    sigean: {
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 2 8l10 5 10-5-10-5Z"/><path d="M6 10.5V16c0 1.5 2.5 3 6 3s6-1.5 6-3v-5.5"/><path d="M22 8v6"/></svg>',
        title: "SIGEAN",
        subKey: "proj.sigean.sub",
        dateKey: "proj.sigean.date",
        moreKey: "proj.sigean.more",
        tags: ["Java", "Spring Boot", "JPA", "Flyway", "Swagger"],
        link: null
    },
    lambi: {
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 8H6"/><circle cx="9" cy="20" r="1.3" fill="currentColor" stroke="none"/><circle cx="18" cy="20" r="1.3" fill="currentColor" stroke="none"/></svg>',
        title: "LAMBI",
        subKey: "proj.lambi.sub",
        dateKey: "proj.lambi.date",
        moreKey: "proj.lambi.more",
        tags: ["Python", "FastAPI", "SQLAlchemy", "JWT"],
        link: { href: "https://github.com/Somer-H/API_LAMBI", labelKey: "proj.link.repo" }
    },
    aprendia: {
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
        title: "AprendIA",
        subKey: "proj.aprendia.sub",
        dateKey: "proj.aprendia.date",
        moreKey: "proj.aprendia.more",
        tags: ["Java", "Spring Boot", "Docker", "PostgreSQL", "pgvector"],
        link: { href: "https://github.com/ICHEJA-PROJECT", labelKey: "proj.link.org" }
    },
    agrowatch: {
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21c0-7 4-13 14-16 0 10-4 16-14 16Z"/><path d="M5 21c2-4 5-7 9-9"/></svg>',
        title: "Agrowatch",
        subKey: "proj.agrowatch.sub",
        dateKey: "proj.agrowatch.date",
        moreKey: "proj.agrowatch.more",
        tags: ["Go", "C++", "ESP32", "IoT"],
        link: { href: "https://github.com/Somer-H/cilantros_users", labelKey: "proj.link.repo" }
    },
    secretevent: {
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/><path d="M9.5 12.5 11 14l3.5-3.5"/></svg>',
        title: "Secret Event",
        subKey: "proj.secretevent.sub",
        dateKey: "proj.secretevent.date",
        moreKey: "proj.secretevent.more",
        tags: ["Rust", "Vara Network", "Web3"],
        link: null
    },
    carnitas: {
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h12v20l-3-2-3 2-3-2-3 2Z"/><path d="M9 7h6"/><path d="M9 11h6"/></svg>',
        title: "Carnitas Noyola",
        subKey: "proj.carnitas.sub",
        dateKey: "proj.carnitas.date",
        moreKey: "proj.carnitas.more",
        tags: ["TypeScript", "Express", "MySQL", "Node.js"],
        link: null
    }
};

const projectModal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");

function t(key) {
    const lang = window.currentLang || "es";
    const entry = typeof translations !== "undefined" ? translations[key] : null;
    return entry ? entry[lang] : "";
}

function openProjectModal(id) {
    const data = PROJECT_MODAL_DATA[id];
    if (!data || !projectModal) return;
    document.getElementById("modalIcon").innerHTML = data.icon;
    document.getElementById("modalTitle").textContent = data.title;
    document.getElementById("modalSub").textContent = t(data.subKey);
    document.getElementById("modalDate").textContent = t(data.dateKey);
    document.getElementById("modalBody").textContent = t(data.moreKey);
    const tagsEl = document.getElementById("modalTags");
    tagsEl.innerHTML = "";
    data.tags.forEach((tag) => {
        const span = document.createElement("span");
        span.className = "project-tag";
        span.textContent = tag;
        tagsEl.appendChild(span);
    });
    const linkEl = document.getElementById("modalLink");
    if (data.link) {
        linkEl.href = data.link.href;
        linkEl.innerHTML = `<span>${t(data.link.labelKey)}</span> →`;
        linkEl.style.display = "inline-block";
    } else {
        linkEl.style.display = "none";
    }
    projectModal.classList.add("open");
    projectModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove("open");
    projectModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

document.querySelectorAll(".project-expand").forEach((btn) => {
    btn.addEventListener("click", () => openProjectModal(btn.getAttribute("data-project")));
});
if (modalClose) modalClose.addEventListener("click", closeProjectModal);
if (projectModal) {
    projectModal.addEventListener("click", (e) => {
        if (e.target === projectModal) closeProjectModal();
    });
}
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && projectModal && projectModal.classList.contains("open")) closeProjectModal();
});
