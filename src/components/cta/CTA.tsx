"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const CTA: React.FC = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="py-12 bg-indigo-600 text-white text-center"
        >
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-lg mb-6">Join us today and take your project to the next level.</p>
                <Link
                    href="/sign-up"
                    className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100"
                >
                    Sign Up Now
                </Link>
            </div>
        </motion.section>
    );
};

export default CTA;
