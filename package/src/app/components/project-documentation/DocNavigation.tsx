"use client"
import Link from "next/link"
import { useState } from "react"

export const DocNavigation = () => {

    const [navItem, setNavItem] = useState("version");

    function getNavItem(item:string){
        setNavItem(item)
    }

    const DocsNav = [
        {
            id:1,
            navItem:"Package Versions",
            hash:"version"
        },
        {
            id:2,
            navItem:"Package Structure",
            hash:"structure"
        },
        {
            id:3,
            navItem:"Sanity Configuration",
            hash:"sanity-configuration"
        },
        {
            id:4,
            navItem:"Quick Start",
            hash:"start"
        },
        {
            id:5,
            navItem:"Project Configuration",
            hash:"configuration"
        },
        
    ]

    return (
        <div className="flex flex-col gap-0.5 items-start fixed pe-4" >
          {
            DocsNav.map((item) => {
                return (
                    <Link key={item.id} href={`#${item.hash}`} onClick={() => getNavItem(item.hash)} className={`py-2.5 hover:bg-primary/20 dark:hover:text-primary xl:min-w-60 lg:min-w-52 min-w-full px-4 rounded-md text-base font-medium  ${item.hash === navItem ? "bg-primary hover:bg-primary! text-white dark:text-white dark:hover:text-secondary" : " dark:text-opacity-60"}`}>{item.navItem}</Link>
                )
            })
          }
        </div>
    )
}