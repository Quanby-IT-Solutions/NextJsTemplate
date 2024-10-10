"use client";

import { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "What is this template for?",
        answer: "This template is designed for modern web applications using Next.js and Supabase, providing a solid foundation for development."
    },
    {
        question: "How do I switch between themes?",
        answer: "You can switch between light and dark themes using the theme switcher button at the top of the page."
    },
    {
        question: "Can I customize the layout?",
        answer: "Absolutely! The layout is built to be customizable, allowing you to add your own components and modify the design easily."
    },
    {
        question: "Is this template free to use?",
        answer: "Yes, this template is open-source and free to use under the MIT license."
    },
];

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-center items-center gap-10 lg:flex-row lg:justify-between">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                        <img
                            src="https://steamuserimages-a.akamaihd.net/ugc/2279446315728244025/095BAC0DCBE9C8FD68136CAC66901AA2A0170DDF/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
                            alt="FAQ Section"
                            className="w-full rounded-xl object-cover"
                        />
                    </div>

                    {/* FAQ Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-xl">
                            <div className="mb-8">
                                <h6 className="text-lg text-center font-medium text-blue-600 lg:text-left dark:text-blue-400">
                                    FAQs
                                </h6>
                                <h2 className="text-3xl text-center font-bold text-neutral-900 mb-5 lg:text-left dark:text-neutral-100">
                                    Looking for answers?
                                </h2>
                            </div>

                            {/* FAQ Items */}
                            <div className="space-y-6">
                                {faqData.map((faq, index) => (
                                    <div key={index} className="border-b border-neutral-300 dark:border-neutral-600">
                                        <button
                                            className="flex justify-between items-center w-full py-4 text-lg text-neutral-900 font-normal hover:text-blue-600 focus:outline-none dark:text-neutral-100 dark:hover:text-blue-400"
                                            type="button"
                                            onClick={() => toggleFAQ(index)}
                                        >
                                            <span>{faq.question}</span>
                                            <svg
                                                className={`w-6 h-6 transform transition-transform ${openIndex === index ? "rotate-180" : ""
                                                    }`}
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19 9l-7 7-7-7"
                                                ></path>
                                            </svg>
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-all ${openIndex === index ? "max-h-screen py-2" : "max-h-0"
                                                }`}
                                        >
                                            <p className="text-base text-neutral-500 dark:text-neutral-400">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
