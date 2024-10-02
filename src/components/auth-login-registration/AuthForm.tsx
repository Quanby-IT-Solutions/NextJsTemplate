"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signUpAction, signInAction } from "@/src/utils/actions";
import { Input } from "../input/Input";
import { SubmitButton } from "../submit-button/SubmitButton";
import { Message, FormMessage } from "../form-message/FormMessage";

export interface AuthFormProps {
  className?: string;
  searchParams: Message;
  formType: "signIn" | "signUp";
}

const AuthForm: React.FC<AuthFormProps> = ({
  className = "",
  searchParams,
  formType,
}) => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setErrorMessage(null);

    try {
      const result =
        formType === "signUp"
          ? await signUpAction(formData)
          : await signInAction(formData);

      if (result?.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          router.replace("/dashboard");
        }, 500);
      } else if (result?.error) {
        setErrorMessage(result.error);
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  // Success message for sign-up or sign-in with a redirect timer
  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center p-4">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          {formType === "signUp"
            ? "Sign up successful!"
            : "Sign in successful!"}
        </h2>
        <p className="text-lg">Redirecting to dashboard...</p>
        <div className="mt-6 animate-spin rounded-full h-10 w-10 border-b-4 border-primary"></div>
      </div>
    );
  }

  const isSignUp = formType === "signUp";
  const formFields = isSignUp
    ? [
        {
          id: "fullName",
          label: "Full Name",
          type: "text",
          placeholder: "Joe Mar",
        },
        {
          id: "email",
          label: "Email",
          type: "email",
          placeholder: "username@domain.com",
        },
        {
          id: "password",
          label: "Password",
          type: "password",
          placeholder: "Your password",
        },
        {
          id: "confirmPassword",
          label: "Confirm Password",
          type: "password",
          placeholder: "Confirm password",
        },
      ]
    : [
        {
          id: "email",
          label: "Email",
          type: "email",
          placeholder: "username@domain.com",
        },
        {
          id: "password",
          label: "Password",
          type: "password",
          placeholder: "Your password",
        },
      ];

  return (
    <div className={`w-full max-w-md mx-auto flex flex-col ${className}`}>
      <h1 className="text-3xl font-bold text-center text-neutral-900 dark:text-neutral-100">
        {isSignUp ? "Create your account" : "Welcome back"}
      </h1>
      <p className="text-sm text-center text-neutral-500 mt-2 dark:text-neutral-400">
        {isSignUp
          ? "Please fill in the details to create an account."
          : "Enter your credentials to access your account."}
      </p>

      <form
        className="flex flex-col w-full mt-8 space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          handleSubmit(formData);
        }}
      >
        {errorMessage && (
          <p className="text-sm text-red-600 text-center">{errorMessage}</p>
        )}

        {formFields.map((field) => (
          <div key={field.id} className="flex flex-col w-full">
            <label
              htmlFor={field.id}
              className="text-sm font-medium text-neutral-900 dark:text-neutral-100"
            >
              {field.label}
            </label>
            <Input
              id={field.id}
              name={field.id}
              type={field.type}
              placeholder={field.placeholder}
              required
              className="py-3 px-4 mt-2 w-full rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={field.label}
            />
          </div>
        ))}

        {formType === "signIn" && (
          <div className="flex items-center justify-between mt-2">
            <label className="flex items-center text-sm text-neutral-600 dark:text-neutral-300">
              <input
                type="checkbox"
                className="mr-2 w-4 h-4 rounded border-neutral-300 dark:bg-neutral-800 focus:ring-blue-500"
              />
              Remember me
            </label>
            <a
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline dark:text-blue-400"
            >
              Forgot password?
            </a>
          </div>
        )}

        <SubmitButton
          pendingText={isSignUp ? "Signing up..." : "Signing in..."}
          formAction={handleSubmit}
          className="px-6 py-3 mt-6 w-full text-base font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all"
        >
          {isSignUp ? "Sign up" : "Sign in"}
        </SubmitButton>

        <FormMessage message={searchParams} />
      </form>
    </div>
  );
};

export default AuthForm;
