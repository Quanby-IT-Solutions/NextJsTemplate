"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="py-12 bg-gray-100 dark:bg-gray-800"
        >
            <div className="max-w-xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Subscribe to our Newsletter</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Get the latest updates and news directly in your inbox.</p>
                <form onSubmit={handleSubmit} className="flex justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full max-w-md px-4 py-2 border-none rounded-l-lg focus:outline-none"
                        required
                    />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        type="submit"
                        className="bg-indigo-600 text-white px-6 py-2 rounded-r-lg font-semibold hover:bg-indigo-500"
                    >
                        Subscribe
                    </motion.button>
                </form>
            </div>
        </motion.section>
    );
};

export default Newsletter;
