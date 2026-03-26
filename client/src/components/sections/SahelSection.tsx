/**
 * Teranga Flow - Sahel Section
 * Regional presence with map image, active countries, and deployment roadmap.
 * Updated with full country list from PPTX presentation.
 */
import { MapPin, TrendingUp, Leaf } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import SectionTitle from "../SectionTitle";

const SAHEL_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/sahel-map-hXWYRv89h64NUB3Ho9VwFH.webp";

const activeCountries = [
  { name: "Sénégal", status: "Siège", flag: "🇸🇳" },
  { name: "Gambie", status: "Actif", flag: "🇬🇲" },
  { name: "Guinée", status: "Actif", flag: "🇬🇳" },
];

const deployments = [
  { name: "Mali", status: "En cours", flag: "🇲🇱" },
  { name: "Burkina Faso", status: "En cours", flag: "🇧🇫" },
  { name: "Niger", status: "En cours", flag: "🇳🇪" },
  { name: "Mauritanie", status: "En cours", flag: "🇲🇷" },
  { name: "Guinée-Bissau", status: "Planifié", flag: "🇬🇼" },
  { name: "Côte d'Ivoire", status: "Planifié", flag: "🇨🇮" },
];

export default function SahelSection() {
  return (
    <section id="sahel" className="relative py-20 md:py-28 bg-[#0B3D6E] overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-20">
          <path d="M0,80 L0,50 C240,20 480,70 720,40 C960,10 1200,60 1440,30 L1440,80 Z" fill="#0B3D6E" />
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#D4A843]/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-[#D4A843]/5 blur-3xl" />

      <div className="container relative z-10">
        <SectionTitle
          label="Présence régionale"
          title="Notre Ancrage Sahel"
          subtitle="Une couverture croissante en Afrique de l'Ouest pour accompagner vos projets où qu'ils soient."
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          {/* Map */}
          <AnimatedSection direction="left" className="lg:col-span-3">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={SAHEL_IMG}
                alt="Carte de présence Teranga TE en Afrique de l'Ouest"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D6E]/30 to-transparent" />
            </div>
          </AnimatedSection>

          {/* Countries info */}
          <AnimatedSection direction="right" className="lg:col-span-2">
            <div className="space-y-6">
              {/* Active countries */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-[#D4A843]" />
                  <h3 className="text-xl text-white font-['Outfit'] font-semibold">
                    Pays actifs
                  </h3>
                </div>
                <div className="space-y-3">
                  {activeCountries.map((country) => (
                    <div
                      key={country.name}
                      className="flex items-center justify-between p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-white font-['Outfit'] font-medium">
                          {country.flag} {country.name}
                        </span>
                      </div>
                      <span className="text-[#D4A843] text-sm font-['Outfit']">
                        {country.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deployments */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-[#D4A843]" />
                  <h3 className="text-xl text-white font-['Outfit'] font-semibold">
                    Déploiements 2026–2028
                  </h3>
                </div>
                <div className="space-y-3">
                  {deployments.map((country) => (
                    <div
                      key={country.name}
                      className="flex items-center justify-between p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#D4A843]/60" />
                        <span className="text-white/80 font-['Outfit'] font-medium">
                          {country.flag} {country.name}
                        </span>
                      </div>
                      <span className="text-white/50 text-sm font-['Outfit']">
                        {country.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vision */}
              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#D4A843]/10 to-transparent rounded-xl border border-[#D4A843]/20">
                <Leaf className="w-5 h-5 text-[#D4A843] mt-0.5 shrink-0" />
                <div>
                  <p className="text-white/90 text-sm font-['Outfit'] font-medium mb-1">
                    Objectif 2028
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Présence consolidée dans 6+ pays avec un impact ESG mesurable et un centre de formation technique régional.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-[99%]">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-20 rotate-180">
          <path d="M0,80 L0,50 C240,20 480,70 720,40 C960,10 1200,60 1440,30 L1440,80 Z" fill="#0B3D6E" />
        </svg>
      </div>
    </section>
  );
}
