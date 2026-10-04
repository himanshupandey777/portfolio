import { Sun, Moon } from "lucide-react";
import useTheme from "../../hooks/useTheme";

export default function ThemeToggle() {
  const [theme, toggle] = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 hover:border-sky-700 dark:border-slate-700 dark:hover:border-sky-400"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}