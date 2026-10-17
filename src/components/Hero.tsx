import React from "react";
import { ArrowRight, MapPin } from "lucide-react";

interface HeroProps {
  onOpenEnquiry: () => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  return (
    <section
      id="overview"
      className="relative w-full min-h-0 lg:min-h-screen pt-[72px] sm:pt-[80px] bg-[#f4f3ee] text-[#050505] flex items-center overflow-hidden"
    >
      {/* RERA QR Code Badge - Top Right Corner */}
      <div className="absolute top-24 right-4 md:right-12 z-30 bg-white p-2 sm:p-2.5 rounded-lg shadow-xl border border-[#d4af37]/40 text-center flex flex-col items-center group hover:scale-105 transition-transform duration-300">
        <img
          src="/rera-qr.jpg"
          alt="UP RERA QR Code"
          className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-md"
        />
        <span className="text-[9px] font-bold text-[#050505] tracking-wider uppercase mt-1">
          Scan RERA QR
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-0 md:px-12 w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-6 lg:py-20 relative z-10">
        {/* Left Side: Primary Image */}
        <div className="w-full lg:w-1/2 relative mb-4 lg:mb-0">
          <div className="relative shadow-2xl bg-white p-2.5 sm:p-3 z-10 rounded-sm border border-[#050505]/10">
            <img
              src="/1.webp"
              alt="Valencia Towers Phase 2 Hero View"
              fetchPriority="high"
              className="w-full h-[54vh] sm:h-auto sm:aspect-[4/5] object-cover object-center rounded-sm"
            />
            {/* Pricing Box (Mobile overlay) */}
            <div className="lg:hidden absolute bottom-0 translate-y-[65%] left-1/2 -translate-x-1/2 w-[92%] max-w-[340px] bg-[#050505] text-white py-3.5 px-5 shadow-2xl z-20 rounded-sm border border-[#d4af37]/30 text-center">
              <div className="font-body text-[10px] font-bold tracking-wider text-[#d4af37] uppercase">
                Starting from
              </div>
              <div className="text-xl sm:text-2xl text-white font-bold font-display leading-tight mt-0.5 whitespace-nowrap">
                Starting from ₹2.8 Cr*
              </div>
            </div>
          </div>

          <div className="lg:hidden mt-16 mx-4 p-4 bg-white rounded-lg border border-[#050505]/10 shadow-lg flex items-center justify-between text-left">
            <div className="space-y-1 pr-2">
              <div className="text-[12px] font-extrabold text-[#050505] uppercase tracking-wider font-body">
                Valencia Towers Phase 2
              </div>
              <div className="text-[16px] font-extrabold text-[#050505] uppercase tracking-tight font-body leading-none py-0.5 whitespace-nowrap">
                Starting from ₹2.8 Cr*
              </div>
            </div>

            <div className="h-8 w-[1px] bg-[#050505]/20 mx-4" />

            <div className="flex items-center gap-1.5 font-body shrink-0">
              <MapPin className="h-4 w-4 text-[#050505] shrink-0" />
              <span className="text-[14px] font-bold text-[#050505]/80 uppercase tracking-widest">
                Lucknow
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left relative z-20 px-6 md:px-0">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <div className="inline-block bg-[#050505]/5 border border-[#050505]/15 px-3.5 py-1.5 rounded-full">
              <span className="font-body text-xs font-bold tracking-widest text-[#050505] uppercase">
                Valencia Towers Phase 2
              </span>
            </div>
            <div className="inline-block bg-[#d4af37]/15 border border-[#d4af37]/40 px-3.5 py-1.5 rounded-full">
              <span className="font-body text-[11px] font-bold tracking-wider text-[#050505]">
                RERA: UPRERAPRJ944626/09/2024
              </span>
            </div>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#050505] font-bold tracking-tight leading-[1.15] mb-4 animate-fade-in">
            Spacious 4 BHK Residences at Shalimar OneWorld, Lucknow
          </h1>

          <p className="font-body text-base lg:text-lg text-[#333333] mb-6 animate-fade-in delay-100 leading-relaxed max-w-xl">
            Large-format 4 BHK homes designed for more space, privacy and comfortable family living.
          </p>

          {/* Pricing Box (Desktop) */}
          <div className="hidden lg:block mt-2 bg-[#050505] text-white py-4 px-6 relative transform hover:-translate-y-1 transition-transform duration-300 w-auto max-w-fit shadow-2xl animate-slide-up delay-300 mb-8 rounded-sm border border-[#d4af37]/30">
            <div className="text-[10px] text-[#d4af37] uppercase tracking-widest font-extrabold mb-0.5">
              Pricing Details
            </div>
            <div className="font-display text-2xl sm:text-3xl font-bold mb-1 text-white leading-tight whitespace-nowrap">
              Starting from ₹2.8 Cr*
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-400 w-full sm:w-auto relative z-30">
            <button
              onClick={onOpenEnquiry}
              className="flex items-center justify-center gap-2 bg-[#050505] text-white font-body text-xs font-bold tracking-widest uppercase px-8 py-4.5 hover:bg-[#d4af37] hover:text-[#050505] transition-all shadow-lg w-full sm:w-auto rounded-sm cursor-pointer"
            >
              Get Price List & Floor Plans
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Secondary Tilted Image (Bottom Right) */}
          <div className="hidden xl:block absolute -right-20 -bottom-16 w-56 h-64 transform rotate-6 shadow-2xl bg-white p-2.5 z-10 hover:rotate-2 transition-transform duration-700 pointer-events-none rounded-sm border border-[#050505]/10">
            <img
              src="/2.webp"
              alt="Valencia Towers exterior detail"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
