import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

interface HeaderProps {
  onOpenBooking: () => void;
  onToggleAdmin: () => void;
  isAdminActive: boolean;
}

export default function Header({ onOpenBooking, onToggleAdmin, isAdminActive }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "OVERVIEW", id: "overview" },
    { label: "WHY VALENCIA", id: "why-valencia" },
    { label: "PRIVACY", id: "privacy-exclusivity" },
    { label: "ONEWORLD ADVANTAGE", id: "oneworld-advantage" },
    { label: "LOCATION", id: "location-advantage" },
    { label: "HIGHLIGHTS", id: "project-highlights" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sectionIds = navLinks.map((link) => link.id);
      for (const section of sectionIds) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full h-20 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#f4f3ee]/95 backdrop-blur-md border-b border-[#050505]/10 shadow-[0_4px_30px_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#overview"
            onClick={(e) => handleLinkClick(e, "overview")}
            className="flex items-center gap-3 group focus:outline-none text-left"
          >
            <img
              src="/logo.webp"
              alt="Valencia Towers Logo"
              className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`font-body text-xs font-semibold tracking-wider transition-all duration-300 relative py-2 ${
                  activeSection === link.id
                    ? "text-[#050505]"
                    : "text-[#050505]/70 hover:text-[#050505]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#d4af37] transition-all duration-300 ${
                    activeSection === link.id ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Action Call to Action */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="hidden md:block bg-[#050505] text-white font-body text-xs font-bold tracking-widest uppercase px-6 py-3.5 hover:bg-[#d4af37] hover:text-[#050505] transition-all shadow-lg rounded-sm cursor-pointer"
            >
              Get Price List & Floor Plans
            </button>

            {/* Mobile Call Button */}
            <a
              href="tel:08047359991"
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-[#050505]/20 text-[#050505] focus:outline-none hover:bg-[#050505]/5 transition-colors"
            >
              <Phone className="h-4 w-4" />
            </a>

            {/* Hamburger Mobile Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-[#050505]/20 text-[#050505] focus:outline-none hover:bg-[#050505]/5 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 bg-[#050505]/95 backdrop-blur-lg z-30 lg:hidden flex flex-col p-8 space-y-6 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className="font-display text-lg font-medium text-white hover:text-[#d4af37] tracking-wide py-2 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full flex items-center justify-center gap-2 bg-[#d4af37] text-[#050505] font-body text-xs font-bold tracking-widest uppercase px-8 py-4.5 hover:bg-white transition-colors shadow-lg rounded-sm mt-6"
          >
            Get Price List & Floor Plans
          </button>
        </div>
      )}
    </>
  );
}
