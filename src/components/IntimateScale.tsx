import React, { useState, useEffect } from "react";
import { ShieldAlert, Compass, Sparkles, Building2 } from "lucide-react";

interface IntimateScaleProps {
  onRequestDownload?: () => void;
}

export default function IntimateScale({ onRequestDownload }: IntimateScaleProps) {
  const images = ["/building.png", "/balcony.png", "/building2.jpg", "/building3.jpg", "/building4.jpg"];
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const renderSlider = () => (
    <div className="relative overflow-hidden rounded-xl shadow-2xl w-full max-w-2xl aspect-[3/2]">
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt={`Valencia Towers Boutique View ${idx + 1}`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-1000 ease-in-out ${
            idx === currentIdx ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section className="w-full py-12 md:py-16 bg-marble overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Informational left section */}
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <span className="font-body text-xs font-bold text-navy-primary uppercase tracking-[0.25em] block">
              The Intimate Scale
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy-primary font-semibold leading-tight">
              Boutique Living. Thoughtfully Designed.
            </h2>
            <div className="h-[2px] w-16 bg-navy-primary mx-auto lg:mx-0" />

            {/* Mobile Only Responsive Image Slider */}
            <div className="lg:hidden w-full my-4">
              {renderSlider()}
            </div>

            <p className="font-body text-sm md:text-base text-gray-text leading-relaxed pt-2">
              Luxury isn't measured by the number of amenities. It's reflected in planning, privacy and attention to detail. Valencia Towers Phase 2 offers a boutique living experience with exclusive residences, ensuring a quieter, more exclusive community.
            </p>


            
            {/* CTA Button */}
            <div className="pt-6">
              {/* <button 
                onClick={onRequestDownload}
                className="inline-flex items-center gap-2 bg-transparent border border-navy-primary text-navy-primary font-body text-xs font-bold tracking-widest uppercase px-6 py-3.5 hover:bg-navy-primary hover:text-white transition-colors w-full sm:w-auto justify-center rounded-sm cursor-pointer"
              >
                Download Floor Plans
              </button> */}
            </div>
          </div>

          {/* Graphical Right Panel with Hover Depth Effect (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-7 relative flex justify-center">
            {/* Elegant Background Framing */}
            <div className="absolute inset-0 bg-champagne/25 rounded-2xl transform rotate-2 translate-x-2 translate-y-2 scale-98" />
            
            {renderSlider()}
          </div>

        </div>
      </div>
    </section>
  );
}
