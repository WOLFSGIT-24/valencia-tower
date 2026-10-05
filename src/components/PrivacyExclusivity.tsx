import React from "react";
import { Shield, ArrowRight } from "lucide-react";

interface PrivacyExclusivityProps {
  onOpenEnquiry: () => void;
}

export default function PrivacyExclusivity({ onOpenEnquiry }: PrivacyExclusivityProps) {
  const points = [
    "Only 4 residences per floor",
    "Corner-home planning",
    "Greater privacy between residences",
    "Spacious private balconies",
    "Large-format 4 BHK living",
  ];

  return (
    <section id="privacy-exclusivity" className="w-full py-16 md:py-24 bg-[#050505] text-[#f5f5f5] relative overflow-hidden border-t border-[#d4af37]/15">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Left */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative shadow-2xl rounded-xl overflow-hidden border border-[#d4af37]/30 bg-[#141414]">
              <img
                src="/3.webp"
                alt="Privacy & Exclusivity at Valencia Towers"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#141414]/90 backdrop-blur-md rounded-lg border border-[#d4af37]/30 text-center">
                <span className="font-display text-lg font-bold text-[#d4af37] block">
                  Only 4 Corner Residences Per Floor
                </span>
                <span className="font-body text-xs text-[#b3b3b3] mt-0.5 block">
                  Maximum Light, Ventilation & Acoustic Separation
                </span>
              </div>
            </div>
          </div>

          {/* Content Right */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 text-left">
            <span className="font-body text-xs font-bold text-[#d4af37] uppercase tracking-[0.25em] block">
              Privacy & Exclusivity
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-4xl text-[#f5f5f5] font-bold leading-tight">
              More Space, With Fewer Homes Around You
            </h2>
            <div className="h-[2px] w-16 bg-gradient-to-r from-[#b8860b] to-[#d4af37]" />

            <p className="font-body text-base text-[#b3b3b3] leading-relaxed pt-2">
              With only 4 corner residences on each floor, Valencia Towers is designed for buyers who value privacy along with spacious living.
            </p>

            {/* Feature Cards Grid */}
            <div className="space-y-3 pt-2">
              {points.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 p-4 bg-[#141414] rounded-lg border border-white/10 hover:border-[#d4af37]/40 transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37] shrink-0">
                    <Shield className="h-4 w-4" />
                  </div>
                  <span className="font-body text-sm md:text-base font-semibold text-[#f5f5f5]">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e6c878] text-[#050505] font-body text-xs font-extrabold tracking-widest uppercase px-8 py-4 hover:opacity-95 transition-all shadow-lg rounded-sm cursor-pointer"
              >
                Explore Available Residences
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
