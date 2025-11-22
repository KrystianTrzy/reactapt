import { createContext, useState } from "react";

export const themecontext = createContext(); 

export function ThemeProvider({ children }) {
    const [theme, settheme] = useState("light");

    const tootgletheme = () => {
        settheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const value = { theme, tootgletheme };
    return <themecontext.Provider value={value}>{children}</themecontext.Provider>;
}