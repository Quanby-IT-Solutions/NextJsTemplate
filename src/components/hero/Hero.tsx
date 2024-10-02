import Link from "next/link";
import Image from "next/image";
import qLogo from "/public/img/quanby-logo.png";
import mLogo from "/public/img/mar-logo.png";
import { AuthButtons } from "../auth-button/AuthButton";
import { ThemeSwitcher } from "../theme-switcher/ThemeSwitcher";

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-16 p-8 lg:p-16 w-full bg-gradient-to-b from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      {/* Logo Section */}
      <div className="flex flex-wrap gap-8 justify-center items-center">
        <Image
          src={qLogo}
          alt="Quanby Logo"
          width={50}
          height={50}
          className="transition-transform transform hover:scale-110 duration-300"
        />
        <span className="border-l border-gray-300 dark:border-gray-700 h-6" />
        <Image
          src={mLogo}
          alt="Mar Logo"
          width={50}
          height={50}
          className="transition-transform transform hover:scale-110 duration-300"
        />
      </div>

      {/* Divider Line */}
      <div className="w-full max-w-4xl p-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>

      {/* Hero Text Section */}
      <div className="text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-500">
          Creating the Foundation for Future Projects
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-500">
          The Mar team is building a powerful, reusable template to streamline
          development and ensure consistency across future projects. By focusing
          on best practices and efficient solutions, we aim to provide a solid
          foundation that supports rapid growth and innovation.
        </p>
        <div className="mt-8">
          <Link
            href="/get-started"
            className="inline-block px-8 py-4 bg-indigo-600 text-white text-lg rounded-lg shadow-lg hover:bg-indigo-500 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-700"
          >
            Explore the Template
          </Link>
        </div>
      </div>

      {/* Authentication Buttons */}
      <div className="mt-8 flex justify-center w-full">
        <AuthButtons />
      </div>

      {/* Theme Switcher */}
      <div className="mt-4">
        <ThemeSwitcher />
      </div>
    </section>
  );
}
