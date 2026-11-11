"use client";

import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";

export type Theme = "light" | "dark";

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "portfolio-theme",
}: ThemeProviderProps) {
  // The inline head script in layout.tsx has already applied the stored
  // preference to <html>, so start from that instead of the default; otherwise
  // the effect below would write the default over a saved choice.
  const [theme, setTheme] = useState<Theme>(() =>
    typeof document === "undefined"
      ? defaultTheme
      : document.documentElement.classList.contains("dark")
        ? "dark"
        : "light"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");

    const color = theme === "dark" ? "#0a0f1e" : "#ffffff";
    document
      .querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')
      .forEach((meta) => meta.setAttribute("content", color));

    try {
      localStorage.setItem(storageKey, theme);
    } catch {
      // Storage can be blocked (privacy modes, some in-app browsers); the theme still applies.
    }
  }, [theme, storageKey]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
