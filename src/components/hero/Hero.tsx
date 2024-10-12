"use client";

import { cn } from "@/src/utils/cn";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export default function Hero() {

  const words = [
    {
      text: "This",
    },
    {
      text: "is",
    },
    {
      text: "our",
    },
    {
      text: "own",
    },
    {
      text: "Template.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <section
      className={cn(
        "relative z-50 flex items-center justify-center h-screen bg-cover bg-center",
        "bg-[url('/img/company.png')] from-transparent to-neutral-900 dark:from-transparent dark:to-neutral-800"
      )}
    >
      {/* Overlay to dim the background image */}
      <div className="absolute inset-0 bg-black opacity-60 dark:opacity-50 z-0"></div>

      {/* Content wrapper */}
      <div className="flex flex-col items-center justify-center h-[40rem]">
        <motion.div
          className="relative z-10 container text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-xs sm:text-base text-neutral-400  mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            The road to freedom starts from here
          </motion.h1>
          <motion.div
            className="text-lg text-white max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <TypewriterEffectSmooth words={words} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
