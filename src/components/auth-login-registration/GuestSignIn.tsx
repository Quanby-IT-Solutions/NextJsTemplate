import React from "react";

interface GuestSignInProps {
  guestOptions: string[];
  isDevelopment: boolean;
}

const GuestSignIn: React.FC<GuestSignInProps> = ({
  guestOptions,
  isDevelopment,
}) => {
  return (
    <div className="flex flex-col items-center mt-8 w-full">
      <div className="w-full bg-neutral-200 dark:bg-neutral-700 h-[1px]" />

      {/* Accessible Label for Select */}
      <label
        htmlFor="guest-sign-in"
        className="mt-8 mb-2 text-xs font-medium tracking-wide text-zinc-900 dark:text-zinc-100"
      >
        Sign in as guest:
      </label>

      <select
        id="guest-sign-in"
        className="w-full text-xs tracking-wide leading-loose text-white bg-zinc-800 dark:bg-zinc-900 rounded-md px-4 py-2.5 min-w-[240px]"
        aria-label="Select guest role"
      >
        {guestOptions.map((option) => (
          <option key={option} value={option}>
            {`Sign in as ${option}`}
          </option>
        ))}
        {/* Add guest login option only in development mode */}
        {isDevelopment && (
          <option value="login-as-guest">
            Sign in as Guest (Development Only)
          </option>
        )}
      </select>

      <p className="flex gap-2 items-start mt-6 text-xs tracking-wide leading-loose">
        <span className="text-zinc-900 dark:text-zinc-100">
          Don't have an account?
        </span>
        <a href="#" className="text-blue-600 dark:text-blue-400">
          Sign up now
        </a>
      </p>
    </div>
  );
};

export default GuestSignIn;
