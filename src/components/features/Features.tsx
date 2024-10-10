"use client";

import { Rocket, Settings, Shield } from "lucide-react";
import { motion } from "framer-motion";

const featuresData = [
    { icon: Rocket, title: "Fast Performance", description: "Optimized for speed and efficiency." },
    { icon: Settings, title: "Customizable", description: "Easily adaptable to your needs." },
    { icon: Shield, title: "Secure", description: "Built with security in mind." },
];

const Features: React.FC = () => {
    return (
        <section className="py-12 bg-gray-100 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white"
                >
                    The Features
                </motion.h2>
                <div className="grid gap-8 lg:grid-cols-3">
                    {featuresData.map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow"
                        >
                            <div className="flex items-center justify-center mb-4 text-indigo-600">
                                <feature.icon className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{feature.title}</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
