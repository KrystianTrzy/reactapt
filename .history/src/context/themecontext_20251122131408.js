import { createContext } from "react";

export const themecontext = createContext(); 

export function ThemeProvider() {
    const [theme, settheme] = useState("light");

    const tootgletheme = () => {
        settheme((prev) => (prev === "light" ? "dark" : "light"));
    };


    
}