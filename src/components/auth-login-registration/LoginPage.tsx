"use client";

import React from "react";
import Header from "./Header";
import LoginForm from "./Form";
import GuestSignIn from "./GuestSignIn";
import Footer from "./Footer";
import { Message } from "../form-message/FormMessage";

interface LoginPageProps {
  searchParams: Message;
  logoSrc: string;
  backgroundImageSrc: string;
  isDevelopment: boolean;
  photoCredit: {
    photographer: string;
    photographerLink: string;
  };
}

const LoginPage: React.FC<LoginPageProps> = ({
  searchParams,
  logoSrc,
  backgroundImageSrc,
  isDevelopment,
  photoCredit,
}) => {
  const handleSignIn = () => {
    console.log("Sign in clicked");
  };

  const handleSignUp = () => {
    console.log("Sign up clicked");
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
            logoSrc={logoSrc}
            onSignIn={handleSignIn}
            onSignUp={handleSignUp}
          />
          <div className="flex flex-col items-center flex-grow mt-12 w-full">
            <LoginForm searchParams={searchParams} />
            <GuestSignIn
              guestOptions={["Guest Admin", "Guest User"]}
              isDevelopment={isDevelopment}
            />
          </div>
          <Footer
            logoSrc={logoSrc}
            logoLink={"/"}
            copyrightText={"© 2024 Mar"}
          />
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
