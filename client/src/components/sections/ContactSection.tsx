/**
 * Teranga Flow - Contact Section
 * Contact form, coordinates, interactive map, and CTA.
 */
import { useState, useRef } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Globe } from "lucide-react";
import { toast } from "sonner";
import AnimatedSection from "../AnimatedSection";
import SectionTitle from "../SectionTitle";
import { MapView } from "../Map";

const TERANGA_COORDS = { lat: 14.7167, lng: -17.4677 };

const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    values: ["+221 77 337 26 28", "+221 33 843 59 27"],
  },
  {
    icon: Mail,
    label: "Email",
    values: ["moussa.tine@teranga-te.com"],
  },
  {
    icon: MapPin,
    label: "Adresse",
    values: ["3 Liberté 6 extension, Dakar"],
  },
  {
    icon: Globe,
    label: "Site web",
    values: ["www.teranga-te.com"],
  },
  {
    icon: Clock,
    label: "Disponibilité",
    values: ["Support 24/7", "Réponse sous 48h"],
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const mapRef = useRef<google.maps.Map | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Votre message a été envoyé avec succès !");
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;

    // Add a marker at Teranga TE location
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map,
      position: TERANGA_COORDS,
      title: "Teranga Technology & Energy",
    });

    // Add info window
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

    // Open info window by default
    infoWindow.open({ anchor: marker, map });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container">
        <SectionTitle
          label="Parlons de votre projet"
          title="Contactez-nous"
          subtitle="Si vous avez besoin d'une offre, remplissez le formulaire ci-dessous en précisant quel type d'offre souhaiteriez-vous avoir en donnant le maximum d'informations sur votre besoin. Ensuite les équipes de Teranga vous contacteront dès que possible."
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
                    Offre personnalisée
                  </span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#0B3D6E]/10 to-transparent rounded-xl border border-[#0B3D6E]/10">
                  <CheckCircle className="w-4 h-4 text-[#0B3D6E]" />
                  <span className="text-[#0B3D6E] text-xs font-['Outfit'] font-medium">
                    Audit sur demande
                  </span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#5B7B3A]/10 to-transparent rounded-xl border border-[#5B7B3A]/20 col-span-2">
                  <CheckCircle className="w-4 h-4 text-[#5B7B3A]" />
                  <span className="text-[#0B3D6E] text-xs font-['Outfit'] font-medium">
                    Disponibilité immédiate
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
                Envoyez-nous un message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[#0B3D6E]/70 text-sm font-['Outfit'] font-medium mb-1.5">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F7F3EB] rounded-xl border border-[#D4A843]/10 text-[#0B3D6E] text-sm focus:outline-none focus:border-[#D4A843]/40 focus:ring-2 focus:ring-[#D4A843]/10 transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-[#0B3D6E]/70 text-sm font-['Outfit'] font-medium mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F7F3EB] rounded-xl border border-[#D4A843]/10 text-[#0B3D6E] text-sm focus:outline-none focus:border-[#D4A843]/40 focus:ring-2 focus:ring-[#D4A843]/10 transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[#0B3D6E]/70 text-sm font-['Outfit'] font-medium mb-1.5">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F7F3EB] rounded-xl border border-[#D4A843]/10 text-[#0B3D6E] text-sm focus:outline-none focus:border-[#D4A843]/40 focus:ring-2 focus:ring-[#D4A843]/10 transition-all"
                    placeholder="+221 XX XXX XX XX"
                  />
                </div>
                <div>
                  <label className="block text-[#0B3D6E]/70 text-sm font-['Outfit'] font-medium mb-1.5">
                    Sujet
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F7F3EB] rounded-xl border border-[#D4A843]/10 text-[#0B3D6E] text-sm focus:outline-none focus:border-[#D4A843]/40 focus:ring-2 focus:ring-[#D4A843]/10 transition-all"
                  >
                    <option value="devis">Demande de devis</option>
                    <option value="audit">Audit gratuit</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="support">Support technique</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-[#0B3D6E]/70 text-sm font-['Outfit'] font-medium mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#F7F3EB] rounded-xl border border-[#D4A843]/10 text-[#0B3D6E] text-sm focus:outline-none focus:border-[#D4A843]/40 focus:ring-2 focus:ring-[#D4A843]/10 transition-all resize-none"
                  placeholder="Décrivez votre projet ou besoin..."
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
                    Message envoyé !
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </AnimatedSection>
        </div>

        {/* Interactive Map */}
        <AnimatedSection direction="up" className="mt-14">
          <div className="relative rounded-2xl overflow-hidden border border-[#D4A843]/15 shadow-lg">
            {/* Map header bar */}
            <div className="bg-gradient-to-r from-[#0B3D6E] to-[#0B3D6E]/90 px-6 py-3 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#D4A843]" />
              <span className="font-['Outfit'] font-semibold text-white text-sm">
                Notre localisation — 3 Liberté 6 extension, Dakar, Sénégal
              </span>
            </div>
            {/* Google Map */}
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
