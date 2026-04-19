import { Check } from "lucide-react";

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="text-center mb-16">
    <div className="flex items-center gap-4 mb-6 justify-center">
      <div className="w-8 h-px bg-mint-400 opacity-40"></div>
      <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-mint-400">{title}</div>
      <div className="w-8 h-px bg-mint-400 opacity-40"></div>
    </div>
    {subtitle && <p className="text-white/40 max-w-xl mx-auto text-lg">{subtitle}</p>}
  </div>
);

export const PricingSection = () => (
  <section id="pricing" className="py-24 md:py-32 px-6 border-t border-white/5 bg-white/[0.005]">
    <div className="max-w-7xl mx-auto">
      <SectionTitle 
        title="Investment Structure" 
        subtitle="Clear pricing for every stage of your digital growth."
      />
      
      {/* Website Packages */}
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        <div className="p-8 rounded-[2rem] glass-card border-white/5">
          <h3 className="text-[10px] font-black text-mint-400 uppercase tracking-[0.4em] mb-4">Landing Page</h3>
          <div className="text-4xl font-light text-white tracking-tighter mb-2">₹5,000</div>
          <p className="text-dim text-sm mb-6">Single-page presence for startups.</p>
          <ul className="space-y-3 mb-8">
            {["Custom design", "Mobile optimized", "Contact form", "1 week delivery"].map(item => (
              <li key={item} className="flex items-center gap-3 text-sm text-white/60">
                <Check className="w-4 h-4 text-mint-400" />{item}
              </li>
            ))}
          </ul>
          <a href="https://wa.me/919667115543?text=Hi!%20Interested%20in%20Landing%20Page%20(₹5000)" 
             className="block w-full py-4 text-[11px] font-bold uppercase tracking-[2px] rounded-full border border-white/10 text-white hover:bg-white/5 transition-all text-center">
            Book Now
          </a>
        </div>

        <div className="p-8 rounded-[2rem] glass-card border-mint-400/20 bg-white/[0.02] relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-mint-400 text-soft-black text-[9px] font-black uppercase tracking-[0.2em] rounded-full">Popular</span>
          <h3 className="text-[10px] font-black text-mint-400 uppercase tracking-[0.4em] mb-4">Multi-Page Site</h3>
          <div className="text-4xl font-light text-white tracking-tighter mb-2">₹10,000</div>
          <p className="text-dim text-sm mb-6">Full website for growing businesses.</p>
          <ul className="space-y-3 mb-8">
            {["5+ pages", "SEO optimized", "Lead forms", "2 week delivery", "Analytics setup"].map(item => (
              <li key={item} className="flex items-center gap-3 text-sm text-white/60">
                <Check className="w-4 h-4 text-mint-400" />{item}
              </li>
            ))}
          </ul>
          <a href="https://wa.me/919667115543?text=Hi!%20Interested%20in%20Multi-Page%20(₹10000)" 
             className="block w-full py-4 text-[11px] font-bold uppercase tracking-[2px] rounded-full bg-mint-400 text-soft-black hover:shadow-[0_0_30px_rgba(163,230,53,0.2)] transition-all text-center">
            Book Now
          </a>
        </div>

        <div className="p-8 rounded-[2rem] glass-card border-white/5">
          <h3 className="text-[10px] font-black text-mint-400 uppercase tracking-[0.4em] mb-4">Enterprise</h3>
          <div className="text-4xl font-light text-white tracking-tighter mb-2">₹25,000</div>
          <p className="text-dim text-sm mb-6">Complex builds with custom logic.</p>
          <ul className="space-y-3 mb-8">
            {["Unlimited pages", "Custom features", "CMS integration", "Priority support", "Maintenance included"].map(item => (
              <li key={item} className="flex items-center gap-3 text-sm text-white/60">
                <Check className="w-4 h-4 text-mint-400" />{item}
              </li>
            ))}
          </ul>
          <a href="https://wa.me/919667115543?text=Hi!%20Interested%20in%20Enterprise%20(₹25000)" 
             className="block w-full py-4 text-[11px] font-bold uppercase tracking-[2px] rounded-full border border-white/10 text-white hover:bg-white/5 transition-all text-center">
            Book Now
          </a>
        </div>
      </div>

      {/* Add-ons & Extras */}
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { name: "Logo Design", price: "₹2,500" },
          { name: "Brand Identity", price: "₹5,000" },
          { name: "E-commerce Add-on", price: "₹8,000" },
          { name: "Site Audit", price: "₹3,000" },
        ].map(item => (
          <div key={item.name} className="p-6 rounded-2xl glass-card border-white/5 text-center">
            <div className="text-mint-400 font-mono text-xl mb-1">{item.price}</div>
            <div className="text-white/60 text-sm">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
