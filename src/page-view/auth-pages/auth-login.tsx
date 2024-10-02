"use client";

import React, { useState } from "react";
import Header from "../../components/auth-login-registration/Header";
import LoginForm from "../../components/auth-login-registration/Form";
import GuestSignIn from "../../components/auth-login-registration/GuestSignIn";
import Footer from "../../components/auth-login-registration/Footer";
import { Message } from "../../components/form-message/FormMessage";
import { StaticImageData } from "next/image";
import SignUpForm from "../../components/auth-login-registration/SignupForm";

interface AuthLoginProps {
  searchParams: Message;
  logoSrc: string | StaticImageData;
  backgroundImageSrc: string;
  isDevelopment: boolean;
  showSignIn?: boolean;
  showSignUp?: boolean;
}

const AuthLogin: React.FC<AuthLoginProps> = ({
  searchParams,
  logoSrc,
  backgroundImageSrc,
  isDevelopment,
  showSignIn = true,
  showSignUp = true,
}) => {
  const [formType, setFormType] = useState<"signIn" | "signUp">("signIn");

  const handleSignIn = () => {
    setFormType("signIn");
  };

  const handleSignUp = () => {
    setFormType("signUp");
  };

  return (
    <div className="flex w-full min-h-screen">
      <div className="hidden md:flex flex-1">
        <img
          loading="lazy"
          src={backgroundImageSrc}
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

          <div className="flex flex-col items-center flex-grow mt-12 w-full">
            {formType === "signIn" && <LoginForm searchParams={searchParams} />}
            {formType === "signUp" && (
              <SignUpForm searchParams={searchParams} />
            )}{" "}
            {formType === "signIn" && (
              <GuestSignIn
                guestOptions={["Guest Admin", "Guest User"]}
                isDevelopment={isDevelopment}
              />
            )}
          </div>

          <Footer
            logoSrc={typeof logoSrc === "string" ? logoSrc : logoSrc.src}
            logoLink={"/"}
            copyrightText={"© 2024 Mar"}
          />
        </div>
      </section>
    </div>
  );
};

export default AuthLogin;
