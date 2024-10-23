// Fade-in sections on scroll
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Initial fade-in for header
window.addEventListener("load", function () {
  const header = document.querySelector("header");
  header.style.opacity = 1;
});
