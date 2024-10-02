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

const Form: React.FC<LoginProps> = ({ className = "", searchParams }) => {
  return (
    <form className={`flex flex-col mt-12 w-full max-md:mt-10 ${className}`}>
      <div className="flex flex-col w-full rounded-lg shadow-[0px_3px_24px_rgba(26,26,26,0.1)]">
        <h1 className="text-xl font-semibold leading-snug">
          Nice to see you again
        </h1>
        <div className="flex flex-col mt-6 w-full">
          {["email", "password"].map((field) => (
            <div key={field} className="flex flex-col mt-4 w-full">
              <label
                htmlFor={field}
                className="px-4 text-xs tracking-wide leading-none text-zinc-800"
              >
                {field === "email" ? "Email" : "Password"}
              </label>
              <div className="flex flex-col mt-2 w-full">
                <div className="flex flex-col w-full rounded-md border-solid bg-zinc-100 border-[0.5px] border-neutral-200">
                  <Input
                    id={field}
                    name={field}
                    type={field}
                    placeholder={
                      field === "email" ? "email@domain.com" : "Enter password"
                    }
                    required
                    className="py-2 pr-2 pl-4 w-full rounded-md"
                    aria-label={field}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 items-start mt-5 w-full">
          <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only" />
            <div className="flex items-center justify-center w-4 h-4 bg-white rounded-md border-solid border-[0.5px] border-neutral-200">
              <div className="hidden w-2 h-2 bg-blue-600 rounded-full" />
            </div>
            <span className="ml-2 text-xs text-zinc-900">Remember me</span>
          </label>
          <Link className="text-xs text-blue-600" href="/forgot-password">
            Forgot password?
          </Link>
        </div>
      </div>
      <SubmitButton
        pendingText="Signing In..."
        formAction={signInAction}
        className="px-6 py-2.5 mt-8 w-full text-base font-bold leading-none text-center text-white bg-blue-600 rounded-md max-md:px-5"
      >
        Sign in
      </SubmitButton>
      <FormMessage message={searchParams} />
    </form>
  );
};

export default Form;
