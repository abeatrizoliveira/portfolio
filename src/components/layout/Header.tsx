import React from 'react'
import Translator from '../i18n/Translator'
import logo from '../../assets/react.svg'
import I18n from '../i18n/I18n'
import ToggleTheme from '../ui/ToggleTheme'

export default function Header() {
  return (
    <header className="bg-bg dark:bg-bg-dark after:bg-bg-dark dark:after:bg-bg fixed top-0 left-0 z-50 grid h-16 w-full grid-cols-[1fr_auto_1fr] items-center px-[30px] duration-500 after:absolute after:bottom-0 after:left-[50%] after:flex after:h-[2px] after:w-[10%] after:transform-[translateX(-50%)] after:justify-center after:transition-[width] after:content-[''] hover:after:w-full">
      {/* Lado esquerdo */}
      <div className="flex items-center gap-5">
        <img src={logo} alt="Logo" />
        <I18n />
        <ToggleTheme />
      </div>

      {/* Centro */}
      <nav className="flex items-center gap-[30px]">
        <a href="#about" className="nav-link">
          <Translator path="header.link1" />
        </a>

        <a href="#projects" className="nav-link">
          <Translator path="header.link2" />
        </a>

        <a href="#contact" className="nav-link">
          <Translator path="header.link3" />
        </a>
      </nav>

      {/* Lado direito */}
      <div className="flex justify-end">
        <button>
          <Translator path="header.cta" />
        </button>
      </div>
    </header>
  )
}
