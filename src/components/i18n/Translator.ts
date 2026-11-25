import { useTranslation } from 'react-i18next'

export default function Translator({ path }:any) {
  const { t } = useTranslation() 
  return t(path)
}