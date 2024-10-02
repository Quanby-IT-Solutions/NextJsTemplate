"use client";

import React from "react";
import { motion } from "framer-motion";
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
    <motion.header
      className="flex items-center justify-between w-full px-4 py-4 md:px-6"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Link href="/" className="flex items-center space-x-2">
        <motion.img
          loading="lazy"
          src={logoSrc}
          alt="Company logo"
          width={40}
          height={40}
          className="object-contain"
          initial={{ rotate: -10 }}
          animate={{ rotate: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        />
      </Link>

      <div className="hidden md:flex items-center space-x-6">
        <ThemeSwitcher aria-label="Switch Theme" />

        {showSignIn && onSignIn && (
          <Button
            className={`px-4 py-2 rounded-full transition-all font-semibold border border-solid ${
              activeForm === "signIn"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-transparent text-neutral-700 dark:text-neutral-300 border-neutral-400 hover:bg-blue-100 dark:hover:bg-blue-800 hover:text-neutral-900"
            }`}
            onClick={onSignIn}
            aria-label="Sign In"
          >
            Sign In
          </Button>
        )}

        {showSignUp && onSignUp && (
          <Button
            className={`px-4 py-2 rounded-full transition-all font-semibold border border-solid ${
              activeForm === "signUp"
                ? "bg-green-600 text-white border-green-600"
                : "bg-transparent text-neutral-700 dark:text-neutral-300 border-neutral-400 hover:bg-green-100 dark:hover:bg-green-800 hover:text-neutral-900"
            }`}
            onClick={onSignUp}
            aria-label="Sign Up"
          >
            Sign Up
          </Button>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
