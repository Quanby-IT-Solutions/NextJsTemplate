import React from "react";
import Link from "next/link";
import { ModeToggle } from "../theme-variety-switcher/ThemeChange";
import { AuthButtons } from "../auth-button/auth-button";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
    NavigationMenuContent,
} from "../ui/navigation-menu";

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
    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 bg-background/80 backdrop-blur ${className}`}
        >
            <div className="text-lg font-bold">
                {websiteName && <span>{websiteName}</span>}
            </div>

            {showLinks && (
                <NavigationMenu>
                    <NavigationMenuList>
                        {links
                            .filter((link) => link.enabled)
                            .map((link) => (
                                <NavigationMenuItem key={link.label}>
                                    {link.subLinks ? (
                                        <>
                                            <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                                    {link.subLinks
                                                        .filter((sublink) => sublink.enabled)
                                                        .map((sublink) => (
                                                            <li key={sublink.href}>
                                                                <NavigationMenuLink asChild>
                                                                    <Link
                                                                        href={sublink.href}
                                                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                                    >
                                                                        <div className="text-sm font-medium leading-none">{sublink.label}</div>
                                                                    </Link>
                                                                </NavigationMenuLink>
                                                            </li>
                                                        ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </>
                                    ) : (
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href={link.href!}
                                                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                            >
                                                {link.label}
                                            </Link>
                                        </NavigationMenuLink>
                                    )}
                                </NavigationMenuItem>
                            ))}
                    </NavigationMenuList>
                </NavigationMenu>
            )}

            <div className="flex items-center space-x-4">
                <ModeToggle />
                <AuthButtons />
            </div>
        </header>
    );
};

export default HomeHeader;