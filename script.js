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
window.addEventListener("scroll", () => {
    if (siteNav) siteNav.classList.toggle("scrolled", window.scrollY > 20);
});

// Active section highlighting
const navAnchors = document.querySelectorAll(".nav-links a[href^='#']");
const sectionsWithIds = Array.from(navAnchors)
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

const activeObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const id = entry.target.getAttribute("id");
            const link = document.querySelector(`.nav-links a[href="#${id}"]`);
            if (!link) return;
            if (entry.isIntersecting) {
                navAnchors.forEach((a) => a.classList.remove("active-link"));
                link.classList.add("active-link");
            }
        });
    },
    { rootMargin: "-40% 0px -50% 0px" }
);
sectionsWithIds.forEach((section) => activeObserver.observe(section));
