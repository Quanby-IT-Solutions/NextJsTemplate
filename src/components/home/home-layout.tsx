"use client";

import { HomeHeader } from "@/src/components/home/home-header";
import { Footer } from "@/src/components/footer/footer";
import { ReactNode } from "react";
import HomeTransition from "./home-transition";
import { Facebook, Twitter, Instagram } from "lucide-react";

interface LayoutProps {
    children: ReactNode;
}

const headerLinks = [
    { label: "Home", href: "/", enabled: true },
    { label: "About ↗", href: "/about", enabled: true },
    { label: "FAQs", href: "/faqs", enabled: true },
    {
        label: "Services", enabled: true, subLinks: [
            { label: "Web Development", href: "/#", enabled: true },
            { label: "SEO Optimization", href: "/#", enabled: true },
            { label: "Digital Marketing", href: "/#", enabled: true }
        ]
    }
];

const footerLinks = [
    { label: "About Us", href: "/about", enabled: true },
    { label: "Contact", href: "/contact", enabled: true },
    { label: "Privacy Policy", href: "/privacy", enabled: true },
];

const socialLinks = [
    {
        label: "Facebook",
        href: "https://facebook.com",
        enabled: true,
        icon: <Facebook />,
        displayIcon: true,
        displayText: true,
    },
    {
        label: "Twitter",
        href: "https://twitter.com",
        enabled: true,
        icon: <Twitter />,
        displayIcon: true,
        displayText: true,
    },
    {
        label: "Instagram",
        href: "https://instagram.com",
        enabled: true,
        icon: <Instagram />,
        displayIcon: true,
        displayText: true,
    },
];

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            {/* Header Section */}
            <HomeHeader websiteName={"Mar Template"} links={headerLinks} />

            <HomeTransition>
                <div className="w-full">
                    {children}
                </div>
            </HomeTransition>

            {/* Footer Section */}
            <Footer companyName="Mar Template" links={footerLinks} socialLinks={socialLinks} />
        </>
    );
};
