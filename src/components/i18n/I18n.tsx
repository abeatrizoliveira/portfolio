import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function I18n() {
  const { i18n, t } = useTranslation()

  const selectedLanguage = i18n.language

  const toggleLang = () => {
    const newLanguage = selectedLanguage === 'pt-BR' ? 'en-US' : 'pt-BR'

    i18n.changeLanguage(newLanguage)
  }

  return (
    <button
      id="language-switcher"
      className="border-txt-transparent dark:border-txt-transparent-dark relative flex h-[2rem] w-[60px] cursor-pointer items-center justify-between overflow-hidden rounded-[20px] border p-[4px] text-center"
      aria-label={t('ariaLabel.toggleLanguage')}
      title={`${selectedLanguage === 'pt-BR' ? t('titles.langUs') : t('titles.langPt')}`}
      onClick={toggleLang}
    >
      <div
        className={`bg-sage-green dark:bg-moss-green absolute left-[4px] h-[24px] w-[25px] rounded-[20px] transition-transform ${selectedLanguage === 'pt-BR' ? 'translate-x-0' : 'translate-x-[26px]'}`}
      ></div>
      <span
        id="lang-pt"
        className={`relative w-[50%] rounded-[12px] text-xs ${selectedLanguage === 'pt-BR' ? 'text-bg-dark dark:text-bg' : 'text-txt-transparent dark:text-txt-transparent-dark'}`}
      >
        PT
      </span>
      <span
        id="lang-en"
        className={`relative w-[50%] rounded-[12px] text-xs ${selectedLanguage === 'en-US' ? 'text-bg-dark dark:text-bg' : 'text-txt-transparent dark:text-txt-transparent-dark'}`}
      >
        EN
      </span>
    </button>
  )
}
