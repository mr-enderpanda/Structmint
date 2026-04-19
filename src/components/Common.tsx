import { motion } from "motion/react";

export const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center backdrop-blur-md bg-soft-black/80 border-b border-white/5">
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-mint-400 rounded-[2px] shadow-[0_0_10px_rgba(0,255,157,0.5)]"></div>
        <span className="font-sans font-bold text-xl tracking-tighter text-white uppercase">structmint</span>
      </div>
    </div>
    <div className="hidden lg:flex gap-10 text-[11px] font-bold uppercase tracking-[2px] text-white/40">
      <a href="#philosophy" className="hover:text-mint-400 transition-colors">Why Structure?</a>
      <a href="#systems" className="hover:text-mint-400 transition-colors">Design Systems</a>
      <a href="#process" className="hover:text-mint-400 transition-colors">How it works</a>
      <a href="/pricing.html" className="hover:text-mint-400 transition-colors">Pricing</a>
    </div>
    <div className="flex items-center gap-6">
      <a href="https://wa.me/919667115543" className="hidden sm:block px-6 py-2.5 bg-mint-400 text-soft-black font-bold uppercase tracking-[1px] text-[11px] rounded-[4px] hover:shadow-[0_0_20px_rgba(0,255,157,0.3)] transition-all duration-300">
        Start Project
      </a>
    </div>
  </nav>
);

export const FloatingParticles = () => null; // Removed for cleaner immersive look, preserved by returning null

export const GridPattern = () => (
  <div className="absolute inset-0 z-0 opacity-20 pointer-events-none immersive-grid"></div>
);

export const SectionTitle = ({ title, subtitle, centered = false }: { title: string, subtitle?: string, centered?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
    className={`mb-24 ${centered ? 'text-center' : ''}`}
  >
    <div className={`flex items-center gap-4 mb-6 ${centered ? 'justify-center' : 'justify-start'}`}>
      <div className="w-8 h-px bg-mint-400 opacity-40"></div>
      <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-mint-400">{title}</div>
    </div>
    {subtitle && <p className={`text-white/40 max-w-2xl text-lg md:text-xl leading-relaxed font-sans font-normal ${centered ? 'mx-auto' : 'mx-0'}`}>{subtitle}</p>}
  </motion.div>
);
