"use client";

import { cn } from "@/src/utils/cn";
import { ReactNode } from "react";

export interface FooterLink {
    label: string;
    href: string;
    enabled: boolean;
    icon?: ReactNode;
    displayIcon?: boolean;
    displayText?: boolean;
}

export interface FooterProps {
    className?: string;
    companyName?: string;
    links?: FooterLink[];
    socialLinks?: FooterLink[];
}

export const Footer: React.FC<FooterProps> = ({
    className = "",
    companyName = "",
    links = [],
    socialLinks = [],
}) => {
    return (
        <footer
            className={cn(
                "w-full py-10 px-4 md:px-8 bg-background text-muted-foreground",
                className
            )}
        >
            <div className="max-w-screen-xl mx-auto space-y-8">
                {/* Company Name and Links Section */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                    {/* Company Name */}
                    <div className="text-lg font-bold">
                        <span>{companyName}</span>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-wrap justify-center md:justify-start space-x-6 md:space-x-8 mt-4 md:mt-0">
                        {links
                            .filter((link) => link.enabled)
                            .map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                                >
                                    {link.label}
                                </a>
                            ))}
                    </nav>
                </div>

                {/* Social Links and Copyright Section */}
                <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                    {/* Copyright */}
                    <p className="text-sm text-muted-foreground text-center md:text-left mt-4 md:mt-0">
                        &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex space-x-4">
                        {socialLinks
                            .filter((link) => link.enabled)
                            .map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center space-x-2"
                                    aria-label={`Follow us on ${link.label}`}
                                >
                                    {link.displayIcon && link.icon && (
                                        <span>{link.icon}</span>
                                    )}
                                    {link.displayText && (
                                        <span className="text-sm">{link.label}</span>
                                    )}
                                </a>
                            ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
