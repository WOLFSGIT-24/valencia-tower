import React, { useState, useEffect } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface WhyValenciaProps {
  onOpenEnquiry: () => void;
}

export default function WhyValencia({ onOpenEnquiry }: WhyValenciaProps) {
  const images = ["/2.webp", "/3.webp", "/4.webp"];
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  const bulletPoints = [
    "Premium 4 BHK residences",
    "Spacious private balconies",
    "Large living and dining areas",
    "Designed for openness and comfortable family living",
    "Located within Shalimar OneWorld",
  ];

  const renderSlider = () => (
    <div className="relative overflow-hidden rounded-xl shadow-2xl w-full max-w-2xl aspect-[4/3] border border-[#050505]/10">
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt={`Valencia Towers View ${idx + 1}`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-1000 ease-in-out ${
            idx === currentIdx ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section id="why-valencia" className="w-full py-16 md:py-24 bg-[#f4f3ee] text-[#050505] overflow-hidden border-t border-[#050505]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content Left */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="font-body text-xs font-bold text-[#050505] uppercase tracking-[0.25em] block">
              Why Valencia Towers?
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-4xl text-[#050505] font-bold leading-tight">
              A 4 BHK That Actually Feels Spacious
            </h2>
            <div className="h-[2px] w-16 bg-[#050505]" />

            <p className="font-body text-base text-[#333333] leading-relaxed pt-2">
              Valencia Towers Phase 2 is designed around larger living spaces, private balconies and greater privacy.
            </p>

            {/* Mobile Only Image Slider */}
            <div className="lg:hidden w-full my-6">
              {renderSlider()}
            </div>

            {/* Bullet Points */}
            <ul className="space-y-3.5 pt-2">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-[#050505]/10 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 text-[#050505] shrink-0 mt-0.5" />
                  <span className="font-body text-sm md:text-base text-[#050505] font-medium">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-6">
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center gap-2 bg-[#050505] text-white font-body text-xs font-bold tracking-widest uppercase px-8 py-4 hover:bg-[#d4af37] hover:text-[#050505] transition-all shadow-lg rounded-sm cursor-pointer"
              >
                View Floor Plans
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Slider Right (Desktop) */}
          <div className="hidden lg:block lg:col-span-6 relative flex justify-center">
            <div className="absolute inset-0 bg-[#050505]/5 rounded-2xl transform rotate-2 translate-x-3 translate-y-3 scale-98 pointer-events-none border border-[#050505]/10" />
            {renderSlider()}
          </div>

        </div>
      </div>
    </section>
  );
}
