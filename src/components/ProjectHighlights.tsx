import React from "react";
import { Star, CheckCircle } from "lucide-react";

interface ProjectHighlightsProps {
  onOpenEnquiry: () => void;
}

export default function ProjectHighlights({ onOpenEnquiry }: ProjectHighlightsProps) {
  const highlights = [
    "Premium 4 BHK residences",
    "Only 4 corner residences per floor",
    "Spacious private balconies",
    "Designed for privacy and openness",
    "Located within Shalimar OneWorld",
    "Premium residential address in Lucknow",
    "Starting from ₹2.8 Cr*",
  ];

  return (
    <section id="project-highlights" className="w-full py-16 md:py-24 bg-[#0a0a0a] text-[#f5f5f5] relative overflow-hidden border-t border-[#d4af37]/15">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,175,55,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="font-body text-xs font-bold text-[#d4af37] uppercase tracking-[0.25em] block">
            Project Highlights
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-4xl text-[#f5f5f5] font-bold leading-tight">
            Everything That Makes Valencia Towers Stand Out
          </h2>
          <div className="h-[2px] w-16 bg-gradient-to-r from-[#b8860b] to-[#d4af37] mx-auto" />
        </div>

        {/* Feature Image Callout Banner */}
        <div className="max-w-5xl mx-auto mb-10 rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl relative h-[240px] sm:h-[320px]">
          <img
            src="/6.webp"
            alt="Valencia Towers Architectural Standout View"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent flex items-end p-6 sm:p-8">
            <p className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide">
              Designed for Unmatched Space & Sophistication
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => {
            const isPriceTag = item.includes("Starting from");
            return (
              <div
                key={index}
                className={`p-6 rounded-xl border transition-all duration-300 flex items-start gap-4 ${
                  isPriceTag
                    ? "bg-[#141414] text-white border-[#d4af37]/50 shadow-2xl md:col-span-2 lg:col-span-3 justify-center text-center"
                    : "bg-[#141414] border-white/10 hover:border-[#d4af37]/40 text-left"
                }`}
              >
                {isPriceTag ? (
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full py-2">
                    <div>
                      <span className="font-body text-xs uppercase tracking-widest text-[#d4af37] block font-extrabold">
                        Pricing Detail
                      </span>
                      <span className="font-display text-2xl sm:text-3xl font-bold text-[#f5f5f5] whitespace-nowrap">
                        {item}
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="w-9 h-9 rounded-full bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-body text-base font-semibold text-[#f5f5f5] leading-snug block pt-1">
                        {item}
                      </span>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-12">
          <button
            onClick={onOpenEnquiry}
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e6c878] text-[#050505] font-body text-xs font-extrabold tracking-widest uppercase px-8 py-4.5 hover:opacity-95 transition-all shadow-lg rounded-sm cursor-pointer"
          >
            Get Price List & Floor Plans
          </button>
        </div>
      </div>
    </section>
  );
}
