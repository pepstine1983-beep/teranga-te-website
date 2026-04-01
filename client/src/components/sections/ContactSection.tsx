/**
 * Teranga Flow - Contact Section
 * Contact form, coordinates, interactive map, and CTA.
 */
import { useState, useRef, useMemo } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Globe } from "lucide-react";
import { toast } from "sonner";
import AnimatedSection from "../AnimatedSection";
import SectionTitle from "../SectionTitle";
import { MapView } from "../Map";
import { useLanguage } from "@/contexts/LanguageContext";

const TERANGA_COORDS = { lat: 14.7167, lng: -17.4677 };

export default function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const mapRef = useRef<google.maps.Map | null>(null);

  const contactInfo = useMemo(() => [
    { icon: Phone, label: t.contact.phone, values: ["+221 77 337 26 28", "+221 33 843 59 27"] },
    { icon: Mail, label: t.contact.email, values: ["moussa.tine@teranga-te.com"] },
    { icon: MapPin, label: t.contact.address, values: ["3 Liberté 6 extension, Dakar"] },
    { icon: Globe, label: t.contact.website, values: ["www.teranga-te.com"] },
    { icon: Clock, label: t.contact.availability, values: [t.contact.support247, t.contact.response48h] },
  ], [t]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success(t.contact.successToast);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;

    const marker = new google.maps.marker.AdvancedMarkerElement({
      map,
      position: TERANGA_COORDS,
      title: "Teranga Technology & Energy",
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="padding: 8px 12px; font-family: 'Outfit', sans-serif; max-width: 240px;">
          <h3 style="margin: 0 0 4px 0; font-size: 14px; font-weight: 600; color: #0B3D6E;">Teranga Technology & Energy</h3>
          <p style="margin: 0 0 2px 0; font-size: 12px; color: #555;">3 Liberté 6 extension, Dakar, Sénégal</p>
          <p style="margin: 0; font-size: 12px; color: #D4A843; font-weight: 500;">+221 77 337 26 28</p>
        </div>
      `,
    });

    marker.addListener("click", () => {
      infoWindow.open({ anchor: marker, map });
    });

    infoWindow.open({ anchor: marker, map });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container">
        <SectionTitle
          label={t.contact.label}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#D4A843]/10 shadow-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0B3D6E]/10 to-[#D4A843]/10 flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-[#0B3D6E]" />
                  </div>
                  <div>
                    <p className="font-['Outfit'] font-semibold text-[#0B3D6E] text-sm mb-1">
                      {info.label}
                    </p>
                    {info.values.map((val) => (
                      <p key={val} className="text-[#0B3D6E]/60 text-sm">
                        {val}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* CTA badges */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#D4A843]/10 to-transparent rounded-xl border border-[#D4A843]/20">
                  <CheckCircle className="w-4 h-4 text-[#D4A843]" />
                  <span className="text-[#0B3D6E] text-xs font-['Outfit'] font-medium">
                    {t.contact.customOffer}
                  </span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#0B3D6E]/10 to-transparent rounded-xl border border-[#0B3D6E]/10">
                  <CheckCircle className="w-4 h-4 text-[#0B3D6E]" />
                  <span className="text-[#0B3D6E] text-xs font-['Outfit'] font-medium">
                    {t.contact.freeAudit}
                  </span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#5B7B3A]/10 to-transparent rounded-xl border border-[#5B7B3A]/20 col-span-2">
                  <CheckCircle className="w-4 h-4 text-[#5B7B3A]" />
                  <span className="text-[#0B3D6E] text-xs font-['Outfit'] font-medium">
                    {t.contact.immediateAvailability}
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection direction="right" className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 md:p-8 border border-[#D4A843]/10 shadow-sm"
            >
              <h3 className="text-xl text-[#0B3D6E] mb-6">
                {t.contact.formTitle}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[#0B3D6E]/70 text-sm font-['Outfit'] font-medium mb-1.5">
                    {t.contact.fullName}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F7F3EB] rounded-xl border border-[#D4A843]/10 text-[#0B3D6E] text-sm focus:outline-none focus:border-[#D4A843]/40 focus:ring-2 focus:ring-[#D4A843]/10 transition-all"
                    placeholder={t.contact.namePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-[#0B3D6E]/70 text-sm font-['Outfit'] font-medium mb-1.5">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F7F3EB] rounded-xl border border-[#D4A843]/10 text-[#0B3D6E] text-sm focus:outline-none focus:border-[#D4A843]/40 focus:ring-2 focus:ring-[#D4A843]/10 transition-all"
                    placeholder={t.contact.emailPlaceholder}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[#0B3D6E]/70 text-sm font-['Outfit'] font-medium mb-1.5">
                    {t.contact.phone}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F7F3EB] rounded-xl border border-[#D4A843]/10 text-[#0B3D6E] text-sm focus:outline-none focus:border-[#D4A843]/40 focus:ring-2 focus:ring-[#D4A843]/10 transition-all"
                    placeholder={t.contact.phonePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-[#0B3D6E]/70 text-sm font-['Outfit'] font-medium mb-1.5">
                    {t.contact.subject}
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F7F3EB] rounded-xl border border-[#D4A843]/10 text-[#0B3D6E] text-sm focus:outline-none focus:border-[#D4A843]/40 focus:ring-2 focus:ring-[#D4A843]/10 transition-all"
                  >
                    <option value="devis">{t.contact.subjectQuote}</option>
                    <option value="audit">{t.contact.subjectAudit}</option>
                    <option value="partenariat">{t.contact.subjectPartnership}</option>
                    <option value="support">{t.contact.subjectSupport}</option>
                    <option value="autre">{t.contact.subjectOther}</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-[#0B3D6E]/70 text-sm font-['Outfit'] font-medium mb-1.5">
                  {t.contact.message}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#F7F3EB] rounded-xl border border-[#D4A843]/10 text-[#0B3D6E] text-sm focus:outline-none focus:border-[#D4A843]/40 focus:ring-2 focus:ring-[#D4A843]/10 transition-all resize-none"
                  placeholder={t.contact.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#0B3D6E] to-[#0B3D6E]/90 text-white font-['Outfit'] font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-[1.01] transition-all disabled:opacity-70"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    {t.contact.sent}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t.contact.send}
                  </>
                )}
              </button>
            </form>
          </AnimatedSection>
        </div>

        {/* Interactive Map */}
        <AnimatedSection direction="up" className="mt-14">
          <div className="relative rounded-2xl overflow-hidden border border-[#D4A843]/15 shadow-lg">
            <div className="bg-gradient-to-r from-[#0B3D6E] to-[#0B3D6E]/90 px-6 py-3 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#D4A843]" />
              <span className="font-['Outfit'] font-semibold text-white text-sm">
                {t.contact.mapTitle}
              </span>
            </div>
            <MapView
              className="h-[400px] md:h-[450px]"
              initialCenter={TERANGA_COORDS}
              initialZoom={16}
              onMapReady={handleMapReady}
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
