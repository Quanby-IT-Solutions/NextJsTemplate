"use client";

import Link from "next/link";
import Image from "next/image";
import qLogo from "/public/img/quanby-logo.png";
import mLogo from "/public/img/mar-logo.png";
import company from "/public/img/company.gif";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-8 p-6 lg:p-10 bg-gray-900 text-white w-full h-screen max-h-[80vh]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={company}
          alt="Company Background"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 text-center w-full max-w-5xl mx-auto">
        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer"
          >
            <Image src={qLogo} alt="Quanby Logo" width={40} height={40} />
          </motion.div>

          <span className="border-l border-gray-500 h-4" />

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer"
          >
            <Image src={mLogo} alt="Mar Logo" width={40} height={40} />
          </motion.div>
        </motion.div>

        {/* Divider Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl p-[1px] bg-gray-500 mt-6"
        />

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6"
        >
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Creating the Foundation for Future Projects
          </h1>
          <p className="text-base lg:text-lg max-w-2xl mx-auto">
            Our team is building a powerful, reusable template to streamline
            development and ensure consistency across future projects. By
            focusing on best practices and efficient solutions, we aim to
            provide a solid foundation for growth and innovation at <b>COMPANY</b>.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6"
        >
          <Link
            href="/get-started"
            className="inline-block px-4 py-2 md:px-6 md:py-3 bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-500 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-700"
          >
            Explore the Template
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
