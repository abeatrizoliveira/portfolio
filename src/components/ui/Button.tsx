import { type ReactNode } from 'react'

interface buttonProps {
  icon?: ReactNode
  text: string
}

export default function Button({ icon, text }: buttonProps) {
  return (
    <div className="bg-bg-dark dark:bg-bg text-bg dark:text-bg-dark h-12 w-32 cursor-pointer rounded-2xl p-2 text-center transition-transform hover:transform-[translateY(-0.25rem)]">
      {icon} {text}
    </div>
  )
}
