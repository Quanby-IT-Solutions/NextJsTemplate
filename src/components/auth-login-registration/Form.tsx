import React from "react";
import { signInAction } from "@/src/utils/actions";
import { Link } from "lucide-react";
import { Message, FormMessage } from "../form-message/FormMessage";
import { Input } from "../input/Input";
import { SubmitButton } from "../submit-button/SubmitButton";

export interface LoginProps {
  className?: string;
  searchParams: Message;
}

const LoginForm: React.FC<LoginProps> = ({ className = "", searchParams }) => {
  return (
    <form className={`flex flex-col mt-12 w-full max-md:mt-10 ${className}`}>
      <div className="flex flex-col w-full rounded-lg shadow-[0px_3px_24px_rgba(26,26,26,0.1)] p-6 bg-white dark:bg-neutral-800">
        <h1 className="text-2xl font-bold leading-snug text-neutral-900 dark:text-neutral-100">
          Welcome back
        </h1>
        <div className="flex flex-col mt-6 w-full">
          {["email", "password"].map((field) => (
            <div key={field} className="flex flex-col mt-4 w-full">
              <label
                htmlFor={field}
                className="px-4 text-sm tracking-wide leading-none text-zinc-800 dark:text-zinc-200"
              >
                {field === "email" ? "Email" : "Password"}
              </label>
              <div className="flex flex-col mt-2 w-full">
                <Input
                  id={field}
                  name={field}
                  type={field}
                  placeholder={
                    field === "email" ? "email@domain.com" : "Enter password"
                  }
                  required
                  className="py-3 pr-3 pl-4 w-full rounded-md border border-neutral-300 dark:border-neutral-600 bg-zinc-100 dark:bg-zinc-900"
                  aria-label={field}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 items-center mt-5 w-full">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 border-neutral-300 rounded focus:ring-blue-500 dark:focus:ring-offset-neutral-800 focus:ring-2 dark:bg-neutral-800"
            />
            <span className="ml-2 text-sm text-zinc-900 dark:text-zinc-200">
              Remember me
            </span>
          </label>
          <Link
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            href="/forgot-password"
          >
            Forgot password?
          </Link>
        </div>
      </div>
      <SubmitButton
        pendingText="Signing In..."
        formAction={signInAction}
        className="px-6 py-3 mt-8 w-full text-base font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all"
      >
        Sign in
      </SubmitButton>
      <FormMessage message={searchParams} />
    </form>
  );
};

export default LoginForm;
