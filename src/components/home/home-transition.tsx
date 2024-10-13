"use client";

import { motion } from "framer-motion";

export default function HomeTransition({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{
                ease: "easeInOut",
                duration: 0.8,
                staggerChildren: 0.15,
            }}
        >
            {children}
        </motion.div>
    );
}
