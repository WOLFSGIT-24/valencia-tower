import React, { useState, useEffect } from "react";
import { MapPin, Navigation, ArrowRight } from "lucide-react";

interface LocationAdvantageProps {
  onOpenEnquiry: () => void;
}

export default function LocationAdvantage({ onOpenEnquiry }: LocationAdvantageProps) {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadMap(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const locationPoints = [
    "Minutes from Phoenix Palassio",
    "Close to Lulu Mall",
    "Easy access to Medanta Hospital",
    "Near Ekana Stadium",
    "Well connected to Lucknow Airport",
  ];

  const renderMap = () => {
    if (!loadMap) {
      return (
        <div className="w-full h-full bg-[#f2ebd9]/45 animate-pulse flex items-center justify-center">
          <span className="text-xs text-[#050505]/60 font-body uppercase tracking-wider font-semibold">
            Loading Map Context...
          </span>
        </div>
      );
    }
    return (
      <iframe
        src="https://maps.google.com/maps?q=Shalimar%20OneWorld%2C%20Lucknow&t=&z=14&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Valencia Towers Shalimar OneWorld Lucknow Google Map"
        className="w-full h-full min-h-[360px]"
      />
    );
  };

  return (
    <section id="location-advantage" className="w-full py-16 md:py-24 bg-[#f4f3ee] text-[#050505] border-t border-[#050505]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content Left */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="font-body text-xs font-bold text-[#050505] uppercase tracking-[0.25em] block">
              Location Advantage
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-4xl text-[#050505] font-bold leading-tight">
              Connected to Key Destinations in Lucknow
            </h2>
            <div className="h-[2px] w-16 bg-[#050505]" />

            {/* Mobile Only Map */}
            <div className="lg:hidden w-full h-[300px] rounded-xl overflow-hidden shadow-xl border border-[#050505]/10 my-4">
              {renderMap()}
            </div>

            {/* Location points list */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#050505] uppercase tracking-wider mb-3">
                <Navigation className="h-4 w-4 text-[#050505] animate-pulse" />
                <span>Key Connectivity Destinations</span>
              </div>

              {locationPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3.5 p-4 bg-white rounded-lg shadow-sm border border-[#050505]/10 hover:border-[#050505]/30 transition-all"
                >
                  <div className="w-9 h-9 rounded-full bg-[#050505]/5 flex items-center justify-center text-[#050505] shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="font-body text-sm md:text-base font-semibold text-[#050505]">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center gap-2 bg-[#050505] text-white font-body text-xs font-bold tracking-widest uppercase px-8 py-4 hover:bg-[#d4af37] hover:text-[#050505] transition-all shadow-lg rounded-sm cursor-pointer"
              >
                Get Location Details
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Desktop Map Right */}
          <div className="hidden lg:block lg:col-span-6 rounded-xl shadow-2xl overflow-hidden border border-[#050505]/10 w-full h-[540px]">
            {renderMap()}
          </div>

        </div>
      </div>
    </section>
  );
}
