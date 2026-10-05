import React, { useEffect } from "react";
import { X } from "lucide-react";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-navy-dark/90 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col border border-navy-primary/10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 sm:p-8 border-b border-navy-primary/5 bg-marble shrink-0">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-navy-primary font-bold">Terms & Conditions</h2>
            <p className="font-body text-xs text-charcoal/60 mt-1 uppercase tracking-widest">Valencia Towers Collective</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-navy-primary/5 text-navy-primary/60 hover:text-navy-primary transition-colors focus:outline-none"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto font-body text-sm text-charcoal/80 leading-relaxed space-y-8 custom-scrollbar">
          
          <div className="space-y-4">
            <p>
              By accessing and using this website, you agree to be bound by these Terms and Conditions. This website is operated by the Valencia Towers Marketing Collective, an authorised marketing partner for Shalimar OneWorld.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">1. Website Purpose</h3>
            <p>
              This website has been created for the sole purpose of providing information and generating enquiries for Valencia Towers Phase 2, a boutique community of luxury 4 BHK & 5 BHK residences at Shalimar OneWorld, Lucknow. This is an authorised marketing website and operates in accordance with developer guidelines.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">2. Disclaimer</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>This website is managed by an authorised sales/marketing partner.</li>
              <li>All images, renders, floor plans, and layouts shown are artistic impressions and may not represent the final product exactly.</li>
              <li>Prices, specifications, amenities, and availability are subject to change without prior notice.</li>
              <li>The developer reserves the right to make changes to the project as they deem fit in the interest of the development.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">3. Information Accuracy</h3>
            <p>
              While we strive to keep the information on this website accurate and up to date, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of any information presented. Any reliance you place on such information is strictly at your own risk.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">4. Enquiry & Communication</h3>
            <p>
              By submitting your contact details through any form on this website, you consent to being contacted by our team and/or the authorised Valencia Towers sales team via phone, email, SMS, or WhatsApp regarding the project.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">5. Intellectual Property</h3>
            <p>
              All content on this website including text, images, logos, and design is either owned by or licensed to Shalimar OneWorld and their respective marketing partners. Unauthorised reproduction, distribution, or modification of any material on this site is strictly prohibited.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">6. RERA Compliance</h3>
            <p>The project is registered under the Real Estate (Regulation and Development) Act, 2016 (RERA) applicable for projects in Uttar Pradesh.</p>
            <p><strong>UP RERA Registration No:</strong> UPRERAPRJ123456</p>
            <p>Details are available on the official website: up-rera.in</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">7. Limitation of Liability</h3>
            <p>
              In no event shall Shalimar OneWorld or their authorised marketing partners be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or reliance on any information provided herein.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">8. Governing Law</h3>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising in relation to this website shall be subject to the exclusive jurisdiction of the competent courts in Lucknow, Uttar Pradesh.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">9. Contact</h3>
            <p>For any queries regarding these terms, please contact the authorised sales team:</p>
            <ul className="list-none space-y-1 mt-2">
              <li><strong>Project:</strong> Valencia Towers Phase 2 | Shalimar OneWorld</li>
              <li><strong>Phone:</strong> +91 98765 43210</li>
              <li><strong>Email:</strong> info@valenciatowers.com</li>
              <li><strong>Location:</strong> Shalimar OneWorld, Amar Shaheed Path, Lucknow, UP</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 sm:px-8 sm:py-6 border-t border-navy-primary/5 bg-marble shrink-0 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded bg-navy-primary text-white font-body text-xs font-bold tracking-wider uppercase hover:bg-navy-dark transition-colors shadow-sm"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
}
