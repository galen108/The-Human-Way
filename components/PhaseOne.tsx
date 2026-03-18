"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CONTENT } from "@/data/content";
import { ChevronDown } from "lucide-react";

export function PhaseOne() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6 text-center">
            {/* Background patterns/vibe */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]" />
            </div>
            <motion.div style={{ y: y1, opacity }} className="z-10 max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-bold mb-8 gradient-text"
                >
                    {CONTENT.phaseOne.title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-bold mb-8 gradient-text"
                >
                    {CONTENT.phaseOne.subtitle}
                </motion.p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600"
            >
                <span className="text-sm font-medium tracking-widest uppercase">Explore</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown size={24} />
                </motion.div>
            </motion.div>
        </section>
    );
}