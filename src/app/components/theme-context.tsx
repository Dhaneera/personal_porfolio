"use client"
import React,{useEffect,useState,createContext,useContext} from "react";

type Theme ="light" | "dark"
type ThemeContextProvider ={
    children:React.ReactNode;
};

type ThemeContextType ={
    theme:Theme;
    toggleTheme:()=>void
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
    children,
}:ThemeContextProviderProps){

    const [theme, setTheme] = useState<Theme>("light");
    const toggleTheme = () => {
        if(theme === "light"){
            setTheme("dark");
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        }else{
            setTheme("light");
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    };

}

export function useTheme(){
    const context = useContext(ThemeContext)

    if (context === null) {
        throw new Error("useTheme must be used within a ThemeContextProvider");

    }
}
