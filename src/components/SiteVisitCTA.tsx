import React from "react";
import { Calendar, ArrowRight } from "lucide-react";

interface SiteVisitCTAProps {
  onOpenBooking: () => void;
}

export default function SiteVisitCTA({ onOpenBooking }: SiteVisitCTAProps) {
  return (
    <section id="site-visit" className="w-full py-16 md:py-24 bg-[#f4f3ee] text-[#050505] relative overflow-hidden border-t border-[#050505]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-[#050505] text-white rounded-2xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden border border-[#d4af37]/30">
          
          {/* Visual Background Image Layer */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <img
              src="/7.webp"
              alt="Valencia Towers Site Visit Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Subtle background gold glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.15),transparent_70%)] pointer-events-none z-0" />

          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <span className="font-body text-xs font-bold text-[#d4af37] uppercase tracking-[0.25em] block">
              Final CTA / Site Visit
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-bold leading-tight">
              See the Space Before You Decide
            </h2>

            <div className="h-[2px] w-16 bg-[#d4af37] mx-auto" />

            <div className="space-y-4 pt-2">
              <p className="font-body text-base sm:text-lg text-white/90 leading-relaxed">
                Floor plans can tell you the numbers, but a spacious 4 BHK is best understood when you experience the layout yourself.
              </p>
              <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
                Schedule a visit to explore Valencia Towers Phase 2, check current availability and understand the latest pricing and payment details.
              </p>
            </div>

            {/* Location & Pricing Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/15">
                <span className="text-base">📍</span>
                <span className="font-body text-sm font-semibold text-white">
                  Shalimar OneWorld, Lucknow
                </span>
              </div>

              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/15">
                <span className="text-base">💰</span>
                <span className="font-body text-sm font-semibold text-[#d4af37]">
                  4 BHK Residences from ₹2.8 Cr*
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-3 bg-[#d4af37] text-[#050505] font-body text-xs font-extrabold tracking-widest uppercase px-10 py-5 hover:bg-white transition-all transform hover:-translate-y-0.5 shadow-2xl rounded-sm cursor-pointer"
              >
                <Calendar className="h-4 w-4" />
                Schedule a Site Visit
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
