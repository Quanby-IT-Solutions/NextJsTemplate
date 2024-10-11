"use client";

import React, { useState } from "react";
import Header from "../../components/auth-login-registration/Header";
import GuestSignIn from "../../components/auth-login-registration/GuestSignIn";
import { Message } from "../../components/form-message/FormMessage";
import { StaticImageData } from "next/image";
import AuthForm from "@/src/components/auth-login-registration/AuthForm";

interface AuthLoginProps {
  searchParams: Message;
  logoSrc: string | StaticImageData;
  signInBackgroundImageSrc: string;
  signUpBackgroundImageSrc: string;
  isDevelopment: boolean;
  showSignIn?: boolean;
  showSignUp?: boolean;
  initialForm?: "signIn" | "signUp";
}

const AuthLogin: React.FC<AuthLoginProps> = ({
  searchParams,
  logoSrc,
  signInBackgroundImageSrc,
  signUpBackgroundImageSrc,
  isDevelopment,
  showSignIn = true,
  showSignUp = true,
  initialForm = "signIn",
}) => {
  const [formType, setFormType] = useState<"signIn" | "signUp">(initialForm);

  const handleSignIn = () => setFormType("signIn");
  const handleSignUp = () => setFormType("signUp");

  return (
    <div className="flex w-full min-h-screen">
      {/* Dynamic Background for Sign In/Sign Up */}
      <div className="hidden md:flex flex-1">
        <img
          loading="lazy"
          src={
            formType === "signIn"
              ? signInBackgroundImageSrc
              : signUpBackgroundImageSrc
          }
          alt="Background image"
          className="object-cover w-full h-full"
        />
      </div>

      <section className="flex flex-col items-center justify-between w-full max-w-lg p-8 bg-white dark:bg-neutral-800 min-h-screen mx-auto">
        <div className="w-full max-w-md">
          <Header
            logoSrc={typeof logoSrc === "string" ? logoSrc : logoSrc.src}
            onSignIn={handleSignIn}
            onSignUp={handleSignUp}
            showSignIn={showSignIn}
            showSignUp={showSignUp}
            activeForm={formType}
          />

          <div className="mt-12 w-full">
            {formType === "signIn" && (
              <AuthForm formType={"signIn"} />
            )}
            {formType === "signUp" && (
              <AuthForm formType={"signUp"} />
            )}
            {formType === "signIn" && (
              <GuestSignIn
                guestOptions={["Guest Admin", "Guest User"]}
                isDevelopment={isDevelopment}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthLogin;
