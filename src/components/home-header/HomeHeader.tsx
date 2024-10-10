"use client";

import { cn } from "@/src/utils/cn";
import { ThemeSwitcher } from "../theme-switcher/ThemeSwitcher";
import { AuthButtons } from "../auth-button/AuthButton";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export interface HomeHeaderSubLink {
    label: string;
    href: string;
    enabled: boolean;
}

export interface HomeHeaderLink {
    label: string;
    href?: string;
    enabled: boolean;
    subLinks?: HomeHeaderSubLink[];
}

export interface HomeHeaderProps {
    className?: string;
    websiteName?: string;
    links?: HomeHeaderLink[];
    showLinks?: boolean;
}

export const HomeHeader: React.FC<HomeHeaderProps> = ({
    className = "",
    websiteName = "",
    links = [],
    showLinks = true,
}) => {
    const [openLink, setOpenLink] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const handleLinkClick = (linkLabel: string) => {
        if (openLink === linkLabel) {
            setOpenLink(null); // Close if already open
        } else {
            setOpenLink(linkLabel); // Open clicked dropdown
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        if ((event.target as HTMLElement).closest(".dropdown")) return;
        setOpenLink(null); // Close dropdown if clicked outside
    };

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("click", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 transition-all duration-200",
                className,
                isScrolled
                    ? "bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90 shadow-md"
                    : "bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80",
                "dark:text-white"
            )}
        >
            <div className="text-lg font-bold">
                {websiteName && <span>{websiteName}</span>}
            </div>
            {showLinks && (
                <nav className="hidden md:flex space-x-4">
                    {links
                        .filter((link) => link.enabled)
                        .map((link) => (
                            <div key={link.label} className="relative dropdown">
                                {link.subLinks ? (
                                    <button
                                        onClick={() => handleLinkClick(link.label)}
                                        className="text-muted-foreground dark:text-gray-400 hover:text-foreground dark:hover:text-white cursor-pointer"
                                    >
                                        {link.label}
                                    </button>
                                ) : (
                                    <Link href={link.href!} className="text-muted-foreground dark:text-gray-400 hover:text-foreground dark:hover:text-white">
                                        {link.label}
                                    </Link>
                                )}

                                {link.subLinks && openLink === link.label && (
                                    <motion.div
                                        className="absolute left-0 top-full mt-2 bg-background dark:bg-gray-800 border border-border dark:border-gray-700 rounded shadow-lg overflow-hidden"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {link.subLinks
                                            .filter((sublink) => sublink.enabled)
                                            .map((sublink) => (
                                                <Link key={sublink.href} href={sublink.href} className="block px-4 py-2 text-sm text-muted-foreground dark:text-gray-400 hover:text-foreground dark:hover:text-white hover:bg-accent dark:hover:bg-gray-700">
                                                    {sublink.label}
                                                </Link>
                                            ))}
                                    </motion.div>
                                )}
                            </div>
                        ))}
                </nav>
            )}
            <div className="flex items-center space-x-4">
                <ThemeSwitcher />
                <AuthButtons />
            </div>
        </header>
    );
};
