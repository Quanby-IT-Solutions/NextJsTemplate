"use client";

import { HomeHeader } from "@/src/components/home/HomeHeader";
import { Footer } from "@/src/components/footer/Footer";
import { ReactNode } from "react";
import HomeTransition from "./HomeTransition";
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
            { label: "Web Development", href: "/services/web-development", enabled: true },
            { label: "SEO Optimization", href: "/services/seo", enabled: true },
            { label: "Digital Marketing", href: "/services/digital-marketing", enabled: true }
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
                    <div className="pt-16 lg:pt-20">
                        {children}
                    </div>
                </div>
            </HomeTransition>

            {/* Footer Section */}
            <Footer companyName="Mar Template" links={footerLinks} socialLinks={socialLinks} />
        </>
    );
};
