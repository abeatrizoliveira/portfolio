import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  // 1. Se o usuário já escolheu antes, usa a escolha salva
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;

  // 2. Senão, usa a preferência do sistema operacional
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function ToggleTheme() {
  // Função passada ao useState: roda só na primeira renderização
  const [mode, setMode] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggle = () => setMode(mode === "light" ? "dark" : "light");

  return <button onClick={toggle}>{mode}</button>;
}