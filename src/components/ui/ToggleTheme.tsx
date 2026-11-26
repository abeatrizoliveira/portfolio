import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  const saved = localStorage.getItem('theme')

  if (saved === 'light' || saved === 'dark') return saved

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export default function ToggleTheme() {
  const [mode, setMode] = useState<Theme>(getInitialTheme)
  const { t } = useTranslation()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark')
    localStorage.setItem('theme', mode)
  }, [mode])

  const toggle = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <button
      onClick={toggle}
      aria-label={t('ariaLabel.toggleTheme')}
      title={`${mode === 'light' ? t('titles.themeDark') : t('titles.themeLight')}`}
      className="group flex h-8 w-8 cursor-pointer items-center justify-center border-none bg-transparent transition-transform hover:transform-[translateY(-0.25rem)]"
    >
      <div
        className={`bg-txt-transparent dark:bg-txt-transparent-dark group-hover:bg-bg-dark dark:group-hover:bg-bg relative h-4 w-4 origin-center rounded-full transition-all ${mode === 'dark' ? 'scale-[0.6]' : 'scale-100'} `}
      >
        {/* Recorte da lua */}
        <div
          className={`bg-bg dark:bg-bg-dark absolute bottom-1 left-[7px] h-3 w-3 rounded-full transition-all ${
            mode === 'dark'
              ? 'bottom-2 left-[15px] scale-0'
              : 'bottom-1 left-[7px] scale-100'
          } `}
        />

        {/* Raios do sol */}
        {Array.from({ length: 8 }, (_, index) => {
          const angle = (index + 1) * 45

          return (
            <span
              key={index}
              className="bg-txt-transparent dark:bg-txt-transparent-dark group-hover:bg-bg-dark dark:group-hover:bg-bg absolute top-[5.5px] left-[4.5px] h-[5px] w-[7px] origin-center rounded-full transition-all"
              style={{
                transform: `
              rotate(${angle}deg)
              translateX(${mode === 'dark' ? -16 : 0}px)
            `,
                opacity: mode === 'dark' ? 1 : 0,
              }}
            />
          )
        })}
      </div>
    </button>
  )
}
