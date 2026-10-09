import React, { useState } from "react";
import { ArrowRight, X, Maximize2 } from "lucide-react";

interface LandmarkLuxuryProps {
  onOpenEnquiry: () => void;
}

export default function LandmarkLuxury({ onOpenEnquiry }: LandmarkLuxuryProps) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  return (
    <section id="landmark-luxury" className="w-full py-16 md:py-24 bg-[#050505] text-white relative overflow-hidden">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06),transparent_70%)] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center bg-[#d4af37]/10 border border-[#d4af37]/30 px-4 py-1.5 rounded-full">
            <span className="font-body text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase">
              Shalimar OneWorld
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            A Landmark of Luxury Living in Lucknow
          </h2>

          <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto my-3" />

          <p className="font-body text-sm md:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
            Explore the architectural elegance of Shalimar OneWorld, a premium residential destination in Gomti Nagar Extension.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Valencia Towers Card */}
          <div className="bg-[#111111] rounded-xl border border-[#d4af37]/30 overflow-hidden shadow-2xl flex flex-col group hover:border-[#d4af37] transition-all duration-500">
            {/* Image Container displaying full poster clearly */}
            <div 
              onClick={() => setSelectedImage({ src: "/valencia-poster1.webp", title: "Valencia Towers Phase 2" })}
              className="relative w-full bg-[#0a0a0a] p-3 sm:p-4 flex items-center justify-center cursor-pointer group/img"
            >
              <img
                src="/valencia-poster1.webp"
                alt="Valencia Towers Phase 2 Poster"
                loading="lazy"
                className="w-full h-auto max-h-[550px] object-contain rounded-lg shadow-lg group-hover/img:scale-[1.01] transition-transform duration-500"
              />
              <div className="absolute top-6 left-6 bg-[#050505]/90 backdrop-blur-md border border-[#d4af37]/50 text-[#d4af37] px-3.5 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase shadow-md">
                Featured Phase
              </div>
              <button 
                className="absolute top-6 right-6 bg-[#050505]/80 text-white p-2 rounded-full border border-white/20 opacity-0 group-hover/img:opacity-100 transition-opacity"
                aria-label="Enlarge image"
              >
                <Maximize2 className="h-4 w-4 text-[#d4af37]" />
              </button>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4 border-t border-white/10">
              <div className="space-y-3">
                <div className="text-[#d4af37] font-body text-xs font-bold tracking-widest uppercase">
                  <span>Valencia Towers Phase 2</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-white font-semibold">
                  Exclusive 4 BHK Residences
                </h3>
                <p className="font-body text-sm text-white/70 leading-relaxed">
                  Exclusive 4 BHK residences designed for spacious and refined living. Experience large-format floor plans, private balconies, and 26+ curated lifestyle amenities.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] text-[#d4af37] font-bold uppercase tracking-wider block">Configuration</span>
                  <span className="text-xs text-white font-semibold block">4 BHK + SQ Apartments</span>
                </div>
                <button
                  onClick={onOpenEnquiry}
                  className="inline-flex items-center gap-2 bg-[#d4af37] text-[#050505] font-body text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-sm hover:bg-white transition-colors cursor-pointer shadow-lg"
                >
                  Explore Valencia Towers
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Marbella Card */}
          <div className="bg-[#111111] rounded-xl border border-[#d4af37]/30 overflow-hidden shadow-2xl flex flex-col group hover:border-[#d4af37] transition-all duration-500">
            {/* Image Container displaying full poster clearly */}
            <div 
              onClick={() => setSelectedImage({ src: "/marbella.webp", title: "Marbella - 33 Storeys" })}
              className="relative w-full bg-[#0a0a0a] p-3 sm:p-4 flex items-center justify-center cursor-pointer group/img"
            >
              <img
                src="/marbella.webp"
                alt="Marbella Shalimar OneWorld Poster"
                loading="lazy"
                className="w-full h-auto max-h-[550px] object-contain rounded-lg shadow-lg group-hover/img:scale-[1.01] transition-transform duration-500"
              />
              <div className="absolute top-6 left-6 bg-[#050505]/90 backdrop-blur-md border border-[#d4af37]/50 text-[#d4af37] px-3.5 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase shadow-md">
                Iconic Living
              </div>
              <button 
                className="absolute top-6 right-6 bg-[#050505]/80 text-white p-2 rounded-full border border-white/20 opacity-0 group-hover/img:opacity-100 transition-opacity"
                aria-label="Enlarge image"
              >
                <Maximize2 className="h-4 w-4 text-[#d4af37]" />
              </button>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4 border-t border-white/10">
              <div className="space-y-3">
                <div className="text-[#d4af37] font-body text-xs font-bold tracking-widest uppercase">
                  <span>Marbella</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-white font-semibold">
                  33-Storey Architectural Marvel
                </h3>
                <p className="font-body text-sm text-white/70 leading-relaxed">
                  Four iconic 33-storey towers showcasing architectural grandeur and luxury. A celebration of the self-made in Lucknow’s finest township.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] text-[#d4af37] font-bold uppercase tracking-wider block">Structure</span>
                  <span className="text-xs text-white font-semibold block">4 Towers | 33 Storeys</span>
                </div>
                <button
                  onClick={onOpenEnquiry}
                  className="inline-flex items-center gap-2 bg-transparent border border-[#d4af37] text-[#d4af37] font-body text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-sm hover:bg-[#d4af37] hover:text-[#050505] transition-colors cursor-pointer shadow-lg"
                >
                  Enquire Now
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* High-Res Image Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[85vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-[#d4af37]/30"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-3 text-center">
              <span className="font-display text-sm font-semibold text-[#d4af37]">
                {selectedImage.title}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
