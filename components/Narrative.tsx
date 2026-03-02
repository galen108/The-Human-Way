"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/data/content";
import { cn } from "@/lib/utils";

export function Narrative() {
  return (
    <div className="flex flex-col gap-32 py-24 px-6 max-w-4xl mx-auto overflow-hidden">
      {CONTENT.sections.map((section, index) => (
        <motion.section
          key={section.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={cn(
            "relative flex flex-col gap-8",
            index % 2 === 0 ? "items-start" : "items-end text-right"
          )}
        >
          {/* Decorative index */}
          <span className="text-8xl font-black text-white/5 absolute -top-12 -left-4 select-none">
            0{index + 1}
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 z-10">
            {section.title}
          </h2>

          <div className={cn(
            "flex flex-col gap-6 max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed",
            index % 2 !== 0 && "items-end"
          )}>
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
          </div>

          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-px bg-gradient-to-r from-zinc-700 to-transparent w-24" 
          />
        </motion.section>
      ))}
    </div>
  );
}
