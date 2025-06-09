import { createContext, useContext, useState, useEffect } from "react";

// Create context
const ThemeContext = createContext();

// Provide context to the app
export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  // Update localStorage & apply theme changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for using theme context
export function useTheme() {
  return useContext(ThemeContext);
}
