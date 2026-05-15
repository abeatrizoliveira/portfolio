const themeBtn = document.querySelector("[data-theme-toggle]");
var bannerImg = document.querySelector(".banner-img");
const html = document.querySelector("html");

/* 
-=-=-=-=-=-=-
ALTERA SPRITE
-=-=-=-=-=-=-
*/
function updateBanner(theme) {
  if (theme === "dark") {
    bannerImg.setAttribute("src",`${bannerImg.dataset.bannerDark}`);

  } else {
      bannerImg.setAttribute("src",`${bannerImg.dataset.bannerLight}`);
  }
}

/* 
-=-=-=-=-=-
DEFINE TEMA
-=-=-=-=-=-
 */

function setTheme(theme) {
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  updateBanner(theme);
}

/*
-=-=-=-=-=-=-=-=-
PEGA TEMA INICIAL
-=-=-=-=-=-=-=-=-
*/

function getInitialTheme(theme) {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    return savedTheme;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return prefersDark ? "dark" : "light";
}

/*
-=-=-=-=-=-=-
INICIA O TEMA
-=-=-=-=-=-=-
*/
const initialTheme = getInitialTheme();

setTheme(initialTheme);

themeBtn.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");

  const newTheme = currentTheme === "dark" ? "light" : "dark";

  const titleTheme = currentTheme === "dark" ? "Modo Escuro" : "Modo Claro";

  setTheme(newTheme);
});