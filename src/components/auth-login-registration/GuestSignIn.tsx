import React from "react";
import { Button } from "../button/Button";
import { motion } from "framer-motion";

interface GuestSignInProps {
  guestOptions: string[];
  isDevelopment: boolean;
}

const GuestSignIn: React.FC<GuestSignInProps> = ({
  guestOptions,
  isDevelopment,
}) => {
  const handleGuestSignIn = (option: string) => {
    console.log(`Sign in as ${option} clicked`);
  };

  return (
    <>
      {isDevelopment && (
        <motion.div
          className="flex flex-col items-center mt-8 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full bg-neutral-300 dark:bg-neutral-700 h-[1px]" />

          <p className="mt-8 mb-4 text-sm font-medium tracking-wide text-zinc-900 dark:text-zinc-100">
            Sign in as guest:
          </p>

          <div className="flex flex-wrap gap-4 w-full justify-center">
            {guestOptions.map((option) => (
              <motion.div
                key={option}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => handleGuestSignIn(option)}
                  variant="default"
                  size="sm"
                >
                  {option}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default GuestSignIn;
