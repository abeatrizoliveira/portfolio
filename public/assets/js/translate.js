async function changeLanguage(lang) {
  const response = await fetch(`/assets/locales/${lang}.json`);

  const translations = await response.json();

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-lang]").forEach((el) => {
    const key = el.dataset.lang;

    el.innerHTML = getTranslation(translations, key);
  });
}

function getTranslation(obj, path) {
  return path.split(".").reduce((acc, part) => acc?.[part], obj);
}

document.getElementById("language-switcher").addEventListener("click", () => {
 
const thumb = document.querySelector(".switch-thumb");
const pt = document.getElementById("lang-pt");
const en = document.getElementById("lang-en");

  const currentLang = document.documentElement.lang;

  const newLang = currentLang === "pt" ? "en" : "pt";
  
 if(newLang === "en"){
        thumb.style.transform = "translateX(26px)";
        en.classList.add("active");
        pt.classList.remove("active");
    }else{
        thumb.style.transform = "translateX(0px)";
        pt.classList.add("active");
        en.classList.remove("active");

    }

  changeLanguage(newLang);
});
