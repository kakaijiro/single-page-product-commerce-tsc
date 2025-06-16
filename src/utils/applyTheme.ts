import type { Theme } from "@/features/theme/themeSlice";

export function applyTheme(theme: Theme) {
  const root = window.document.documentElement; // <html> element
  root.classList.remove("light", "dark");

  //   if system is set, use system's preference
  if (theme === "system") {
    const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches
      ? "dark"
      : "light";
    root.classList.add(systemTheme);
    return;
  }
  //   if system is not set, use a specified one
  root.classList.add(theme);
}
