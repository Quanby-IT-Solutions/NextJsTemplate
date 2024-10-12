"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../button/Button";
import { ModeToggle } from "../theme-switcher/ThemeChange";

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

      <div className="hidden md:flex items-center space-x-2">
        <ModeToggle aria-label="Switch Theme" />

        {showSignIn && onSignIn && (
          <Button
            size="sm"
            variant={activeForm === "signIn" ? "default" : "outline"}
            onClick={onSignIn}
            aria-label="Sign In"
          >
            Sign In
          </Button>
        )}

        {showSignUp && onSignUp && (
          <Button
            size="sm"
            variant={activeForm === "signUp" ? "default" : "outline"}
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
