import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyValencia from "./components/WhyValencia";
import PrivacyExclusivity from "./components/PrivacyExclusivity";
import ShalimarOneWorld from "./components/ShalimarOneWorld";
import LocationAdvantage from "./components/LocationAdvantage";
import LandmarkLuxury from "./components/LandmarkLuxury";
import ProjectHighlights from "./components/ProjectHighlights";
import SiteVisitCTA from "./components/SiteVisitCTA";
import BrochureForm from "./components/BrochureForm";
import BookingModal from "./components/BookingModal";
import AdminDashboard from "./components/AdminDashboard";
import Footer from "./components/Footer";
import PrivacyPolicyModal from "./components/PrivacyPolicyModal";
import TermsModal from "./components/TermsModal";
import OfferModal from "./components/OfferModal";
import ThankYouPage from "./components/ThankYouPage";
import { LeadSubmission } from "./types";

const LOCAL_STORAGE_KEY = "valencia_towers_leads";
const WEBHOOK_URL =
  import.meta.env.VITE_WEBHOOK_URL ||
  import.meta.env.WEBHOOK_URL ||
  import.meta.env.VITE_WEBHOOK ||
  import.meta.env.WEBHOOK ||
  (typeof process !== "undefined" && process.env?.WEBHOOK_URL) ||
  "";

export default function App() {
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<LeadSubmission | null>(null);

  const [currentRoute, setCurrentRoute] = useState<"home" | "thank-you">(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes("thank-you") || path.includes("thankyou") || hash.includes("thank-you") || hash.includes("thankyou")) {
        return "thank-you";
      }
    }
    return "home";
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes("thank-you") || path.includes("thankyou") || hash.includes("thank-you") || hash.includes("thankyou")) {
        setCurrentRoute("thank-you");
      } else {
        setCurrentRoute("home");
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateToThankYou = (lead?: LeadSubmission) => {
    if (lead) setSubmittedLead(lead);
    setCurrentRoute("thank-you");
    try {
      window.history.pushState({ page: "thank-you" }, "", "/thank-you");
    } catch (e) {
      console.error("History navigation error", e);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToHome = () => {
    setCurrentRoute("home");
    try {
      window.history.pushState({ page: "home" }, "", "/");
    } catch (e) {
      console.error("History navigation error", e);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Read initial cache
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        setLeads(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Error reading storage cache", e);
    }
  }, []);

  const saveLeadsToCache = (newLeads: LeadSubmission[]) => {
    setLeads(newLeads);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newLeads));
    } catch (e) {
      console.error("Error saving lead entries to storage", e);
    }
  };

  const handleAddLead = (rawLead: Omit<LeadSubmission, "id" | "submittedAt" | "status">) => {
    const isoTimestamp = new Date().toISOString();
    
    const newLead: LeadSubmission = {
      ...rawLead,
      id: "LD-" + Math.floor(1000 + Math.random() * 9000),
      submittedAt: isoTimestamp,
      status: "Pending",
    };

    // Post to Webhook with only form fields and timestamp (no extra fields)
    if (WEBHOOK_URL) {
      fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: rawLead.fullName,
          email: rawLead.email,
          phone: rawLead.phone,
          budget: rawLead.budget || "",
          siteVisitDate: rawLead.siteVisitDate || rawLead.preferredDate || "",
          planningToFinalise: rawLead.planningToFinalise || "",
          timestamp: isoTimestamp,
        }),
      }).catch((err) => {
        console.error("Webhook submission failed:", err);
      });
    } else {
      console.warn("Webhook URL not configured. Please add VITE_WEBHOOK_URL or WEBHOOK_URL to your .env file.");
    }

    const updated = [newLead, ...leads];
    saveLeadsToCache(updated);

    // Close any open modals
    setOfferOpen(false);
    setBookingOpen(false);

    // Direct user to Thank You page
    navigateToThankYou(newLead);
  };

  const handleUpdateStatus = (id: string, status: LeadSubmission["status"]) => {
    const updated = leads.map((l) => (l.id === id ? { ...l, status } : l));
    saveLeadsToCache(updated);
  };

  const handleClearLeads = () => {
    saveLeadsToCache([]);
  };

  const handleHeroEnquiry = () => {
    setOfferOpen(true);
  };

  if (currentRoute === "thank-you") {
    return (
      <>
        <ThankYouPage
          lead={submittedLead || (leads.length > 0 ? leads[0] : null)}
          onBackToHome={navigateToHome}
        />
        <AdminDashboard
          isOpen={adminOpen}
          onClose={() => setAdminOpen(false)}
          leads={leads}
          onUpdateStatus={handleUpdateStatus}
          onClearLeads={handleClearLeads}
          onAddMockLeads={() => {}}
        />
      </>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#f4f3ee] text-[#050505] pb-20 md:pb-0 overflow-x-hidden w-full">
      {/* Upper Navigation Header */}
      <Header
        onOpenBooking={handleHeroEnquiry}
        onToggleAdmin={() => setAdminOpen(!adminOpen)}
        isAdminActive={adminOpen}
      />

      {/* Section 1 — Hero Banner */}
      <Hero onOpenEnquiry={handleHeroEnquiry} />

      {/* Section 2 — Why Valencia Towers? */}
      <WhyValencia onOpenEnquiry={handleHeroEnquiry} />

      {/* Section 3 — Privacy & Exclusivity */}
      <PrivacyExclusivity onOpenEnquiry={handleHeroEnquiry} />

      {/* Section 4 — Shalimar OneWorld Advantage */}
      <ShalimarOneWorld onOpenEnquiry={handleHeroEnquiry} />

      {/* Section 5 — Location Advantage */}
      <LocationAdvantage onOpenEnquiry={handleHeroEnquiry} />

      {/* Section 5.5 — A Landmark of Luxury Living in Lucknow */}
      <LandmarkLuxury onOpenEnquiry={handleHeroEnquiry} />

      {/* Section 6 — Project Highlights */}
      <ProjectHighlights onOpenEnquiry={handleHeroEnquiry} />

      {/* Section 7 — Final CTA / Site Visit */}
      <SiteVisitCTA onOpenBooking={handleHeroEnquiry} />

      {/* Brochure / Intake Form Section */}
      <BrochureForm onAddLead={handleAddLead} />

      {/* Modals & Dialogs */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        onAddLead={handleAddLead}
      />

      <AdminDashboard
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        leads={leads}
        onUpdateStatus={handleUpdateStatus}
        onClearLeads={handleClearLeads}
        onAddMockLeads={() => {}}
      />

      {/* Fixed Mobile Bottom CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
        <a 
          href="tel:08047359991" 
          className="flex-1 flex items-center justify-center gap-2 bg-[#050505] text-white font-body text-[12px] font-extrabold uppercase tracking-[0.15em] py-4 transition-colors border-r border-white/20"
        >
          <Phone className="h-4 w-4 fill-white" />
          Call Now
        </a>
        <button 
          onClick={handleHeroEnquiry}
          className="flex-1 flex items-center justify-center bg-[#d4af37] text-[#050505] font-body text-[12px] font-extrabold uppercase tracking-[0.15em] py-4 transition-colors"
        >
          Get Price List
        </button>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919035679657"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[84px] md:bottom-8 right-4 md:right-8 bg-[#25D366] text-white p-3.5 md:p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all z-40 flex items-center justify-center animate-fade-in"
        aria-label="Chat on WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Footer Credentials Branding */}
      <Footer 
        onOpenPrivacy={() => setPrivacyOpen(true)} 
        onOpenTerms={() => setTermsOpen(true)}
      />

      {/* Legal Modals */}
      <PrivacyPolicyModal 
        isOpen={privacyOpen} 
        onClose={() => setPrivacyOpen(false)} 
      />
      <TermsModal 
        isOpen={termsOpen} 
        onClose={() => setTermsOpen(false)} 
      />
      <OfferModal
        isOpen={offerOpen}
        onClose={() => setOfferOpen(false)}
        onAddLead={handleAddLead}
      />
    </div>
  );
}
