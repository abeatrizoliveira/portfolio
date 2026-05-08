const themeBtn = document.querySelector("[data-theme-toggle]");

// Evento que altera o tema do sistema entre claro e escuro.
themeBtn.addEventListener("click", () => {

  const html = document.querySelector("html");

  const currentTheme = html.getAttribute("data-theme");

  const btnTheme = document.querySelector(".btn-theme");

  const newTheme = currentTheme === "dark" ? "light" : "dark";

  const titleTheme = currentTheme === "dark" ? "Modo Escuro" : "Modo Claro";

  btnTheme.setAttribute("title", titleTheme);
  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

});
