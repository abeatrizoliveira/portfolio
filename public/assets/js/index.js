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
  themeBtn.innerHTML =
    newTheme === "dark"
      ? `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-sun-fill"
      viewBox="0 0 16 16"
    >
      <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
    </svg> `
      : `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-moon-fill"
      viewBox="0 0 16 16"
    >
      <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
    </svg> `;
});

currentYear.innerHTML = new Date().getFullYear();
