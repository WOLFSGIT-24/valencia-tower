import React, { useEffect } from "react";
import { X } from "lucide-react";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#050505]/90 backdrop-blur-sm animate-fade-in text-left">
      <div 
        className="bg-[#141414] text-[#f5f5f5] rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col border border-[#d4af37]/30 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 sm:p-8 border-b border-white/10 bg-[#050505] shrink-0">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-[#d4af37] font-bold">Privacy Policy</h2>
            <p className="font-body text-xs text-[#b3b3b3] mt-1 uppercase tracking-widest">Valencia Towers Phase 2 • Shalimar OneWorld</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors focus:outline-none cursor-pointer"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto font-body text-sm text-[#f5f5f5]/80 leading-relaxed space-y-8 custom-scrollbar">
          
          <div className="space-y-4">
            <p>
              This website is operated by authorised sales and marketing representatives for Valencia Towers Phase 2, a luxury residential project located within Shalimar OneWorld, Lucknow. We are committed to protecting the privacy of every visitor to this website and handling your personal information with care, transparency, and respect.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-[#d4af37]">1. Information We Collect</h3>
            <p>When you submit an enquiry form on this website, we collect the following personal information:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Preferred date and time for site visit (if provided)</li>
              <li>Any message or query you submit</li>
            </ul>
            <p>We may also automatically collect non-personal technical data such as browser type, IP address, device type, and pages visited, solely for analytics and performance optimisation purposes.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-[#d4af37]">2. How We Use Your Information</h3>
            <p>Your personal information is used solely for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Responding to your enquiry about Valencia Towers Phase 2</li>
              <li>Sharing digital brochures, floor plans, and pricing details</li>
              <li>Connecting you with the authorised sales team for site visits</li>
              <li>Sending relevant updates about project availability, pricing, and payment plans</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-[#d4af37]">3. Data Sharing</h3>
            <p>We may share your information with authorised sales representatives for the sole purpose of fulfilling your enquiry and following up on your interest in this project.</p>
            <p>We do not sell, rent, or trade your personal data to any third parties for marketing purposes unrelated to Valencia Towers Phase 2.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-[#d4af37]">4. Cookies & Tracking Technologies</h3>
            <p>This website uses cookies and tracking technologies to measure performance and provide relevant remarketing to interested audiences.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-[#d4af37]">5. Contact Us</h3>
            <p>For any privacy-related queries, please reach out to the Valencia Towers Phase 2 sales team:</p>
            <ul className="list-none space-y-1 mt-2">
              <li><strong>Project:</strong> Valencia Towers Phase 2</li>
              <li><strong>Location:</strong> Shalimar OneWorld, Lucknow, Uttar Pradesh</li>
              <li><strong>Phone:</strong> 080 4735 9991</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 sm:px-8 sm:py-6 border-t border-white/10 bg-[#050505] shrink-0 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e6c878] text-[#050505] font-body text-xs font-bold tracking-wider uppercase hover:opacity-95 transition-all cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
}
