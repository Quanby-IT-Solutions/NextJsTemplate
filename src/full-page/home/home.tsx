import { Footer } from "@/src/components/footer/Footer";
import Hero from "@/src/components/hero/Hero";
import { HomeHeader } from "@/src/components/home-header/HomeHeader";

export const Home: React.FC = () => {
    const headerLinks = [
        {
            label: "Home",
            href: "/",
            enabled: true,
        },
        {
            label: "About",
            href: "/about",
            enabled: true,
        },
        {
            label: "FAQs",
            href: "/faqs",
            enabled: true,
        },
        {
            label: "Link2",
            enabled: true,
            subLinks: [
                {
                    label: "Link2-sub",
                    href: "/Link2-sub",
                    enabled: true,
                },
                {
                    label: "Link3-sub",
                    href: "/Link3-sub",
                    enabled: true,
                },
            ],
        },
    ];

    const footerLinks = [
        { label: "About Us", href: "/about", enabled: true },
        { label: "Contact", href: "/contact", enabled: true },
        { label: "Privacy Policy", href: "/privacy", enabled: true },
    ];

    const socialLinks = [
        { label: "Twitter", href: "https://twitter.com", enabled: true },
        { label: "Facebook", href: "https://facebook.com", enabled: true },
        { label: "LinkedIn", href: "https://linkedin.com", enabled: true },
    ];

    return (
        <>
            <HomeHeader websiteName={"Mar Template"} links={headerLinks} />
            <Hero />
            <Footer companyName="Mar Template" links={footerLinks} socialLinks={socialLinks} />
        </>
    );
};
