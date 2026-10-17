import React, { useEffect } from "react";
import { 
  CheckCircle2, 
  Phone, 
  ArrowLeft, 
  Calendar, 
  Clock, 
  IndianRupee, 
  ShieldCheck, 
  MapPin, 
  Building2,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { LeadSubmission } from "../types";

interface ThankYouPageProps {
  lead?: LeadSubmission | null;
  onBackToHome: () => void;
}

export default function ThankYouPage({ lead, onBackToHome }: ThankYouPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const whatsappMessage = encodeURIComponent(
    `Hi, I have registered my enquiry for Valencia Towers Phase 2${lead?.fullName ? ` (${lead.fullName})` : ""}. Please share complete floor plans and pricing details.`
  );

  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5] flex flex-col justify-between selection:bg-[#d4af37]/30 selection:text-white">
      {/* Top Luxury Navigation Bar */}
      <header className="border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-2 text-xs font-body tracking-wider uppercase text-[#b3b3b3] hover:text-[#d4af37] transition-colors cursor-pointer group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </button>
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <div className="hidden sm:block">
              <span className="font-display text-sm tracking-widest text-[#d4af37] font-bold">
                VALENCIA TOWERS
              </span>
              <span className="text-[10px] text-white/50 tracking-widest ml-2 uppercase">
                Phase 2
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:08047359991"
              className="flex items-center gap-2 text-xs font-body font-bold text-white bg-white/5 hover:bg-[#d4af37]/20 border border-white/15 hover:border-[#d4af37]/40 px-3.5 py-2 rounded-full transition-all"
            >
              <Phone className="h-3.5 w-3.5 text-[#d4af37]" />
              <span className="hidden sm:inline">08047359991</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 py-12 md:py-20 px-6 relative overflow-hidden">
        {/* Ambient Luxury Radial Background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-10">
          
          {/* Animated Gold Checkmark Badge */}
          <div className="relative inline-block animate-fade-in">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-[#b8860b]/20 via-[#d4af37]/30 to-white/10 border-2 border-[#d4af37] flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(212,175,55,0.35)]">
              <CheckCircle2 className="h-10 w-10 md:h-12 md:w-12 text-[#d4af37]" />
            </div>
            <div className="absolute -top-1 -right-1 bg-[#d4af37] text-[#050505] p-1.5 rounded-full shadow-md">
              <Sparkles className="h-3.5 w-3.5 fill-current" />
            </div>
          </div>

          {/* Heading & Subheading */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-[11px] font-body tracking-widest uppercase">
              Enquiry Confirmed
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Thank You{lead?.fullName ? `, ${lead.fullName.split(" ")[0]}` : ""}!
            </h1>
            <p className="font-body text-sm md:text-base text-[#b3b3b3] leading-relaxed">
              Your request for <strong className="text-white font-semibold">Valencia Towers Phase 2</strong> at Shalimar OneWorld has been registered successfully. Our Senior Relationship Specialist will connect with you shortly.
            </p>
          </div>

          {/* Submission Recap Card (if lead details present) */}
          {lead && (
            <div className="bg-[#141414] border border-[#d4af37]/30 rounded-xl p-6 md:p-8 text-left shadow-2xl relative overflow-hidden max-w-2xl mx-auto">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e6c878]" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
                <div>
                  <span className="text-[10px] text-white/50 uppercase tracking-widest block">Reference ID</span>
                  <span className="font-mono text-sm font-bold text-[#d4af37]">{lead.id}</span>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-[10px] text-white/50 uppercase tracking-widest block">Project Destination</span>
                  <span className="text-xs font-semibold text-white">Valencia Towers Phase 2, Gomti Nagar Extn.</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs font-body">
                {lead.fullName && (
                  <div>
                    <span className="text-white/50 block text-[11px]">Full Name</span>
                    <span className="text-white font-medium text-sm">{lead.fullName}</span>
                  </div>
                )}
                {lead.phone && (
                  <div>
                    <span className="text-white/50 block text-[11px]">Contact Number</span>
                    <span className="text-white font-medium text-sm">+91 {lead.phone}</span>
                  </div>
                )}
                {lead.budget && (
                  <div className="flex items-center gap-2 bg-[#050505] p-2.5 rounded border border-white/10">
                    <IndianRupee className="h-4 w-4 text-[#d4af37] shrink-0" />
                    <div>
                      <span className="text-white/50 block text-[10px]">Budget Preference</span>
                      <span className="text-[#d4af37] font-bold text-xs">{lead.budget}</span>
                    </div>
                  </div>
                )}
                {lead.siteVisitDate && (
                  <div className="flex items-center gap-2 bg-[#050505] p-2.5 rounded border border-white/10">
                    <Calendar className="h-4 w-4 text-[#d4af37] shrink-0" />
                    <div>
                      <span className="text-white/50 block text-[10px]">Preferred Site Visit</span>
                      <span className="text-white font-bold text-xs">{lead.siteVisitDate}</span>
                    </div>
                  </div>
                )}
                {lead.planningToFinalise && (
                  <div className="sm:col-span-2 flex items-center gap-2 bg-[#050505] p-2.5 rounded border border-white/10">
                    <Clock className="h-4 w-4 text-[#d4af37] shrink-0" />
                    <div>
                      <span className="text-white/50 block text-[10px]">Planning Timeline</span>
                      <span className="text-white font-medium text-xs">{lead.planningToFinalise}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Next Steps Progress Steps */}
          <div className="max-w-2xl mx-auto text-left space-y-4">
            <h3 className="font-display text-sm tracking-widest text-[#d4af37] uppercase font-bold text-center">
              What Happens Next?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-[#0f0f0f] border border-white/10 rounded-lg p-4 space-y-2">
                <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#d4af37] font-bold text-xs">
                  1
                </div>
                <h4 className="font-semibold text-xs text-white">Instant Confirmation</h4>
                <p className="text-[11px] text-[#b3b3b3] leading-relaxed">
                  Project details and floor plans have been sent to your contact details.
                </p>
              </div>

              <div className="bg-[#0f0f0f] border border-white/10 rounded-lg p-4 space-y-2">
                <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#d4af37] font-bold text-xs">
                  2
                </div>
                <h4 className="font-semibold text-xs text-white">Relationship Call</h4>
                <p className="text-[11px] text-[#b3b3b3] leading-relaxed">
                  Our manager will discuss 4 BHK layout options and personalized price sheets.
                </p>
              </div>

              <div className="bg-[#0f0f0f] border border-white/10 rounded-lg p-4 space-y-2">
                <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#d4af37] font-bold text-xs">
                  3
                </div>
                <h4 className="font-semibold text-xs text-white">VIP Site Tour</h4>
                <p className="text-[11px] text-[#b3b3b3] leading-relaxed">
                  Experience the sample residence at Shalimar OneWorld, Gomti Nagar Extension.
                </p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 max-w-xl mx-auto">
            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/919035679657?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-body text-xs font-bold tracking-widest uppercase px-6 py-4 rounded-md hover:bg-[#20ba59] transition-all shadow-[0_10px_30px_rgba(37,211,102,0.25)] cursor-pointer"
            >
              <svg className="h-4 w-4 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp Us
            </a>

            {/* Direct Call CTA */}
            <a
              href="tel:08047359991"
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e6c878] text-[#050505] font-body text-xs font-bold tracking-widest uppercase px-6 py-4 rounded-md hover:opacity-95 transition-all shadow-[0_10px_30px_rgba(212,175,55,0.25)] cursor-pointer"
            >
              <Phone className="h-4 w-4" />
              Call Specialist
            </a>
          </div>

          {/* Back to Home Button */}
          <div>
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-xs font-body tracking-widest uppercase text-[#d4af37] hover:text-white transition-colors cursor-pointer py-2 border-b border-[#d4af37]/30 hover:border-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Return to Project Showcase
            </button>
          </div>

          {/* RERA Transparency Box */}
          <div className="bg-[#0c0c0c] border border-white/10 rounded-lg p-5 max-w-2xl mx-auto text-left">
            <div className="flex items-center gap-2 text-[#d4af37] font-display text-xs tracking-wider uppercase font-bold mb-3">
              <ShieldCheck className="h-4 w-4" />
              RERA Certified Transparency
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-body text-[#b3b3b3]">
              <div>
                <span className="text-white/50 block">Project RERA No.:</span>
                <span className="text-white font-mono">UPRERAPRJ944626/09/2024</span>
              </div>
              <div>
                <span className="text-white/50 block">Promoter RERA No.:</span>
                <span className="text-white font-mono">UPRERAPRJ10815</span>
              </div>
              <div>
                <span className="text-white/50 block">RERA Portal:</span>
                <a
                  href="https://www.up-rera.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d4af37] hover:underline flex items-center gap-1"
                >
                  www.up-rera.in <ExternalLink className="h-2.5 w-2.5" />
                </a>
              </div>
              <div>
                <span className="text-white/50 block">Official Launch Date:</span>
                <span className="text-white">28 September 2024</span>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 bg-[#080808] text-center text-[11px] font-body text-white/50">
        <p>
          © {new Date().getFullYear()} Shalimar OneWorld — Valencia Towers Phase 2, Gomti Nagar Extension, Lucknow. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
