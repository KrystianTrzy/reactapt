import { createContext } from "react";

export const themecontext = createContext(); 

export function ThemeProvider() {
    const [theme, settheme] = useState("light");

    const tootgletheme = () => {
        settheme(theme === "light" ? "dark" : "light");
    };

}