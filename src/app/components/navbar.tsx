import React from "react"
import {links} from "../lib/data"
import Header from "./header"
import HamburgerMenu from "./hamburger-menu"
export default function Navbar() {
    return(
        <nav>
            <HamburgerMenu/>
            <Header/>
        </nav>
    )
}
