import React from "react";
import { ArrowRight } from "lucide-react";

interface ShalimarOneWorldProps {
  onOpenEnquiry: () => void;
}

export default function ShalimarOneWorld({ onOpenEnquiry }: ShalimarOneWorldProps) {
  return (
    <section id="oneworld-advantage" className="w-full py-16 md:py-24 bg-[#f4f3ee] text-[#050505] overflow-hidden border-t border-[#050505]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content Left */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="font-body text-xs font-bold text-[#050505] uppercase tracking-[0.25em] block">
              Shalimar OneWorld Advantage
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-4xl text-[#050505] font-bold leading-tight">
              Live Within Shalimar OneWorld
            </h2>
            <div className="h-[2px] w-16 bg-[#050505]" />

            <div className="space-y-4 pt-2">
              <p className="font-body text-base md:text-lg text-[#050505] font-medium leading-relaxed">
                Valencia Towers gives you the advantage of living inside an established premium township in Lucknow.
              </p>
              <p className="font-body text-sm md:text-base text-[#333333] leading-relaxed">
                Enjoy a residential environment designed around space, convenience and lifestyle infrastructure, while staying connected to the important parts of the city.
              </p>
            </div>

            {/* Price Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-3 bg-[#050505] text-white py-4 px-6 rounded-lg shadow-lg border border-[#d4af37]/30 max-w-fit">
                <div>
                  <span className="block font-body text-[10px] uppercase tracking-widest text-[#d4af37] font-extrabold">
                    Pricing Details
                  </span>
                  <span className="font-display text-2xl font-bold text-white leading-tight whitespace-nowrap">
                    Starting from ₹2.8 Cr*
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center gap-2 bg-[#050505] text-white font-body text-xs font-bold tracking-widest uppercase px-8 py-4 hover:bg-[#d4af37] hover:text-[#050505] transition-all shadow-lg rounded-sm cursor-pointer"
              >
                Get Price List & Floor Plans
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-5 relative">
            <div className="relative shadow-2xl rounded-xl overflow-hidden bg-white p-2.5 border border-[#050505]/10">
              <img
                src="/4.webp"
                alt="Shalimar OneWorld Lucknow Township"
                className="w-full aspect-[4/5] object-cover rounded-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
