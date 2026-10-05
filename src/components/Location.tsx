import React, { useState, useEffect } from "react";
import { MapPin, Car, Train, Navigation, Info } from "lucide-react";
import { locationsData, projectSnapshot } from "../data";
import { CommuteDestination } from "../types";

type CommuteMode = "driving" | "transit" | "walking";

interface LocationProps {
  onOpenEnquiry: () => void;
}

export default function Location({ onOpenEnquiry }: LocationProps) {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadMap(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const renderMap = () => {
    if (!loadMap) {
      return (
        <div className="w-full h-full bg-[#f2ebd9]/45 animate-pulse flex items-center justify-center">
          <span className="text-xs text-navy-primary/60 font-body uppercase tracking-wider font-semibold">Loading Map Context...</span>
        </div>
      );
    }
    return (
      <iframe
        src="https://maps.google.com/maps?q=Hennur%2C%20Bengaluru&t=&z=14&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Valencia Towers Google Map"
        className="w-full h-full"
      ></iframe>
    );
  };

  return (
    <section id="location" className="w-full py-12 md:py-16 bg-marble text-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Informational Connectivity details */}
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <span className="font-body text-xs font-bold text-navy-primary uppercase tracking-[0.25em] block">
              Prime Location
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy-primary font-semibold leading-tight">
              Everything That Matters. In One Address.
            </h2>
            <div className="h-[2px] w-16 bg-navy-primary mx-auto lg:mx-0 mb-6" />

            {/* Mobile Only Google Map */}
            <div className="lg:hidden w-full h-[300px] sm:h-[380px] rounded-xl overflow-hidden shadow-xl border border-navy-primary/10 my-4">
              {renderMap()}
            </div>



            {/* Destination Hub List with Driving Times */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-navy-primary uppercase tracking-wider mb-2">
                <Navigation className="h-3.5 w-3.5 text-bronze animate-pulse" />
                <span>Estimated Commute Times</span>
              </div>

              {locationsData.map((dest: CommuteDestination) => {
                const duration = dest.times.driving;
                return (
                  <div
                    key={dest.id}
                    className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-navy-primary/5 hover:border-gold/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-navy-primary/5 flex items-center justify-center text-navy-primary">
                        <span className="material-symbols-outlined text-[20px] text-navy-primary">
                          {dest.icon}
                        </span>
                      </div>
                      <div>
                        <span className="block font-body text-sm font-semibold text-navy-primary">
                          {dest.name}
                        </span>
                        <span className="text-[10px] font-semibold text-gray-text/70 uppercase">
                          Distance: {dest.distance}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-display text-2xl font-bold text-navy-primary block">
                        {duration}
                      </span>
                      <span className="text-[10px] text-gray-text font-bold uppercase tracking-wider -mt-1 block">
                        Minutes
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>


            
            {/* CTA Button */}
            <div className="pt-2">
              <button 
                onClick={onOpenEnquiry}
                className="bg-navy-dark text-white font-body text-xs font-bold tracking-widest uppercase px-8 py-4.5 hover:bg-navy-primary transition-colors shadow-lg rounded-sm"
              >
                Explore Location Advantages
              </button>
            </div>


          </div>

          {/* Desktop Only Google Map */}
          <div className="hidden lg:block lg:col-span-7 rounded-xl shadow-2xl overflow-hidden border border-navy-primary/10 w-full h-[500px]">
            {renderMap()}
          </div>

        </div>
      </div>
    </section>
  );

}
