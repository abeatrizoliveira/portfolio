// Criação de variáveis
const menuTrigger = document.getElementById("menu-trigger");
const menu = document.getElementById("menu");
const scrollTop = document.getElementById("scroll-to-top");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu-list a");
const themeBtn = document.querySelector("[data-theme-toggle]");
let currentYear = document.getElementById("current-year");

// Evento para o botão de "ir ao topo" aparecer e o menu ficar suspenso.
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    scrollTop.classList.add("active");
    menu.classList.add("float");
  } else {
    scrollTop.classList.remove("active");
    menu.classList.remove("float");
  }
});

// Evento para ir para o topo da página
scrollTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
  });
});

// Evento do menu para telas menores aparecer
menuTrigger.addEventListener("click", function () {
  if (menuTrigger.classList.contains("clicked")) {
    menuTrigger.classList.remove("clicked");
    menu.classList.remove("active");
  } else {
    menuTrigger.classList.add("clicked");
    menu.classList.add("active");
  }
});

// Observador para seções
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.remove("active");

          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.6,
  },
);

sections.forEach((section) => {
  observer.observe(section);
});

// Evento para o botão mudar o tema
themeBtn.addEventListener("click", () => {
  const html = document.querySelector("html");
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

currentYear.innerHTML = new Date().getFullYear();

// Animação de aparecer
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".box").forEach((box) => {
  gsap.fromTo(
    box,
    { x: "100%" },
    {
      x: 0,
      scrollTrigger: {
        trigger: box,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
      },
    },
  );
});

// Função para seta diminuir
const mql = window.matchMedia("(max-width: 768px)");

function handleWidthChange(e) {
  if (e.matches) {
    const line = document.querySelector(".line");
    line.setAttribute("d", "M 120 120 Q 120 0 200 50");
  }
}

// roda ao carregar
handleWidthChange(mql);

// continua ouvindo mudanças
mql.addEventListener('change', handleWidthChange);