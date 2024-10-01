"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../button/Button";
import { ThemeSwitcher } from "../theme-switcher/ThemeSwitcher";

interface HeaderProps {
  logoSrc: string;
  onSignIn: () => void;
  onSignUp: () => void;
}

const Header: React.FC<HeaderProps> = ({ logoSrc, onSignIn, onSignUp }) => {
  return (
    <header className="flex justify-between items-center w-full text-xs font-medium tracking-wide leading-loose">
      <Link href={"/"}>
        <img
          loading="lazy"
          src={logoSrc}
          alt="Company logo"
          className="object-contain shrink-0 w-[149px] aspect-[3.11]"
        />
      </Link>
      <nav className="flex items-center p-0.5 rounded-lg border-solid border-2 border-stone-300 dark:bg-neutral-800 dark:border-neutral-700 border-opacity-30">
        <ThemeSwitcher />
        <Button
          className="px-4 py-1 text-black bg-white rounded-md border-solid border-[0.5px] border-neutral-200 dark:bg-neutral-900 dark:text-white"
          variant="default"
          size="default"
          asChild={false}
          onClick={onSignIn}
        >
          Sign in
        </Button>
        <Button
          className="px-4 py-1 rounded text-stone-500 dark:text-stone-400"
          variant="default"
          size="default"
          asChild={false}
          onClick={onSignUp}
        >
          Sign up
        </Button>
      </nav>
    </header>
  );
};

export default Header;
