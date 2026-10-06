import React from "react";

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export default function Footer({ onOpenPrivacy, onOpenTerms }: FooterProps = {}) {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#050505] text-white/80 border-t border-[#d4af37]/20 py-16 relative overflow-hidden font-body">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.04),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-12">
          
          {/* Left Column: Brand Logo & Address */}
          <div className="md:col-span-5 space-y-4 text-left">
            <img
              src="/logo.webp"
              alt="Valencia Towers Logo"
              className="h-12 md:h-14 w-auto object-contain"
            />
            <div className="space-y-1.5 text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm">
              <p className="text-[#d4af37] font-semibold">Phase 2 • Shalimar OneWorld</p>
              <p>📍 Shalimar OneWorld, Lucknow, Uttar Pradesh</p>
              <p className="italic text-[#e6c878] pt-1">Spacious 4 BHK Residences starting from ₹2.8 Cr*</p>
            </div>
          </div>

          {/* Middle Column: Navigation */}
          <div className="md:col-span-3 space-y-4 text-left">
            <span className="font-body text-[10px] font-bold text-[#d4af37] uppercase tracking-[0.2em] block">
              Quick Links
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-white/70">
              {[
                { label: "Overview", id: "overview" },
                { label: "Why Valencia", id: "why-valencia" },
                { label: "Privacy & Exclusivity", id: "privacy-exclusivity" },
                { label: "Shalimar OneWorld", id: "oneworld-advantage" },
                { label: "Location Advantage", id: "location-advantage" },
                { label: "Project Highlights", id: "project-highlights" },
                { label: "Site Visit", id: "site-visit" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className="hover:text-[#d4af37] transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: CTA */}
          <div className="md:col-span-4 space-y-6 text-left">
            <h3 className="font-display text-xl sm:text-2xl text-white font-medium leading-snug">
              Experience spacious living at <br />
              <span className="italic text-[#d4af37]">Valencia Towers Phase 2.</span>
            </h3>

            <div className="pt-2">
              <button
                onClick={() => handleScrollTo("lead-capture-section")}
                className="border border-[#d4af37] text-[#d4af37] font-body text-[10px] font-bold tracking-widest uppercase px-6 py-3.5 hover:bg-[#d4af37] hover:text-[#050505] transition-all rounded-sm cursor-pointer"
              >
                Schedule Site Visit
              </button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] bg-white/10 w-full mb-8" />

        {/* Legal & Compliance bottom section */}
        <div className="space-y-6 text-xs text-white/60 leading-relaxed text-left">
          {/* RERA Information Card */}
          <div className="p-4 rounded-md bg-white/[0.03] border border-[#d4af37]/30 max-w-4xl space-y-2">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-body">
              <div>
                <span className="text-[#d4af37] font-semibold">Project RERA No.: </span>
                <span className="text-white font-medium">UPRERAPRJ944626/09/2024</span>
              </div>
              <div className="hidden sm:block text-white/30">•</div>
              <div>
                <span className="text-[#d4af37] font-semibold">Promoter RERA No.: </span>
                <span className="text-white font-medium">UPRERAPRJ10815</span>
              </div>
              <div className="hidden sm:block text-white/30">•</div>
              <div>
                <span className="text-[#d4af37] font-semibold">Launch Date: </span>
                <span className="text-white font-medium">28 September 2024</span>
              </div>
            </div>
            <div className="text-[11px] text-white/60">
              <span>Official RERA Website: </span>
              <a
                href="https://www.up-rera.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4af37] underline hover:text-white transition-colors ml-1 font-medium"
              >
                www.up-rera.in
              </a>
            </div>
          </div>

          <p className="max-w-4xl text-[10px] text-white/50">
            *Prices starting from ₹2.8 Cr onwards. Govt taxes & registration additional. Visuals, renders, and floor plan dimensions are artistic impressions and subject to change by the developer. All rights reserved.
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-white/5 text-[11px]">
            <div>
              <p>© {new Date().getFullYear()} Shalimar OneWorld Valencia Towers Phase 2, Lucknow. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={(e) => { e.preventDefault(); onOpenPrivacy?.(); }}
                className="hover:text-[#d4af37] underline cursor-pointer focus:outline-none"
              >
                Privacy Policy
              </button>
              <span>|</span>
              <button 
                onClick={(e) => { e.preventDefault(); onOpenTerms?.(); }}
                className="hover:text-[#d4af37] underline cursor-pointer focus:outline-none"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
