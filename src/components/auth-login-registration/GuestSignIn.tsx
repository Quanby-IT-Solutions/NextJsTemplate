import React from "react";
import { Button } from "../button/Button";
import { Link } from "lucide-react";

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
        <div className="flex flex-col items-center mt-8 w-full">
          <div className="w-full bg-neutral-300 dark:bg-neutral-700 h-[1px]" />

          <p className="mt-8 mb-4 text-sm font-medium tracking-wide text-zinc-900 dark:text-zinc-100">
            Sign in as guest:
          </p>

          <div className="flex flex-wrap gap-4 w-full justify-center">
            {guestOptions.map((option) => (
              <Button
                key={option}
                onClick={() => handleGuestSignIn(option)}
                className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all"
              >
                {`${option}`}
              </Button>
            ))}
          </div>

          <p className="flex gap-2 items-start mt-6 text-sm tracking-wide leading-loose">
            <span className="text-zinc-900 dark:text-zinc-100">
              Don't have an account?
            </span>
            <Link
              href="#"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Sign up now
            </Link>
          </p>
        </div>
      )}
    </>
  );
};

export default GuestSignIn;
