/**
 * Teranga Flow - Key Figures Section
 * Full-width animated counters band with golden/blue gradient.
 * Counters animate on scroll into viewport.
 */
import { Users, Building2, Globe, Clock, Shield, Zap } from "lucide-react";
import CounterAnimation from "../CounterAnimation";
import AnimatedSection from "../AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function KeyFiguresSection() {
  const { language } = useLanguage();

  const figures = [
    {
      icon: Users,
      target: 6,
      suffix: "",
      label: language === "fr" ? "Collaborateurs" : "Team Members",
      desc: language === "fr" ? "Experts certifiés" : "Certified experts",
    },
    {
      icon: Building2,
      target: 8,
      suffix: "",
      label: language === "fr" ? "Clients" : "Clients",
      desc: language === "fr" ? "Entreprises accompagnées" : "Companies supported",
    },
    {
      icon: Globe,
      target: 9,
      suffix: "",
      label: language === "fr" ? "Pays au Sahel" : "Sahel Countries",
      desc: language === "fr" ? "Couverture régionale" : "Regional coverage",
    },
    {
      icon: Shield,
      target: 98,
      suffix: "%",
      label: language === "fr" ? "SLA Garanti" : "Guaranteed SLA",
      desc: language === "fr" ? "Taux de disponibilité" : "Availability rate",
    },
    {
      icon: Clock,
      target: 24,
      suffix: "/7",
      label: "Support",
      desc: language === "fr" ? "Assistance continue" : "Continuous assistance",
    },
    {
      icon: Zap,
      target: 4,
      suffix: "",
      label: language === "fr" ? "Domaines d'expertise" : "Areas of Expertise",
      desc: language === "fr" ? "ICT, Énergie, Renouvelables, Contrôle" : "ICT, Energy, Renewables, Control",
    },
  ];

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D6E] via-[#0B3D6E]/95 to-[#0A2E54]" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-[#D4A843]/5 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#D4A843]/5 translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D4A843]/[0.02]" />

      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 md:h-14">
          <path d="M0,60 L0,30 C360,55 720,5 1080,30 C1260,42 1380,50 1440,30 L1440,60 Z" fill="#0B3D6E" />
        </svg>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-[99%]">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 md:h-14 rotate-180">
          <path d="M0,60 L0,30 C360,55 720,5 1080,30 C1260,42 1380,50 1440,30 L1440,60 Z" fill="#0B3D6E" />
        </svg>
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-block font-['Outfit'] font-semibold text-xs uppercase tracking-[0.2em] text-[#D4A843] mb-3">
              {language === "fr" ? "Teranga TE en chiffres" : "Teranga TE in Numbers"}
            </span>
            <h2 className="text-3xl md:text-4xl font-['DM_Serif_Display'] text-white">
              {language === "fr" ? "Nos chiffres clés" : "Our Key Figures"}
            </h2>
          </div>
        </AnimatedSection>

        {/* Counters grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {figures.map((fig, i) => (
            <AnimatedSection key={fig.label} delay={i * 0.08}>
              <div className="text-center group">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4A843]/20 group-hover:scale-110 transition-all duration-300 border border-white/10">
                  <fig.icon className="w-6 h-6 text-[#D4A843]" />
                </div>

                {/* Counter */}
                <div className="text-3xl md:text-4xl font-['Outfit'] font-bold text-white mb-1">
                  <CounterAnimation
                    target={fig.target}
                    suffix={fig.suffix}
                    duration={2500}
                  />
                </div>

                {/* Label */}
                <p className="font-['Outfit'] font-semibold text-white/90 text-sm mb-0.5">
                  {fig.label}
                </p>

                {/* Description */}
                <p className="text-white/50 text-xs font-['Outfit']">
                  {fig.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
