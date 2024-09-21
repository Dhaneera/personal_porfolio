import React from "react"
import Header from "./header"
import HamburgerMenu from "./hamburger-menu"
import { links } from "../lib/data"
export default function Navbar() {
    return(
        <nav>
            <HamburgerMenu links={links}/>
            <Header/>
        </nav>
    )
}
