/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"
import Switch from "./switch";
import { Moon,Sun } from "lucide-react";

export default function  ThemeSwitch(){
    const { theme, toggleTheme} = useTheme();
    return (
        <div className=" fixed bottom-5 right-5">
            <Switch/>
            activeButton={theme === "light" } ? <Sun/>:<Moon/>
        </div>
    )
}
