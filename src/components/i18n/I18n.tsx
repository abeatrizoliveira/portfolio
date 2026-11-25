import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function I18n(){
  const { i18n } = useTranslation();

  const selectedLanguage = i18n.language;

  const toggleLang = () => {
    const newLanguage = selectedLanguage === "pt-BR" ? "en-US" : "pt-BR";

    i18n.changeLanguage(newLanguage);
  };

  return (
    <button
      id="language-switcher"
      className="btn-lang-switch"
      onClick={toggleLang}
    >
      <div className="switch-thumb"></div>
      <span id="lang-pt" className="spn-lang active">
        PT
      </span>
      <span id="lang-en" className="spn-lang">
        EN
      </span>
      <span>{selectedLanguage}</span>
    </button>
  );
};
