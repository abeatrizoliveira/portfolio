import { type ReactNode } from "react";

interface buttonProps {
  icon?: ReactNode;
  text: string;
}

export default function Button({ icon, text }: buttonProps) {
  return (
    <div className="bg-bg-dark dark:bg-bg p-2 w-32 h-12 rounded-2xl text-center text-bg dark:text-bg-dark cursor-pointer transition-transform hover:transform-[translateY(-0.25rem)]">
      {icon} {text}
    </div>
  );
}
