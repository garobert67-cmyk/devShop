import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface ThemeContextData {
    theme: "dark" | "light";
    toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<"dark" | "light">(() => {
        const saved = localStorage.getItem("bench-theme");
        return (saved === "light" ? "light" : "dark") as "dark" | "light";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("bench-theme", theme);
    }, [theme]);

    function toggleTheme() {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
