// Criação de variáveis
const menuTrigger = document.getElementById("menu-trigger");
const menu = document.getElementById("menu");
const scrollTop = document.getElementById("scroll-to-top");
const linkToTop = document.getElementById("link-1");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu-list a");
let siteTheme = document.documentElement.getAttribute("data-theme");
const imageBanner = document.querySelector(".banner-img");

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
if (scrollTop) {
  scrollTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
    });
  });
}

if (linkToTop) {
  linkToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
    });
  });
}

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
          link.classList.remove("green-text");

          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("green-text");
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
    line.setAttribute("d", "M 100 150 Q 70 20 150 50");
  }
}

// roda ao carregar
handleWidthChange(mql);

// continua ouvindo mudanças
mql.addEventListener("change", handleWidthChange);

// Swiper JS para carrossel
new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// função para o aria-label seguir o mouse
const skills = document.querySelectorAll(".skill");

skills.forEach((skill) => {
  skill.addEventListener("mousemove", (e) => {
    const rect = skill.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    skill.style.setProperty("--mouse-x", x + "px");
    skill.style.setProperty("--mouse-y", y + "px");
  });
});

// Função para o modal ativar e desativar
const bannerModal = document.getElementById("banner-modal");
const bannerModalTrigger = document.getElementById("banner-modal-trigger");
const closeModalBtn = document.getElementById("close-modal-btn");

bannerModalTrigger.addEventListener("click", function () {
  if (!bannerModal.classList.contains("active")) {
    bannerModal.classList.add("active");
  }
});

closeModalBtn.addEventListener("click", function () {
  bannerModal.classList.remove("active");
});

// Função para animação
let animationInterval;

const darkFrames = [
  "../assets/img/frame1-d.png",
  "../assets/img/frame2-d.png",
  "../assets/img/frame3-d.png",
];

const lightFrames = [
  "../assets/img/frame1-l.png",
  "../assets/img/frame2-l.png",
  "../assets/img/frame3-l.png",
];

imageBanner.addEventListener("mouseenter", (event) => {
  if (siteTheme === "dark") {
    const frames = siteTheme === "dark" ? darkFrames : lightFrames;

    let currentFrame = 0;

    clearInterval(animationInterval);

    animationInterval = setInterval(() => {
      imageBanner.src = frames[currentFrame];

      currentFrame++;

      if (currentFrame >= frames.length) {
        currentFrame = 0;
      }
    }, 150);
  } else {
    imageBanner.setAttribute();
  }
});

imageBanner.addEventListener("mouseleave", () => {

  clearInterval(animationInterval);
  const siteTheme =
    document.documentElement.getAttribute("data-theme");
  imageBanner.src =
    siteTheme === "dark"
      ? darkFrames[1]
      : lightFrames[1];
});