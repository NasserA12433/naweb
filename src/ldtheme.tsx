import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  isLightMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isLightMode, setIsLightMode] = useState(
    localStorage.getItem("theme") === "light"
  );

  useEffect(() => {
    document.body.classList.toggle("light-theme", isLightMode);
    localStorage.setItem("theme", isLightMode ? "light" : "dark");
  }, [isLightMode]);

  const toggleTheme = () => setIsLightMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
