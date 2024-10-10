"use client";

import Link from "next/link";
import Image from "next/image";
import qLogo from "/public/img/quanby-logo.png";
import mLogo from "/public/img/mar-logo.png";
import company from "/public/img/company.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center gap-16 p-8 lg:p-16 w-full pt-24 lg:pt-32 bg-gradient-to-b from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src={company}
          alt="Company Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="w-full h-full"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-wrap gap-8 justify-center items-center z-10"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer"
        >
          <Image src={qLogo} alt="Quanby Logo" width={50} height={50} />
        </motion.div>

        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="border-l border-gray-300 dark:border-gray-700 h-6"
        />

        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer"
        >
          <Image src={mLogo} alt="Mar Logo" width={50} height={50} />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-4xl p-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent z-10"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-center z-10"
      >
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-500">
          Creating the Foundation for Future Projects
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-500">
          This team is building a powerful, reusable template to streamline
          development and ensure consistency across future projects. By focusing
          on best practices and efficient solutions, we aim to provide a solid
          foundation that supports rapid growth and innovation for the <b> COMPANY</b>.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="mt-8"
        >
          <Link
            href="/get-started"
            className="inline-block px-6 py-3 md:px-8 md:py-4 bg-indigo-600 text-white text-base md:text-lg rounded-lg shadow-lg hover:bg-indigo-500 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-700"
          >
            Explore the Template
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
