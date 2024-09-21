/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React from "react"
import NextLink from "next/link"
import clsx from "clsx"
import { Link } from "../lib/types"
import { useActiveSectionContext } from "../containers/active-section";

type HeaderProps = { links: Link[] };
export default function Header({ links }: HeaderProps) {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    return (
        <header className=" hidden md:flex items-center
        justify-center fixed z-[999] w-full mt-4">
            <div className=" flex p-1 rounded-none border border-white
            border-opacity-40 bg-white bg-opacity-80 shadow-lg
            shadow-black/[0.03] backdrop-blur-[0.5rem]
             sm:rounded-full dark:bg-gray-950  dark:border-black/40
             dark:bg-opacity-75">
                <ul className=" flex flex-wrap items-center
                justify-center gap-y-1 text-[0.9rem] font-medium
                text-gray-950 gap-10 p-3">
                    {links.map((link) => (
                        <li>
                            <NextLink
                                href={link.hash}
                            >
                                {link.nameEng}
                            </NextLink>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}
