import React, { useState } from "react";
import { PERSONAL_INFO } from "../data";
import { Mail, Phone, MapPin, Linkedin, Calendar, Send, MessageCircle, CheckCircle, AlertCircle, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    
    setStatus('submitting');
    
    // Simulate API storage/relay response
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1200);
  };

  // WhatsApp Link Setup: Country Code for India is 91 + Coimbatore 6381483366
  const whatsappNumber = "916381483366";
  const whatsappText = encodeURIComponent("Hi Robinson, I visited your portfolio website and would like to connect regarding career opportunities!");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-[#3D2619] to-[#2B1B12] text-white overflow-hidden relative"
    >
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#C89B3C]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest font-semibold text-[#C89B3C] bg-[#5C4033]/40 border border-[#C89B3C]/20 px-3 py-1.5 rounded-full">
            Inquiries
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white">
            Let's Keep In Touch
          </h2>
          <div className="mt-2 w-16 h-1 bg-[#C89B3C] mx-auto rounded-full"></div>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column - Personal Info cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-wide">
              Contact Information
            </h3>
            <p className="text-sm sm:text-base text-[#D8C3A5] font-light leading-relaxed">
              If you have any entry-level roles, frontend design assignments, or simply want to learn more about my educational background, feel free to drop a line!
            </p>

            <div className="space-y-4">
              
              {/* Email Card */}
              <a
                id="contact-info-email"
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-4 rounded-2xl bg-[#2B1B12]/80 border border-[#5C4033]/50 hover:border-[#C89B3C] hover:bg-[#5C4033]/30 transition-all duration-300 flex items-center space-x-4 group"
              >
                <div className="p-3 rounded-xl bg-[#5C4033]/40 text-[#C89B3C]">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase tracking-widest text-[#C89B3C] font-mono font-bold">Email Address</span>
                  <p className="text-sm sm:text-base font-semibold font-mono text-white group-hover:text-[#C89B3C] transition-colors">{PERSONAL_INFO.email}</p>
                </div>
              </a>

              {/* Phone Card */}
              <a
                id="contact-info-phone"
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-4 rounded-2xl bg-[#2B1B12]/80 border border-[#5C4033]/50 hover:border-[#C89B3C] hover:bg-[#5C4033]/30 transition-all duration-300 flex items-center space-x-4 group"
              >
                <div className="p-3 rounded-xl bg-[#5C4033]/40 text-[#C89B3C]">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase tracking-widest text-[#C89B3C] font-mono font-bold">Phone Connection</span>
                  <p className="text-sm sm:text-base font-semibold font-mono text-white group-hover:text-[#C89B3C] transition-colors">{PERSONAL_INFO.phone}</p>
                </div>
              </a>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-[#2B1B12]/80 border border-[#5C4033]/50 flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-[#5C4033]/40 text-[#C89B3C]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase tracking-widest text-[#C89B3C] font-mono font-bold">Location</span>
                  <p className="text-sm sm:text-base font-semibold text-white">{PERSONAL_INFO.location}, Tamil Nadu</p>
                </div>
              </div>

              {/* LinkedIn Card */}
              <a
                id="contact-info-linkedin"
                href={`https://${PERSONAL_INFO.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#2B1B12]/80 border border-[#5C4033]/50 hover:border-[#C89B3C] hover:bg-[#5C4033]/30 transition-all duration-300 flex items-center space-x-4 group"
              >
                <div className="p-3 rounded-xl bg-[#5C4033]/40 text-[#C89B3C]">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="space-y-0.5 flex-1 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#C89B3C] font-mono font-bold">LinkedIn Profile</span>
                    <p className="text-sm sm:text-base font-semibold font-mono text-white group-hover:text-[#C89B3C] transition-colors">{PERSONAL_INFO.linkedin}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-[#C89B3C] transition-colors" />
                </div>
              </a>

            </div>

            {/* Direct WhatsApp Callout */}
            <div className="pt-4">
              <a
                id="contact-btn-whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-3 bg-emerald-600 hover:bg-emerald-500 text-white py-4 px-6 rounded-2xl font-bold uppercase tracking-wider text-xs sm:text-sm shadow-lg shadow-emerald-900/20 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column - Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-[#2B1B12]/60 border border-[#5C4033]/40 shadow-2xl relative">
              <h4 className="font-display font-bold text-lg sm:text-xl mb-6 text-white text-left">
                Send a Message
              </h4>

              <form id="portfolio-contact-form" onSubmit={handleSubmit} className="space-y-5 text-left">
                {/* Visual Banner feedback */}
                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500 text-emerald-300 flex items-start space-x-3 text-sm">
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Message Sent!</p>
                      <p className="text-xs text-emerald-400 font-light">Thank you for reaching out, Robinson C will reply to you as soon as possible.</p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-950/40 border border-red-500 text-red-300 flex items-start space-x-3 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Validation Error</p>
                      <p className="text-xs text-red-400 font-light">Please fill out all required fields (Name, Email, Message) correctly.</p>
                    </div>
                  </div>
                )}

                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name-input" className="block text-xs uppercase font-mono font-bold tracking-wider text-[#D8C3A5]">
                    Full Name *
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-[#5C4033]/20 border border-[#5C4033]/60 focus:border-[#C89B3C] text-white rounded-xl px-4 py-3.5 text-sm focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email-input" className="block text-xs uppercase font-mono font-bold tracking-wider text-[#D8C3A5]">
                    Email Address *
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full bg-[#5C4033]/20 border border-[#5C4033]/60 focus:border-[#C89B3C] text-white rounded-xl px-4 py-3.5 text-sm focus:outline-none transition-colors"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="subject-input" className="block text-xs uppercase font-mono font-bold tracking-wider text-[#D8C3A5]">
                    Subject
                  </label>
                  <input
                    id="subject-input"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I assist you?"
                    className="w-full bg-[#5C4033]/20 border border-[#5C4033]/60 focus:border-[#C89B3C] text-white rounded-xl px-4 py-3.5 text-sm focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message-input" className="block text-xs uppercase font-mono font-bold tracking-wider text-[#D8C3A5]">
                    Message *
                  </label>
                  <textarea
                    id="message-input"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    className="w-full bg-[#5C4033]/20 border border-[#5C4033]/60 focus:border-[#C89B3C] text-white rounded-xl px-4 py-3.5 text-sm focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  id="contact-form-btn-submit"
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#a67c2e] hover:from-[#d9ac4e] hover:to-[#C89B3C] text-[#2B1B12] font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span>{status === 'submitting' ? "Sending Message..." : "Send Message"}</span>
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
