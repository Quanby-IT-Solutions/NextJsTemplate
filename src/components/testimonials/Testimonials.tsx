"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../button/Button";

const testimonialsData = [
    { name: "Jane Doe", feedback: "An amazing platform to build modern web applications.", title: "CEO, Tech Corp" },
    { name: "John Smith", feedback: "The best tool for rapid development.", title: "Founder, StartUp Inc." },
    { name: "Alex Johnson", feedback: "This has saved us so much time and effort!", title: "CTO, Innovate Co." },
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className="py-12 bg-neutral-50 dark:bg-neutral-900 text-center">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">
                    What Our Clients Say
                </h2>
                <div className="relative">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-lg"
                    >
                        <p className="text-xl text-neutral-800 dark:text-neutral-200 italic mb-6">
                            "{testimonialsData[currentIndex].feedback}"
                        </p>
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                            {testimonialsData[currentIndex].name}
                        </h3>
                        <span className="text-sm text-neutral-500 dark:text-neutral-400">
                            {testimonialsData[currentIndex].title}
                        </span>
                    </motion.div>

                    <div className="flex justify-between absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-4">
                        <Button
                            onClick={handlePrev}
                            className="text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors duration-300"
                        >
                            <ChevronLeft size={40} />
                        </Button>
                        <Button
                            onClick={handleNext}
                            className="text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors duration-300"
                        >
                            <ChevronRight size={40} />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
