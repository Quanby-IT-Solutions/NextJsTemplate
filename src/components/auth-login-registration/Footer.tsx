import Link from "next/link";
import React from "react";

interface FooterProps {
  logoSrc: string;
  logoLink: string;
  copyrightText: string;
}

const Footer: React.FC<FooterProps> = ({
  logoSrc,
  logoLink,
  copyrightText,
}) => {
  return (
    <footer className="flex justify-between items-center mt-16 w-full text-xs tracking-tight leading-none text-stone-500 dark:text-stone-300 max-md:mt-10">
      <Link
        href={logoLink}
        className="flex gap-1 items-center text-blue-600 dark:text-blue-400 whitespace-nowrap"
      >
        <img
          loading="lazy"
          src={logoSrc}
          alt="Logo"
          className="object-contain w-6 aspect-square"
        />
        <span>Mar</span>
      </Link>
      <p>{copyrightText}</p>
    </footer>
  );
};

export default Footer;
