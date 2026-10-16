import React, { useState, useEffect } from "react";
import { Download, CheckCircle, Phone, Mail, User, ShieldCheck, IndianRupee, Calendar, Clock } from "lucide-react";
import { LeadSubmission } from "../types";

interface BrochureFormProps {
  onAddLead: (lead: Omit<LeadSubmission, "id" | "submittedAt" | "status">) => void;
  preselectedUnit?: string | null;
}

export default function BrochureForm({ onAddLead, preselectedUnit }: BrochureFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    budget: "",
    siteVisitDate: "",
    planningToFinalise: "",
    preferredDate: "",
    preferredTime: "",
    source: "Website Landing Page",
    unitType: preselectedUnit || "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (preselectedUnit) {
      setFormData((prev) => ({ ...prev, unitType: preselectedUnit }));
      const el = document.getElementById("lead-capture-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [preselectedUnit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      newErrors.fullName = "Please enter your full name (letters only)";
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.budget) {
      newErrors.budget = "Please select your budget";
    }
    if (!formData.siteVisitDate) {
      newErrors.siteVisitDate = "Please select your preferred site visit date";
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
        preferredTime: formData.preferredTime || undefined,
        source: formData.source,
        notes: `Interested in Valencia Towers Phase 2 | Budget: ${formData.budget} | Site Visit: ${formData.siteVisitDate} | Finalise: ${formData.planningToFinalise}`,
      });

      setLoading(false);
      setFormSubmitted(true);
    }, 1200);
  };

  const handleDownloadBrochure = () => {
    try {
      window.open("/Brochure.pdf", "_blank");
      const link = document.createElement("a");
      link.href = "/Brochure.pdf";
      link.setAttribute("download", "Valencia_Towers_Phase_2_Brochure.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      console.error("Error downloading brochure", e);
    }
  };

  return (
    <section id="snapshots" className="w-full py-16 md:py-24 bg-[#0a0a0a] text-[#f5f5f5] relative border-t border-[#d4af37]/15">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,175,55,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div id="lead-capture-section" className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Project Snapshot & Metadata */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <h2 className="font-display text-3xl sm:text-4xl text-[#d4af37] font-bold leading-tight">
              Valencia Towers Phase 2
            </h2>

            <div className="bg-[#141414] p-6 sm:p-8 rounded-xl space-y-5 border border-[#d4af37]/30 shadow-2xl">
              <h3 className="font-display text-lg font-bold text-[#d4af37] tracking-wide">
                Project Snapshot
              </h3>
              <ul className="space-y-3 font-body text-xs sm:text-sm text-[#f5f5f5]/90">
                <li className="flex justify-between border-b border-white/10 pb-2.5">
                  <span className="font-semibold text-[#f5f5f5]">Residence Type</span>
                  <span className="text-[#d4af37] font-bold">Spacious 4 BHK</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2.5">
                  <span className="font-semibold text-[#f5f5f5]">Starting Price</span>
                  <span className="text-[#d4af37] font-bold">Starting from ₹2.8 Cr*</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2.5">
                  <span className="font-semibold text-[#f5f5f5]">Density</span>
                  <span className="text-[#b3b3b3]">Only 4 corner homes per floor</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2.5">
                  <span className="font-semibold text-[#f5f5f5]">Township</span>
                  <span className="text-[#b3b3b3]">Shalimar OneWorld</span>
                </li>
                <li className="flex justify-between pb-1">
                  <span className="font-semibold text-[#f5f5f5]">Location</span>
                  <span className="text-[#b3b3b3]">Lucknow, Uttar Pradesh</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive Lead Intake Form Panel */}
          <div className="lg:col-span-7">
            <div className="bg-[#141414] text-[#f5f5f5] p-8 sm:p-10 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden border border-[#d4af37]/30">
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e6c878]" />

              {!formSubmitted ? (
                <>
                  <div className="mb-8 text-left">
                    <h3 className="font-display text-xl font-bold text-[#d4af37]">
                      Get Price List & Floor Plans
                    </h3>
                    <p className="font-body text-xs text-[#b3b3b3] mt-1">
                      Register your details to receive full pricing details and layout floor plans for Valencia Towers Phase 2.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5 text-left" noValidate>
                    {/* Full Name */}
                    <div>
                      <div className={`relative border-b transition-colors py-2 ${
                        errors.fullName ? "border-red-500 bg-red-500/5 px-2 rounded-t" : "border-white/20 focus-within:border-[#d4af37]"
                      }`}>
                        <div className="flex items-center gap-3">
                          <User className={`h-4 w-4 shrink-0 ${errors.fullName ? "text-red-400" : "text-[#d4af37]"}`} />
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Full Name*"
                            className="w-full bg-transparent border-none text-sm font-body outline-none text-[#f5f5f5] placeholder:text-gray-400 py-1"
                          />
                        </div>
                      </div>
                      {errors.fullName && (
                        <p className="text-red-400 text-xs mt-1.5 font-medium flex items-center gap-1">
                          <span>⚠️</span> {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <div className={`relative border-b transition-colors py-2 ${
                        errors.email ? "border-red-500 bg-red-500/5 px-2 rounded-t" : "border-white/20 focus-within:border-[#d4af37]"
                      }`}>
                        <div className="flex items-center gap-3">
                          <Mail className={`h-4 w-4 shrink-0 ${errors.email ? "text-red-400" : "text-[#d4af37]"}`} />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address*"
                            className="w-full bg-transparent border-none text-sm font-body outline-none text-[#f5f5f5] placeholder:text-gray-400 py-1"
                          />
                        </div>
                      </div>
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1.5 font-medium flex items-center gap-1">
                          <span>⚠️</span> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <div className={`relative border-b transition-colors py-2 ${
                        errors.phone ? "border-red-500 bg-red-500/5 px-2 rounded-t" : "border-white/20 focus-within:border-[#d4af37]"
                      }`}>
                        <div className="flex items-center gap-3">
                          <Phone className={`h-4 w-4 shrink-0 ${errors.phone ? "text-red-400" : "text-[#d4af37]"}`} />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number (10 digits)*"
                            maxLength={10}
                            className="w-full bg-transparent border-none text-sm font-body outline-none text-[#f5f5f5] placeholder:text-gray-400 py-1"
                          />
                        </div>
                      </div>
                      {errors.phone && (
                        <p className="text-red-400 text-xs mt-1.5 font-medium flex items-center gap-1">
                          <span>⚠️</span> {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Budget */}
                    <div>
                      <div className={`relative border-b transition-colors py-2 ${
                        errors.budget ? "border-red-500 bg-red-500/5 px-2 rounded-t" : "border-white/20 focus-within:border-[#d4af37]"
                      }`}>
                        <div className="flex items-center gap-3">
                          <IndianRupee className={`h-4 w-4 shrink-0 ${errors.budget ? "text-red-400" : "text-[#d4af37]"}`} />
                          <select
                            id="budget"
                            name="budget"
                            required
                            value={formData.budget}
                            onChange={handleChange}
                            className={`w-full bg-transparent border-none text-sm font-body outline-none py-1 cursor-pointer ${
                              formData.budget ? "text-[#f5f5f5]" : "text-gray-400"
                            }`}
                          >
                            <option value="" disabled className="bg-[#141414] text-gray-400">Select Budget*</option>
                            <option value="₹2.8 Cr" className="bg-[#141414] text-white">₹2.8 Cr</option>
                            <option value="₹3.5 Cr" className="bg-[#141414] text-white">₹3.5 Cr</option>
                            <option value="₹5.5 Cr" className="bg-[#141414] text-white">₹5.5 Cr</option>
                            <option value="₹5.5 Cr+" className="bg-[#141414] text-white">Above ₹5.5 Cr</option>
                          </select>
                        </div>
                      </div>
                      {errors.budget && (
                        <p className="text-red-400 text-xs mt-1.5 font-medium flex items-center gap-1">
                          <span>⚠️</span> {errors.budget}
                        </p>
                      )}
                    </div>

                    {/* Site Visit Date */}
                    <div>
                      <div className={`relative border-b transition-colors py-2 ${
                        errors.siteVisitDate ? "border-red-500 bg-red-500/5 px-2 rounded-t" : "border-white/20 focus-within:border-[#d4af37]"
                      }`}>
                        <div className="flex items-center gap-3">
                          <Calendar className={`h-4 w-4 shrink-0 ${errors.siteVisitDate ? "text-red-400" : "text-[#d4af37]"}`} />
                          <div className="relative flex-1">
                            {!formData.siteVisitDate && (
                              <span className="absolute left-0 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-body pointer-events-none">
                                Site Visit Date*
                              </span>
                            )}
                            <input
                              type="date"
                              id="siteVisitDate"
                              name="siteVisitDate"
                              required
                              min={new Date().toISOString().split("T")[0]}
                              value={formData.siteVisitDate}
                              onChange={handleChange}
                              className={`w-full bg-transparent border-none text-sm font-body outline-none py-1 cursor-pointer [color-scheme:dark] ${
                                formData.siteVisitDate ? "text-[#f5f5f5]" : "text-transparent"
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                      {errors.siteVisitDate && (
                        <p className="text-red-400 text-xs mt-1.5 font-medium flex items-center gap-1">
                          <span>⚠️</span> {errors.siteVisitDate}
                        </p>
                      )}
                    </div>

                    {/* When are you planning to finalise */}
                    <div>
                      <div className={`relative border-b transition-colors py-2 ${
                        errors.planningToFinalise ? "border-red-500 bg-red-500/5 px-2 rounded-t" : "border-white/20 focus-within:border-[#d4af37]"
                      }`}>
                        <div className="flex items-center gap-3">
                          <Clock className={`h-4 w-4 shrink-0 ${errors.planningToFinalise ? "text-red-400" : "text-[#d4af37]"}`} />
                          <select
                            id="planningToFinalise"
                            name="planningToFinalise"
                            required
                            value={formData.planningToFinalise}
                            onChange={handleChange}
                            className={`w-full bg-transparent border-none text-sm font-body outline-none py-1 cursor-pointer ${
                              formData.planningToFinalise ? "text-[#f5f5f5]" : "text-gray-400"
                            }`}
                          >
                            <option value="" disabled className="bg-[#141414] text-gray-400">When are you planning to finalise?*</option>
                            <option value="Immediately (Within 15 days)" className="bg-[#141414] text-white">Immediately (Within 15 days)</option>
                            <option value="Within 30 days" className="bg-[#141414] text-white">Within 30 days</option>
                            <option value="1 - 3 months" className="bg-[#141414] text-white">1 - 3 months</option>
                            <option value="More than 3 months" className="bg-[#141414] text-white">More than 3 months</option>
                          </select>
                        </div>
                      </div>
                      {errors.planningToFinalise && (
                        <p className="text-red-400 text-xs mt-1.5 font-medium flex items-center gap-1">
                          <span>⚠️</span> {errors.planningToFinalise}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e6c878] text-[#050505] font-body text-xs font-extrabold tracking-widest uppercase px-8 py-4.5 hover:opacity-95 transition-all shadow-lg rounded-sm disabled:opacity-50 mt-4 cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <span className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          SUBMITTING...
                        </>
                      ) : (
                        "GET PRICE LIST & FLOOR PLANS"
                      )}
                    </button>

                    <div className="flex flex-col items-center gap-1 text-[10px] text-gray-400 font-body">
                      <div className="flex gap-2 justify-center items-center">
                        <ShieldCheck className="h-3.5 w-3.5 text-green-400" />
                        <span>End-to-End SSL secured. Your details remain confidential.</span>
                      </div>
                      <span className="text-[#d4af37]/80 font-medium">UP RERA Reg No.: UPRERAPRJ944626/09/2024</span>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-8 space-y-6 animate-fade-in">
                  <div className="h-16 w-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto text-green-400 shadow-sm">
                    <CheckCircle className="h-8 w-8" />
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#d4af37]">
                      Request Received
                    </h3>
                    <p className="font-body text-sm text-[#b3b3b3] mt-1.5 max-w-md mx-auto">
                      Thank you <strong>{formData.fullName}</strong>. Your request for Valencia Towers Phase 2 price list & floor plans has been logged. Our sales team will connect with you shortly.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <button
                      onClick={handleDownloadBrochure}
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e6c878] text-[#050505] font-body text-xs font-extrabold tracking-widest uppercase px-8 py-4.5 hover:opacity-95 transition-all shadow-lg rounded-sm"
                    >
                      <Download className="h-4 w-4" />
                      DOWNLOAD CATALOG
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
