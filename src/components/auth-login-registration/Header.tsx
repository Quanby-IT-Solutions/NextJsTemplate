"use client";

import React from "react";
import { Button } from "../button/Button";
import { ThemeSwitcher } from "../theme-switcher/ThemeSwitcher";
import Link from "next/link";

interface HeaderProps {
  logoSrc: string;
  onSignIn?: () => void;
  onSignUp?: () => void;
  showSignIn?: boolean;
  showSignUp?: boolean;
  activeForm: "signIn" | "signUp";
}

const Header: React.FC<HeaderProps> = ({
  logoSrc,
  onSignIn,
  onSignUp,
  showSignIn = true,
  showSignUp = true,
  activeForm,
}) => {
  return (
    <header className="flex justify-between items-center w-full text-xs font-medium tracking-wide leading-loose p-4">
      <Link href="/">
        <img
          loading="lazy"
          src={logoSrc}
          alt="Company logo"
          width={50}
          height={50}
          className="object-contain shrink-0"
        />
      </Link>
      <nav className="flex items-center p-0.5 rounded-lg border-solid border-2 border-stone-300 dark:bg-neutral-800 dark:border-neutral-700 border-opacity-30">
        <ThemeSwitcher />

        {showSignIn && onSignIn && (
          <Button
            className={`px-4 py-1 ml-2 text-black bg-white rounded-md border-solid border-[0.5px] border-neutral-200 dark:bg-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all ${
              activeForm === "signIn" ? "font-bold border-blue-600" : ""
            }`}
            variant="default"
            size="default"
            asChild={false}
            onClick={onSignIn}
          >
            Sign in
          </Button>
        )}

        {showSignUp && onSignUp && (
          <Button
            className={`px-4 py-1 ml-2 text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-all ${
              activeForm === "signUp" ? "font-bold text-blue-600" : ""
            }`}
            variant="default"
            size="default"
            asChild={false}
            onClick={onSignUp}
          >
            Sign up
          </Button>
        )}
      </nav>
    </header>
  );
};

export default Header;
