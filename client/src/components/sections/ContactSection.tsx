/**
 * Teranga Flow - Contact Section
 * Contact form, coordinates, and CTA.
 */
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import AnimatedSection from "../AnimatedSection";
import SectionTitle from "../SectionTitle";

const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    values: ["+221 33 843 59 27", "+221 77 337 26 28"],
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
    icon: Clock,
    label: "Disponibilité",
    values: ["Support 24/7"],
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    toast.success("Votre message a été envoyé avec succès !");
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container">
        <SectionTitle
          label="Parlons de votre projet"
          title="Contactez-nous"
          subtitle="Prenez rendez-vous, demandez un devis ou contactez-nous 24/7. Nous répondons sous 48h."
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
                    Devis gratuit
                  </span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#0B3D6E]/10 to-transparent rounded-xl border border-[#0B3D6E]/10">
                  <CheckCircle className="w-4 h-4 text-[#0B3D6E]" />
                  <span className="text-[#0B3D6E] text-xs font-['Outfit'] font-medium">
                    Audit offert
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
      </div>
    </section>
  );
}
