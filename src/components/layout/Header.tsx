import React from "react"
import Translator from "../i18n/Translator";
import logo from "../../assets/react.svg";
import I18n from "../i18n/I18n";
import ToggleTheme from "../ui/ToggleTheme";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <div className="div">
        <I18n/>
        <ToggleTheme/>
      </div>
      <nav>
        <a href="">
          <Translator path="header.link1" />
        </a>
        <a href="">
          <Translator path="header.link2" />
        </a>
        <a href="">
          <Translator path="header.link3" />
        </a>
      </nav>
      <button><Translator path="header.cta" /></button>
    </header>
  );
}
