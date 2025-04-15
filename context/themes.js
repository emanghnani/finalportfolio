import { createContext, useContext, useState } from "react";

export const Context = createContext([[],() => {}])

export default function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(!darkMode);
    return (
      <Context.Provider value={[theme, setTheme]}>{children}</Context.Provider>
    );
  }

export function useThemeContext() {
  return useContext(Context);
}