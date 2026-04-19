/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, FloatingParticles } from "./components/Common";
import { 
  Hero, 
  Philosophy, 
  DesignSystems, 
  SelectedWork, 
  Services, 
  Pricing,
  FAQ,
  Process, 
  Contact, 
  Footer 
} from "./components/Sections";

export default function App() {
  return (
    <div className="relative selection:bg-mint-400 selection:text-soft-black">
      <FloatingParticles />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Philosophy />
        <DesignSystems />
        <SelectedWork />
        <Services />
        <Pricing />
        <FAQ />
        <Process />
        <Contact />
      </main>

      <Footer />

      {/* Subtle Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
}
