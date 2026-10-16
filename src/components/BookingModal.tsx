import React, { useState } from "react";
import { X, Calendar, Check, Phone, Mail, User, IndianRupee, Clock } from "lucide-react";
import { LeadSubmission } from "../types";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddLead: (lead: Omit<LeadSubmission, "id" | "submittedAt" | "status">) => void;
  initialUnitType?: string | null;
}

export default function BookingModal({
  isOpen,
  onClose,
  onAddLead,
  initialUnitType,
}: BookingModalProps) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    budget: "",
    siteVisitDate: "",
    planningToFinalise: "",
    preferredDate: "",
    preferredTime: "11:00",
    unitType: initialUnitType || "Luxury 4 BHK",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, name, value } = e.target;
    const fieldKey = id || name;
    
    let sanitizedValue = value;
    if (fieldKey === "phone") {
      // Allow only digits, max 10 digits
      sanitizedValue = value.replace(/\D/g, '').slice(0, 10);
    } else if (fieldKey === "fullName") {
      // Allow only letters and spaces
      sanitizedValue = value.replace(/[^A-Za-z\s]/g, '');
    }
    
    setFormData((prev) => ({ ...prev, [fieldKey]: sanitizedValue }));
    if (errors[fieldKey]) {
      setErrors((prev) => ({ ...prev, [fieldKey]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
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

    setTimeout(() => {
      onAddLead({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        budget: formData.budget,
        siteVisitDate: formData.siteVisitDate,
        preferredDate: formData.siteVisitDate,
        planningToFinalise: formData.planningToFinalise,
        source: "floor_plan_enquiry",
        notes: `Unlocked Floor Plans | Budget: ${formData.budget} | Site Visit: ${formData.siteVisitDate} | Finalise: ${formData.planningToFinalise}`,
      });
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in text-left">
      <div className="bg-[#141414] text-[#f5f5f5] rounded-xl shadow-2xl max-w-lg w-full overflow-hidden relative border border-[#d4af37]/40">
        <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e6c878]" />
        
        {/* Header bar */}
        <div className="bg-[#050505] p-6 text-white flex justify-between items-center border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg">
              <Calendar className="h-5 w-5 text-[#d4af37]" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold tracking-tight text-[#d4af37]">
                Get Price List & Floor Plans
              </h3>
              <p className="text-[10px] text-white/70 uppercase tracking-widest font-bold">
                Enter your details to receive instant access
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 transition-all text-white/80 hover:text-white cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content/Form Area */}
        <div className="p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Full Name */}
              <div className="relative border-b border-white/20 focus-within:border-[#d4af37] py-1">
                <div className="flex items-center gap-3">
                  <User className="h-4 w-4 text-[#d4af37]" />
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name*"
                    className="w-full bg-transparent border-none text-xs sm:text-sm font-body outline-none text-white placeholder:text-gray-500 py-1"
                  />
                </div>
                {errors.fullName && <p className="text-red-400 text-[10px] mt-1 absolute -bottom-4">{errors.fullName}</p>}
              </div>

              {/* Email Address */}
              <div className="relative border-b border-white/20 focus-within:border-[#d4af37] py-1">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#d4af37]" />
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address*"
                    className="w-full bg-transparent border-none text-xs sm:text-sm font-body outline-none text-white placeholder:text-gray-500 py-1"
                  />
                </div>
                {errors.email && <p className="text-red-400 text-[10px] mt-1 absolute -bottom-4">{errors.email}</p>}
              </div>

              {/* Phone Number */}
              <div className="relative border-b border-white/20 focus-within:border-[#d4af37] py-1">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#d4af37] shrink-0" />
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number (10 digits)*"
                    maxLength={10}
                    className="w-full bg-transparent border-none text-xs sm:text-sm font-body outline-none text-white placeholder:text-gray-500 py-1"
                  />
                </div>
                {errors.phone && <p className="text-red-400 text-[10px] mt-1 absolute -bottom-4">{errors.phone}</p>}
              </div>

              {/* Budget */}
              <div className="relative border-b border-white/20 focus-within:border-[#d4af37] py-1">
                <div className="flex items-center gap-3">
                  <IndianRupee className="h-4 w-4 text-[#d4af37] shrink-0" />
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-transparent border-none text-xs sm:text-sm font-body outline-none text-white py-1 cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#141414] text-gray-500">Select Budget*</option>
                    <option value="₹2.8 Cr" className="bg-[#141414] text-white">₹2.8 Cr</option>
                    <option value="₹3.5 Cr" className="bg-[#141414] text-white">₹3.5 Cr</option>
                    <option value="₹5.5 Cr" className="bg-[#141414] text-white">₹5.5 Cr</option>
                    <option value="₹5.5 Cr+" className="bg-[#141414] text-white">Above ₹5.5 Cr</option>
                  </select>
                </div>
                {errors.budget && <p className="text-red-400 text-[10px] mt-1 absolute -bottom-4">{errors.budget}</p>}
              </div>

              {/* Site Visit Date */}
              <div className="relative border-b border-white/20 focus-within:border-[#d4af37] py-1">
                <div className="flex items-center gap-3">
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
                    className="w-full bg-transparent border-none text-xs sm:text-sm font-body outline-none text-white placeholder:text-gray-500 py-1 cursor-pointer [color-scheme:dark]"
                  />
                </div>
                {errors.siteVisitDate && <p className="text-red-400 text-[10px] mt-1 absolute -bottom-4">{errors.siteVisitDate}</p>}
              </div>

              {/* When are you planning to finalise */}
              <div className="relative border-b border-white/20 focus-within:border-[#d4af37] py-1">
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-[#d4af37] shrink-0" />
                  <select
                    id="planningToFinalise"
                    name="planningToFinalise"
                    required
                    value={formData.planningToFinalise}
                    onChange={handleChange}
                    className="w-full bg-transparent border-none text-xs sm:text-sm font-body outline-none text-white py-1 cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#141414] text-gray-500">When are you planning to finalise?*</option>
                    <option value="Immediately (Within 15 days)" className="bg-[#141414] text-white">Immediately (Within 15 days)</option>
                    <option value="Within 30 days" className="bg-[#141414] text-white">Within 30 days</option>
                    <option value="1 - 3 months" className="bg-[#141414] text-white">1 - 3 months</option>
                    <option value="More than 3 months" className="bg-[#141414] text-white">More than 3 months</option>
                  </select>
                </div>
                {errors.planningToFinalise && <p className="text-red-400 text-[10px] mt-1 absolute -bottom-4">{errors.planningToFinalise}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e6c878] text-[#050505] font-body text-xs font-bold tracking-widest uppercase px-8 py-4.5 hover:opacity-95 transition-all shadow-lg rounded-sm disabled:opacity-50 cursor-pointer mt-4"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    SUBMITTING DETAILS...
                  </>
                ) : (
                  "GET PRICE LIST & FLOOR PLANS"
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-5 animate-fade-in">
              <div className="h-12 w-12 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto text-green-400 shadow-sm">
                <Check className="h-6 w-6" />
              </div>
              
              <div>
                <h4 className="font-display text-xl font-bold text-[#d4af37]">
                  Floor Plans Unlocked
                </h4>
                <p className="font-body text-xs text-[#b3b3b3] mt-1.5 max-w-sm mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. The floor plans are now fully unlocked for you to view.
                </p>
              </div>

              <button
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e6c878] text-[#050505] font-body text-xs font-bold tracking-widest uppercase px-8 py-4.5 hover:opacity-95 transition-all shadow-lg rounded-sm cursor-pointer"
              >
                View Layouts
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
