import React, { useState, useEffect } from "react";
import { X, Check, User, Mail, Phone, IndianRupee, Calendar, Clock } from "lucide-react";

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddLead: (lead: any) => void;
}

export default function OfferModal({ isOpen, onClose, onAddLead }: OfferModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    budget: "",
    siteVisitDate: "",
    planningToFinalise: "",
    agree: true,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    let sanitizedValue = value;
    if (name === "phone") {
      // Allow only digits, max 10 digits
      sanitizedValue = value.replace(/\D/g, "").slice(0, 10);
    } else if (name === "fullName") {
      // Allow only letters and spaces
      sanitizedValue = value.replace(/[^A-Za-z\s]/g, "");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : sanitizedValue,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    const trimmedName = formData.fullName.trim();
    if (!trimmedName || !/^[A-Za-z\s]{2,}$/.test(trimmedName)) {
      newErrors.fullName = "Please enter a valid name (letters only)";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.budget) {
      newErrors.budget = "Please select your budget";
    }
    if (!formData.siteVisitDate) {
      newErrors.siteVisitDate = "Please select preferred site visit date";
    }
    if (!formData.planningToFinalise) {
      newErrors.planningToFinalise = "Please select when you plan to finalise";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1200));
    
    onAddLead({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      budget: formData.budget,
      siteVisitDate: formData.siteVisitDate,
      preferredDate: formData.siteVisitDate,
      planningToFinalise: formData.planningToFinalise,
      source: "popup_visit_form",
      status: "Pending",
      notes: `Site Visit: ${formData.siteVisitDate} | Budget: ${formData.budget} | Finalise: ${formData.planningToFinalise}`,
    });
    
    setLoading(false);
    setSubmitted(true);
    
    setTimeout(() => {
      onClose();
      setTimeout(() => setSubmitted(false), 300);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 text-left">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-[440px] max-h-[92vh] overflow-y-auto bg-[#141414] text-[#f5f5f5] rounded-xl shadow-2xl animate-fade-in border border-[#d4af37]/40 custom-scrollbar">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#b3b3b3] hover:text-[#d4af37] transition-colors z-10 cursor-pointer p-1"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col h-full">
            <div className="p-6 sm:p-7 pb-4 border-b border-white/10">
              <h3 className="font-display text-[16px] font-bold text-[#d4af37] uppercase tracking-wide">
                Schedule Your Exclusive Site Visit
              </h3>
              <p className="font-body text-xs text-[#b3b3b3] mt-1.5 leading-relaxed">
                Experience Valencia Towers Phase 2, explore the floor plans and get complete pricing details.
              </p>
            </div>

            <div className="p-6 sm:p-7 pt-5 space-y-3.5">
              {/* Full Name */}
              <div className="relative">
                <div className="flex items-center gap-3 bg-[#050505] border border-white/20 rounded-md px-3 py-2.5 focus-within:border-[#d4af37]">
                  <User className="h-4 w-4 text-[#d4af37] shrink-0" />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name*"
                    className="w-full bg-transparent border-none text-sm outline-none font-body text-white placeholder:text-gray-500"
                  />
                </div>
                {errors.fullName && <p className="text-red-400 text-[10px] mt-1">{errors.fullName}</p>}
              </div>

              {/* Email Address */}
              <div className="relative">
                <div className="flex items-center gap-3 bg-[#050505] border border-white/20 rounded-md px-3 py-2.5 focus-within:border-[#d4af37]">
                  <Mail className="h-4 w-4 text-[#d4af37] shrink-0" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address*"
                    className="w-full bg-transparent border-none text-sm outline-none font-body text-white placeholder:text-gray-500"
                  />
                </div>
                {errors.email && <p className="text-red-400 text-[10px] mt-1">{errors.email}</p>}
              </div>

              {/* Phone Number */}
              <div className="relative">
                <div className="flex items-center gap-3 bg-[#050505] border border-white/20 rounded-md px-3 py-2.5 focus-within:border-[#d4af37]">
                  <Phone className="h-4 w-4 text-[#d4af37] shrink-0" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number (10 digits)*"
                    maxLength={10}
                    className="w-full bg-transparent border-none text-sm outline-none font-body text-white placeholder:text-gray-500"
                  />
                </div>
                {errors.phone && <p className="text-red-400 text-[10px] mt-1">{errors.phone}</p>}
              </div>

              {/* Budget Qualifying Field */}
              <div className="relative">
                <div className="flex items-center gap-3 bg-[#050505] border border-white/20 rounded-md px-3 py-2.5 focus-within:border-[#d4af37]">
                  <IndianRupee className="h-4 w-4 text-[#d4af37] shrink-0" />
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-transparent border-none text-sm outline-none font-body text-white cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#141414] text-gray-500">Select Budget*</option>
                    <option value="₹2.8 Cr" className="bg-[#141414] text-white">₹2.8 Cr</option>
                    <option value="₹3.5 Cr" className="bg-[#141414] text-white">₹3.5 Cr</option>
                    <option value="₹5.5 Cr" className="bg-[#141414] text-white">₹5.5 Cr</option>
                    <option value="₹5.5 Cr+" className="bg-[#141414] text-white">Above ₹5.5 Cr</option>
                  </select>
                </div>
                {errors.budget && <p className="text-red-400 text-[10px] mt-1">{errors.budget}</p>}
              </div>

              {/* Site Visit Dates Field */}
              <div className="relative">
                <div className="flex items-center gap-3 bg-[#050505] border border-white/20 rounded-md px-3 py-2.5 focus-within:border-[#d4af37]">
                  <Calendar className="h-4 w-4 text-[#d4af37] shrink-0" />
                  <input
                    type={formData.siteVisitDate ? "date" : "text"}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => {
                      if (!e.target.value) e.target.type = "text";
                    }}
                    id="siteVisitDate"
                    name="siteVisitDate"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.siteVisitDate}
                    onChange={handleChange}
                    placeholder="Site Visit Date*"
                    className="w-full bg-transparent border-none text-sm outline-none font-body text-white placeholder:text-gray-500 cursor-pointer [color-scheme:dark]"
                  />
                </div>
                {errors.siteVisitDate && <p className="text-red-400 text-[10px] mt-1">{errors.siteVisitDate}</p>}
              </div>

              {/* When are you planning to finalise */}
              <div className="relative">
                <div className="flex items-center gap-3 bg-[#050505] border border-white/20 rounded-md px-3 py-2.5 focus-within:border-[#d4af37]">
                  <Clock className="h-4 w-4 text-[#d4af37] shrink-0" />
                  <select
                    id="planningToFinalise"
                    name="planningToFinalise"
                    required
                    value={formData.planningToFinalise}
                    onChange={handleChange}
                    className="w-full bg-transparent border-none text-sm outline-none font-body text-white cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#141414] text-gray-500">When are you planning to finalise?*</option>
                    <option value="Immediately (Within 15 days)" className="bg-[#141414] text-white">Immediately (Within 15 days)</option>
                    <option value="Within 30 days" className="bg-[#141414] text-white">Within 30 days</option>
                    <option value="1 - 3 months" className="bg-[#141414] text-white">1 - 3 months</option>
                    <option value="More than 3 months" className="bg-[#141414] text-white">More than 3 months</option>
                  </select>
                </div>
                {errors.planningToFinalise && <p className="text-red-400 text-[10px] mt-1">{errors.planningToFinalise}</p>}
              </div>

              <div className="flex items-start gap-3 pt-1">
                <div className="flex items-center h-5">
                  <input
                    id="agree"
                    name="agree"
                    type="checkbox"
                    checked={formData.agree}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 border border-[#d4af37] rounded bg-[#050505] checked:bg-[#d4af37] focus:ring-0 cursor-pointer"
                  />
                </div>
                <label htmlFor="agree" className="text-[10px] text-[#b3b3b3] font-body leading-tight">
                  I agree to the Terms & Privacy Policy and consent to receive project details via WhatsApp, Call, SMS or Email.
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e6c878] text-[#050505] font-body text-xs font-extrabold tracking-[0.2em] uppercase py-3.5 mt-2 rounded-full hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  "SCHEDULE VISIT"
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center h-[380px] flex flex-col justify-center">
            <div className="h-16 w-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto text-green-400 mb-6 shadow-sm">
              <Check className="h-8 w-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#d4af37] mb-2">Request Received</h3>
            <p className="font-body text-xs text-[#b3b3b3] leading-relaxed max-w-xs mx-auto">
              Thank you! Our relationship team has received your request and will contact you shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
