import { createContext, useState, type ReactNode } from "react";

import Card from "./Card";

type Theme = "light" | "dark";

interface ThemeContextInterface {
    theme: Theme,
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextInterface | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const Theme = () => {
    return (
        <ThemeProvider>
            <Card />
        </ThemeProvider>
    );
};

export default Theme;