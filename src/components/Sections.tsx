import { motion } from "motion/react";
import { 
  ArrowRight, 
  ChevronRight, 
  Layout, 
  Zap, 
  Sparkles, 
  Image as ImageIcon, 
  Grid, 
  Layers, 
  Smile, 
  MessageCircle, 
  Mail, 
  Plus, 
  Minus, 
  Check, 
  Quote, 
  Target, 
  Cpu,
  Activity,
  GraduationCap,
  Dumbbell,
  Palette
} from "lucide-react";
import { useState } from "react";
import { SectionTitle, GridPattern } from "./Common";

export const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
    <GridPattern />
    
    <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-mint-500/5 blur-[160px] rounded-full organic-blur"></div>
    <div className="absolute bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-mint-500/5 blur-[160px] rounded-full organic-blur"></div>

    <div className="relative z-10 max-w-6xl w-full text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/5 bg-white/[0.01] mb-12 backdrop-blur-sm">
           <span className="w-1.5 h-1.5 rounded-full bg-mint-400"></span>
           <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-white/40">Open for new projects // 2026</span>
        </div>
        <h1 className="font-display text-7xl md:text-[7rem] lg:text-[10rem] font-light leading-[0.8] tracking-tighter mb-12">
          Structure <br/><span className="text-mint-400">x Nature.</span>
        </h1>
        <p className="text-white/60 text-xl md:text-2xl max-w-3xl mx-auto mb-16 font-sans tracking-tight leading-relaxed">
          Clean digital environments designed with calm precision. We transform communication hurdles into structured growth tools.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
      >
        <a href="#packages" className="px-10 py-5 bg-mint-400 text-soft-black font-bold uppercase tracking-[2px] text-xs rounded-full hover:shadow-[0_0_40px_rgba(163,230,53,0.3)] transition-all duration-500">
           Project Packages
        </a>
        <a href="#expertise" className="px-10 py-5 border border-white/10 text-white font-bold uppercase tracking-[2px] text-xs rounded-full hover:bg-white/5 transition-all duration-500 backdrop-blur-sm">
          Expertise
        </a>
      </motion.div>
    </div>
  </section>
);

export const Philosophy = () => (
  <section id="philosophy" className="section-padding px-6 relative border-t border-white/5 bg-white/[0.005]">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-32 items-center">
        <div>
          <SectionTitle 
            title="Design Guided by Clarity"
            subtitle="Most platforms fail due to clutter. We use structured design logic to improve how customers perceive your brand and navigate your services."
          />
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16 mt-16">
            {[
              { title: "Visual Trust", desc: "Symmetry and order create an immediate sense of competence." },
              { title: "Clarity", desc: "Removal of noise to ensure your core message is heard." },
              { title: "Hierarchy", desc: "Scientific placement of elements to guide the user's eye." },
              { title: "Simplicity", desc: "Complex business ideas simplified through structure." }
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="text-mint-400/20 font-display text-4xl mb-4 group-hover:text-mint-400/40 transition-colors">{`0${i+1}`}</div>
                <h4 className="text-white font-bold text-base mb-3 uppercase tracking-wider">{item.title}</h4>
                <p className="text-dim text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative aspect-square rounded-[3rem] overflow-hidden glass-card p-24 flex items-center justify-center group">
          <div className="absolute inset-0 bg-mint-500/[0.02] opacity-50 group-hover:scale-105 transition-transform duration-1000"></div>
          <div className="relative w-full h-full border border-white/5 rounded-full flex items-center justify-center">
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 border border-dashed border-white/10 rounded-full"
            />
            <div className="p-12 text-center">
               <Target className="w-12 h-12 text-mint-400/20 mx-auto mb-6" />
               <div className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/20">Structural Equilibrium</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const DesignCard = ({ name, description, ideal, icon: Icon }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass-card p-10 rounded-[2.5rem] hover:border-mint-400/20 transition-all duration-700 group flex flex-col min-h-[400px]"
  >
    <div className="mb-10 p-4 w-fit rounded-2xl bg-white/5 text-mint-400 transition-colors">
      <Cpu className="w-5 h-5 opacity-40" />
    </div>
    <div className="mb-2 text-[10px] font-bold uppercase tracking-[3px] text-mint-400/40">AI Employee</div>
    <h3 className="font-display text-2xl font-medium mb-6 text-white tracking-tight">{name}</h3>
    <p className="text-dim text-sm leading-relaxed mb-10">{description}</p>
    <div className="mt-auto pt-8 border-t border-white/5 flex flex-wrap gap-2">
      {ideal.map((item: string) => (
        <span key={item} className="text-[9px] uppercase font-bold tracking-widest text-white/20 px-3 py-1 rounded-full border border-white/5">{item}</span>
      ))}
    </div>
  </motion.div>
);

export const DesignSystems = () => (
  <section id="systems" className="section-padding px-6">
    <div className="max-w-7xl mx-auto">
      <SectionTitle 
        title="AI Assisted Production"
        subtitle="Each project is guided by our specialized AI employees. They provide the structural data, while we steer the creative direction."
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <DesignCard 
          icon={Layout}
          name="Aiko Tanaka"
          description="Specialist in minimal precision layouts. Focused on calm visual balance for clinical and architectural environments."
          ideal={["Clinical", "Architecture", "Consultancy"]}
        />
        <DesignCard 
          icon={Zap}
          name="Rafael Moreira"
          description="Focused on bold, high-engagement systems. Optimized for startups and personal training brands requiring impact."
          ideal={["Fitness", "Startups", "Bold"]}
        />
        <DesignCard 
          icon={ImageIcon}
          name="Lucia Fernández"
          description="Expressive system design focused on visual storytelling and image-led creative portfolios."
          ideal={["Photography", "Salons", "Studios"]}
        />
        <DesignCard 
          icon={Grid}
          name="Arjun Mehta"
          description="Structured multi-page hierarchy specialist. Designed for service businesses and education institutes."
          ideal={["Education", "Professional"]}
        />
        <DesignCard 
          icon={Smile}
          name="Kavya Iyer"
          description="Friendly, approachable modern systems. Designed for local brands and community-focused businesses."
          ideal={["Local Retail", "Home Services"]}
        />
        <div className="glass-card p-10 rounded-[2.5rem] border-dashed border-white/10 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-white/[0.01] transition-all duration-700">
           <Plus className="w-6 h-6 text-white/10 group-hover:text-mint-400 transition-colors mb-6" />
           <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">Custom Integration</p>
        </div>
      </div>
    </div>
  </section>
);

export const SelectedWork = () => (
  <section id="expertise" className="section-padding px-6 border-t border-white/5 bg-white/[0.005]">
    <div className="max-w-7xl mx-auto">
      <SectionTitle 
        title="Expertise" 
        subtitle="Websites of our expertise. Each project is a testament to the power of structured digital thinking."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {[
          { title: "Dental Practice Expansion", category: "Medical Framework", icon: Activity },
          { title: "Academy Learning Platform", category: "Educational Hierarchy", icon: GraduationCap },
          { title: "Strength & Conditioning Lab", category: "Wellness Engagement", icon: Dumbbell },
          { title: "Artisan Studio Showcase", category: "Visual Narrative", icon: Palette }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-[3rem] overflow-hidden aspect-[4/3] glass-card hover:border-mint-400/20 transition-all duration-1000 flex flex-col items-center justify-center text-center p-12"
          >
           <div className="mb-8 p-8 rounded-full bg-white/[0.01] border border-white/5 group-hover:border-mint-400/20 transition-all duration-700">
             <item.icon className="w-16 h-16 text-mint-400/10 group-hover:text-mint-400/40 transition-all duration-1000" />
           </div>
           <div className="relative z-10">
              <span className="text-mint-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">{item.category}</span>
              <h4 className="text-3xl font-display text-white transition-transform duration-700">{item.title}</h4>
           </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const Services = () => (
  <section id="services" className="section-padding px-6">
    <div className="max-w-7xl mx-auto">
      <SectionTitle 
        title="Services" 
        subtitle="Professional design services to refine and elevate your visual identity."
      />
      <div className="grid md:grid-cols-3 gap-16 border-b border-white/5 pb-24">
        {[
          { 
            title: "Logo Design", 
            price: "1500",
            items: ["3 original concepts", "Primary & secondary versions", "Brand color guide"]
          },
          { 
            title: "Brand Identity", 
            price: "1500",
            items: ["Full visual identity", "Typography system", "Iconography library"]
          },
          { 
            title: "Analysis of Current", 
            price: "2000",
            items: ["UI/UX audit of current site", "Competitor structure mapping", "Clarity report"]
          }
        ].map((service, i) => (
          <div key={i} className="space-y-8">
            <div className="flex justify-between items-baseline underline decoration-white/5 underline-offset-8">
               <h3 className="text-lg font-bold text-white uppercase tracking-wider">{service.title}</h3>
               <span className="text-mint-400 font-mono text-sm">₹{service.price}</span>
            </div>
            <ul className="space-y-4 pt-4">
              {service.items.map(item => (
                <li key={item} className="flex gap-4 text-dim text-sm leading-tight">
                  <div className="w-1 h-1 bg-mint-400/40 mt-1.5 shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Pricing = () => (
  <section id="packages" className="section-padding px-6 bg-white/[0.005] border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <SectionTitle 
        centered
        title="Packages" 
        subtitle="Digital presence packages designed for different stages of business growth."
      />
      
      <div className="grid md:grid-cols-3 gap-12">
        {[
          { 
            name: "Beginner", 
            price: "5000+", 
            desc: "For startups needing a structured single-page presence.",
            features: ["Custom Landing Page", "Essential Identity", "Mobile Optimization", "Clarity Framework"]
          },
          { 
            name: "Intermediate", 
            price: "10000+", 
            isPopular: true,
            desc: "Full multi-page build for scaling business units.",
            features: ["5+ Custom Pages", "Advanced Lead Generation", "SEO Structured Build", "Content Strategy"]
          },
          { 
            name: "Professional", 
            price: "25000+", 
            desc: "High-level enterprise builds with complex logic.",
            features: ["Bespoke Logic Flows", "Complete Brand Evolution", "Performance Optimization", "Quarterly Maintenance"]
          }
        ].map((plan, i) => (
          <div key={i} className={`p-12 rounded-[2.5rem] glass-card border-white/5 flex flex-col relative ${plan.isPopular ? 'border-mint-400/20 bg-white/[0.02]' : ''}`}>
            {plan.isPopular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-mint-400 text-soft-black text-[9px] font-black uppercase tracking-[0.3em] rounded-full">Most Selected</span>}
            <h3 className="text-[10px] font-black text-mint-400 uppercase tracking-[0.4em] mb-6">{plan.name}</h3>
            <div className="flex items-baseline gap-2 mb-8">
               <span className="text-5xl font-light text-white tracking-tighter">₹{plan.price}</span>
            </div>
            <p className="text-dim text-sm mb-12 leading-relaxed h-[60px]">{plan.desc}</p>
            <div className="space-y-5 mb-12">
              {plan.features.map(f => (
                <div key={f} className="flex items-center gap-4 text-xs text-white/50">
                  <Check className="w-4 h-4 text-mint-400/40" />
                  {f}
                </div>
              ))}
            </div>
            <button className={`w-full py-5 text-[11px] font-bold uppercase tracking-[3px] rounded-full transition-all duration-500 ${plan.isPopular ? 'bg-mint-400 text-soft-black hover:shadow-[0_0_30px_rgba(163,230,53,0.2)]' : 'border border-white/10 text-white hover:bg-white/5'}`}>
               Reserve Slot
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const FAQ = () => {
  const [open, setOpen] = useState(0);
  const faqs = [
    { q: "What defines a 'structured' website?", a: "A structured website follows design systems that prioritize user psychology, clear communication hierarchy, and technical precision over random aesthetic choices." },
    { q: "How do AI employees assist the process?", a: "Aiko, Rafael, and others are specialized structural models that assist in layout mapping and data organization, allowing for 2x faster production without losing premium quality." },
    { q: "Is the branding included in website packages?", a: "Beginner packages include essential identity, while Intermediate and Professional tiers delve into deeper brand evolution." }
  ];

  return (
    <section className="section-padding px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Common Questions" subtitle="Clarity before collaboration." />
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card border-white/5 overflow-hidden rounded-[2rem]">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full p-8 md:p-10 flex justify-between items-center text-left">
                 <span className="text-base font-bold uppercase tracking-tight text-white/80">{faq.q}</span>
                 {open === i ? <Minus className="w-4 h-4 text-mint-400" /> : <Plus className="w-4 h-4 text-white/20" />}
              </button>
              {open === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="px-8 md:px-10 pb-8 md:pb-10 text-dim text-base leading-relaxed border-t border-white/5 pt-8"
                >
                  {faq.a}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Process = () => (
  <section id="process" className="section-padding px-6 relative border-t border-white/5 bg-soft-black">
    <div className="max-w-7xl mx-auto">
      <SectionTitle 
        centered
        title="Our Process" 
        subtitle="Predicable stages designed to move your project from ambiguity to calm digital presence."
      />
      
      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 mt-20">
        {[
          { step: "01", title: "Discovery", desc: "Audit of current business structure and goals." },
          { step: "02", title: "Synthesis", desc: "Selecting the AI employee and framework match." },
          { step: "03", title: "Building", desc: "Applying structural logic to custom visual design." },
          { step: "04", title: "Launch", desc: "Deployment and training for internal maintenance." }
        ].map((item, i) => (
          <div key={i} className="relative group p-10 bg-white/[0.01] rounded-3xl border border-white/5 hover:border-mint-400/20 transition-all duration-700">
            <div className="text-[10px] font-black text-mint-400 mb-8 tracking-[0.4em]">{item.step}</div>
            <h4 className="text-xl font-bold uppercase tracking-tight text-white mb-4">{item.title}</h4>
            <p className="text-[13px] text-dim leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Contact = () => (
  <section id="contact" className="section-padding px-6">
    <div className="max-w-7xl mx-auto glass-card rounded-[4rem] p-12 md:p-32 grid lg:grid-cols-2 gap-32">
      <div>
        <SectionTitle 
          title="Contact"
          subtitle="Ready to discuss your structure? Reach out for a consultation."
        />
        
        <div className="space-y-16 mt-20">
          <div className="flex gap-8">
             <div className="w-12 h-12 rounded-full border border-mint-400/20 flex items-center justify-center shrink-0">
               <Quote className="w-6 h-6 text-mint-400" />
             </div>
             <p className="text-white/60 font-sans text-lg leading-relaxed italic">"Structmint simplified our global rollout by providing a design logic we could actually scale. Professionalism at its peak." <br/><span className="text-white font-bold block mt-6 not-italic text-xs uppercase tracking-[0.3em]">— Studio-L Global</span></p>
          </div>
          
          <div className="space-y-8 pt-12 border-t border-white/5">
            <a href="tel:+919667115543" className="flex items-center gap-6 group">
               <div className="text-mint-400/40 group-hover:text-mint-400 transition-colors uppercase font-mono text-sm tracking-widest">+91 9667115543</div>
            </a>
            <a href="mailto:tenebrisadivi@gmail.com" className="flex items-center gap-6 group">
               <div className="text-mint-400/40 group-hover:text-mint-400 transition-colors uppercase font-mono text-sm tracking-widest">tenebrisadivi@gmail.com</div>
            </a>
          </div>
        </div>
      </div>
      
      <form className="space-y-8">
        <div className="space-y-10">
          <div className="space-y-4">
            <label className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/20 ml-2">Your Identity</label>
            <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-white/10 pb-6 focus:border-mint-400 transition-all outline-none text-xl lowercase tracking-tight text-white placeholder:text-white/5" />
          </div>
          <div className="space-y-4">
            <label className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/20 ml-2">Project Goal</label>
            <textarea rows={4} placeholder="Brief Description" className="w-full bg-transparent border-b border-white/10 pb-6 focus:border-mint-400 transition-all outline-none text-xl lowercase tracking-tight text-white placeholder:text-white/5"></textarea>
          </div>
        </div>
        <button className="w-full py-7 bg-white text-soft-black font-black uppercase tracking-[0.4em] text-[11px] rounded-full hover:bg-mint-400 transition-all duration-700">
           Submit Enquiry
        </button>
      </form>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="py-24 px-10 border-t border-white/5 bg-soft-black">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-24 mb-24">
        <div className="col-span-2">
           <div className="flex items-center gap-2 mb-8">
            <div className="w-3 h-3 bg-mint-400 rounded-sm"></div>
            <h2 className="font-display font-medium text-3xl tracking-tighter text-white">structmint</h2>
          </div>
          <p className="text-dim text-base max-w-sm leading-relaxed mb-12">
            Professional design studio creating structured digital environments for elite business growth.
          </p>
          <div className="flex gap-6">
             {['TW', 'LI', 'IG'].map(i => (
               <div key={i} className="text-[10px] font-bold text-white/20 hover:text-mint-400 transition-colors cursor-pointer uppercase tracking-widest">{i}</div>
             ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-10">Navigation</h4>
          <ul className="space-y-6 text-[11px] font-bold uppercase tracking-widest text-dim">
            <li><a href="#philosophy" className="hover:text-mint-400 transition-colors">Strategy</a></li>
            <li><a href="#systems" className="hover:text-mint-400 transition-colors">Systems</a></li>
            <li><a href="#expertise" className="hover:text-mint-400 transition-colors">Expertise</a></li>
            <li><a href="#packages" className="hover:text-mint-400 transition-colors">Packages</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-10">Contact</h4>
          <ul className="space-y-6 text-[11px] font-bold uppercase tracking-widest text-dim">
            <li>+91 9667115543</li>
            <li>tenebrisadivi@gmail.com</li>
            <li>New Delhi, IN</li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/5 gap-8">
        <div className="text-white/20 text-[9px] font-mono uppercase tracking-[0.4em] text-center md:text-left">
           Structural Logic // Nature Centric // AI Assisted Speed
        </div>
        <p className="text-white/40 text-[9px] font-mono uppercase tracking-[0.4em]">© 2026 Structmint Studio. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
