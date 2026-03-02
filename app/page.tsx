import { Hero } from "@/components/Hero";
import { Horsemen } from "@/components/Horsemen";
import { Narrative } from "@/components/Narrative";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-white selection:text-black">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-zinc-700/10 rounded-full blur-[120px] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10">
        <Hero />
        <Horsemen />
        <Narrative />
        <Footer />
      </div>
    </main>
  );
}
