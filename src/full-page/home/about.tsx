// make responsive, have a good spacing when responsive, have a consistent details on 

"use client";

import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/src/components/ui/3d-card";
import Image from "next/image";

const About: React.FC = () => {
    return (
        <section className="p-24 lg:p-28 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <h1 className="text-3xl font-semibold mb-4">
                    About This Template
                </h1>
                <p className="text-base max-w-2xl mx-auto">
                    Created by Joemar in 2024, this template is built with Next.js and Supabase as a foundation for modern web development at <b>Company</b>.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="rounded-lg"
            >
                <h2 className="text-xl font-medium">
                    Our Mission
                </h2>
                <p className="text-base">
                    Our mission is to provide a simple, scalable template powered by Next.js and Supabase, focusing on performance, flexibility, and seamless developer experience.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
            >
                <div className="grid gap-6 lg:grid-cols-3">
                    {[
                        {
                            title: "Cutting-Edge Technology",
                            content:
                                "Next.js ensures fast page loads and optimized performance with server-side rendering and static generation.",
                            imageUrl:
                                "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        },
                        {
                            title: "Realtime Database",
                            content:
                                "With Supabase, get realtime data synchronization, authentication, and PostgreSQL-powered databases out of the box.",
                            imageUrl:
                                "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        },
                        {
                            title: "Future-Proof",
                            content:
                                "This template is designed to evolve with modern standards, ensuring that your projects scale easily with new technology.",
                            imageUrl:
                                "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        },
                    ].map((item, index) => (
                        <CardContainer key={index}>
                            <CardBody className="relative rounded-lg p-6 border">
                                <CardItem translateZ="50" className="text-lg font-semibold">
                                    {item.title}
                                </CardItem>
                                <CardItem as="p" translateZ="60" className="text-sm max-w-sm mt-2">
                                    {item.content}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <Image
                                        src={item.imageUrl}
                                        height="1000"
                                        width="1000"
                                        className="h-40 w-full object-cover rounded-lg"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="rounded-lg"
            >
                <h2 className="text-xl font-medium mb-4">
                    The Foundation
                </h2>
                <p className="text-base">
                    Established in 2024, this template combines Next.js&apos; flexibility with Supabase&apos;s realtime capabilities and PostgreSQL-powered backend, making it the perfect foundation for any web development project.
                </p>
            </motion.div>
        </section>
    );
};

export default About;
