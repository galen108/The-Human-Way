"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-24 px-6 border-t border-zinc-900 bg-black/40 backdrop-blur-xl">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-4"
        >
          <p className="text-zinc-500 font-medium tracking-[0.2em] uppercase text-sm">
            Final Disclosure
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 italic">
            "The Third Temple is a human community to be rebuilt in spirit."
          </h2>
        </motion.div>

        <div className="h-24 w-px bg-gradient-to-b from-zinc-700 to-transparent" />

        <div className="text-zinc-600 text-sm tracking-widest uppercase">
          © {new Date().getFullYear()} — The Human Way
        </div>
      </div>
    </footer>
  );
}
