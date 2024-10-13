"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/src/components/ui/accordion";
import * as React from "react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "What is this template for?",
        answer: "This template is designed for modern web applications using Next.js and Supabase, providing a solid foundation for development.",
    },
    {
        question: "How do I switch between themes?",
        answer: "You can switch between light and dark themes using the theme switcher button at the top of the page.",
    },
    {
        question: "Can I customize the layout?",
        answer: "Absolutely! The layout is built to be customizable, allowing you to add your own components and modify the design easily.",
    },
    {
        question: "Is this template free to use?",
        answer: "Yes, this template is open-source and free to use under the MIT license.",
    },
];

const FAQSection: React.FC = () => {
    return (
        <section className="p-24 lg:p-28">
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

                            {/* FAQ Accordion */}
                            <Accordion type="single" collapsible className="space-y-6">
                                {faqData.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-base text-neutral-500 dark:text-neutral-400">
                                                {faq.answer}
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
