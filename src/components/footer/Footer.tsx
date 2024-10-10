"use client";

import { cn } from "@/src/utils/cn";

export interface FooterLink {
    label: string;
    href: string;
    enabled: boolean;
}

export interface FooterProps {
    className?: string;
    companyName?: string;
    links?: FooterLink[];
    socialLinks?: FooterLink[];
}

export const Footer: React.FC<FooterProps> = ({
    className = "",
    companyName = "MyCompany",
    links = [],
    socialLinks = [],
}) => {
    return (
        <footer
            className={cn(
                "w-full py-8 px-4 md:px-8 bg-background text-muted-foreground",
                className
            )}
        >
            <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-lg font-bold">
                        <span>{companyName}</span>
                    </div>

                    <nav className="flex space-x-4 mt-4 md:mt-0">
                        {links
                            .filter((link) => link.enabled)
                            .map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    {link.label}
                                </a>
                            ))}
                    </nav>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-8">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
                    </p>

                    <div className="flex space-x-4 mt-4 md:mt-0">
                        {socialLinks
                            .filter((link) => link.enabled)
                            .map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-muted-foreground hover:text-foreground"
                                    aria-label={link.label}
                                >
                                    {link.label}
                                </a>
                            ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
