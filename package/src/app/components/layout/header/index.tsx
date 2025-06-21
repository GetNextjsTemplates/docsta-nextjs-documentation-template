"use client";
import Image from "next/image"
import Logo from "./logo"
import Link from "next/link"
import ThemeToggler from "./ThemeToggler"
import MobileSidebar from "./MobileSidebar"
import { useState } from "react"
import { usePathname } from "next/navigation";
import SearchModal from "./SearchModal";

const Header = () => {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const isDocsPage = /^\/docs\/[^/]+$/.test(pathname);

    return (
        <header className="fixed top-0 z-50 w-full">
            <nav className="bg-white dark:bg-smokyBlack px-4 sm:px-8 py-4 sm:py-5 border-b border-smokyBlack/10 dark:border-white/10 shadow-header_shadow">
                <div className="flex items-center justify-between">
                    <Logo />

                    <div className="flex items-center gap-3.5 sm:gap-5 lg:gap-7">
                        <button className="hidden md:flex items-center gap-2.5 bg-paleSlate dark:bg-white/95 px-2 py-1.5 rounded-xl border border-smokyBlack/10 transition cursor-pointer hover:shadow-sm" onClick={() => setModalOpen(true)}>
                            <Image src={"/images/icon/search-icon.svg"} alt="search-icon" width={20} height={20} />
                            <span className="text-smokyBlack">Search</span>
                            <span className="ml-2 flex gap-1 items-center">
                                <Image src={"/images/icon/command-icon.svg"} alt="search-icon" width={26} height={26} />
                                <Image src={"/images/icon/K-key-icon.svg"} alt="search-icon" width={26} height={26} />
                            </span>
                        </button>

                        <SearchModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

                        <div className="hidden sm:flex gap-6">
                            <Link href={"/docs/intro"}>
                                <p className="hover:text-primary">
                                    Docs
                                </p>
                            </Link>
                        </div>

                        <button className="flex md:hidden bg-paleSlate dark:bg-white/95 p-1 sm:p-1.5 border border-smokyBlack/10 rounded-full cursor-pointer">
                            <Image src={"/images/icon/search-icon.svg"} alt="search-icon" width={18} height={18} />
                        </button>
                        <Link href={"/"} className="group flex items-center gap-2.5">
                            <Image src={"/images/icon/github-icon.svg"} alt="github-icon" width={24} height={24} className="dark:hidden block" />
                            <Image src={"/images/icon/github-white.svg"} alt="github-icon" width={24} height={24} className="dark:block hidden" />
                            <p className="hidden md:flex group-hover:text-primary ">4.253 stars</p>
                        </Link>
                        <ThemeToggler />

                        {isDocsPage &&
                            <button className="flex md:hidden cursor-pointer" onClick={() => setSidebarOpen(!sidebarOpen)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><rect width="18" height="1.5" x="3" y="7.001" fill="currentcolor" rx=".75" />
                                    <rect width="15" height="1.5" x="3" y="11.251" fill="currentcolor" rx=".75" />
                                    <rect width="18" height="1.5" x="3" y="15.499" fill="currentcolor" rx=".75" />
                                </svg>
                            </button>
                        }
                    </div>
                </div>
            </nav>
            <MobileSidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />
        </header>
    )
}

export default Header