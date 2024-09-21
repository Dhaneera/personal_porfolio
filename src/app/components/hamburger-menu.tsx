/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-key */
"use client"
import React, { useState } from "react"
import { Link } from "../lib/types";
import clsx from "clsx";
import NextLink from "next/link"
import Hamburger from "hamburger-react";
import { useActiveSectionContext } from "../containers/active-section";
import { AnimatePresence, motion } from "framer-motion";
import { link } from "fs";
import { Scale } from "lucide-react";
import { tap } from "node:test/reporters";
import { start } from "repl";

type HamburgerMenuProps = { links: Link[] };
const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ links }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { setActiveSection, setIsActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    const menuTrigger ={
        visible:{ scale: 1, opacitiy: 0.7, y: 0},
        tap :{ scale: 0.85},
        hover:{ scale: 1.2},
    }

    const menuList ={
        start:{ scale: 0.6, opacitiy: 0.7, y: -20},
        visible:{ scale: 1, opacitiy: 1, y: 0},
    }


    return (
        <div className=" md:hidden top-5 right-5 fixed
        w-60 z-[999] flex flex-col items-end gap-2">
            <motion.button
                variants={menuTrigger}
                initial="visible"
                whileTap="tap"
                whileHover="hover"
                className=" bg-white w-[3rem]
            h-[3rem] drop-shadow-sm backdrop-blur-[0.5rem]
            border border-slate-400 dark:border-white border-opacity-40
             shadow-2xl rounded-full flex items-center justify-center
              dark:bg-gray-950 ">
                <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
            </motion.button>
            <AnimatePresence>
                {isOpen &&
                <motion.div
                variants={menuList}
                animate="visible"
                 className=" w-full bg-white drop-shadow border border-slate-400
                dark:border-white border-opacity-60 shadow-2xl flex flex-col
                items-center justify-center dark:bg-gray-950 p-1">
                    {links.map((link, index) => (
                        <div>
                            <NextLink
                                href={link.hash}>
                                {link.nameEng}
                            </NextLink>
                        </div>
                    ))}
                </motion.div>}
            </AnimatePresence>
        </div>
    )
}
export default HamburgerMenu;
