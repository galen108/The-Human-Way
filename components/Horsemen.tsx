"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/data/content";
import { cn } from "@/lib/utils";
import { ArrowRight, Sword, Scale, Bug } from "lucide-react";

const icons: Record<string, any> = {
  white: ArrowRight, // Using Arrow as a substitute for bow/direction
  red: Sword,
  black: Scale,
  ashen: Bug
};

export function Horsemen() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CONTENT.horsemen.map((horse, index) => {
          const Icon = icons[horse.id];
          return (
            <motion.div
              key={horse.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={cn(
                "vibe-card p-8 flex flex-col items-start gap-6 group relative overflow-hidden",
                horse.isSpecial && "border-amber-900/50 bg-amber-950/10"
              )}
            >
              {/* Background gradient hint */}
              <div className={cn(
                "absolute -top-12 -right-12 w-32 h-32 blur-[40px] opacity-20 transition-opacity group-hover:opacity-40",
                horse.color.split(' ')[0]
              )} />

              <div className={cn("p-4 rounded-xl bg-zinc-800/50", horse.accent)}>
                <Icon size={28} />
              </div>

              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-zinc-500 mb-2">
                  {horse.title}
                </h3>
                <h4 className="text-2xl font-semibold mb-4 text-zinc-100">
                  {horse.rider}
                </h4>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {horse.description}
                </p>
              </div>

              <div className="mt-auto pt-4 flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-tighter text-zinc-600">Symbol</span>
                <span className={cn("text-xs font-medium", horse.accent)}>{horse.symbol}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
