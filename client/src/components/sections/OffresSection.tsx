/**
 * Teranga Flow - Offres & Différenciation Section
 * Service formulas (4 tiers) + comparison table "Why Teranga TE".
 */
import { useMemo } from "react";
import { Wrench, Shield, Crown, Star, Check, X as XIcon, ArrowRight } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import SectionTitle from "../SectionTitle";
import { useLanguage } from "@/contexts/LanguageContext";

export default function OffresSection() {
  const { t, language } = useLanguage();

  const formulas = useMemo(() => [
    {
      name: t.offers.essentiel.name,
      target: t.offers.essentiel.target,
      icon: Wrench,
      color: "#6B7280",
      recommended: false,
      features: language === "fr"
        ? ["Maintenance Corrective sur appel", "Intervention sous 4h ouvrées", "Accès au portail de Ticketing", "Pièces de rechange facturées en sus"]
        : ["Corrective maintenance on call", "Intervention within 4 business hours", "Access to ticketing portal", "Spare parts billed separately"],
    },
    {
      name: t.offers.confort.name,
      target: t.offers.confort.target,
      icon: Shield,
      color: "#0B3D6E",
      recommended: false,
      features: language === "fr"
        ? ["Maintenance Préventive & Corrective", "Interventions illimitées (Main d'œuvre)", "Visites de contrôle trimestrielles", "Pièces majeures en option"]
        : ["Preventive & Corrective maintenance", "Unlimited interventions (labor)", "Quarterly control visits", "Major parts as option"],
    },
    {
      name: t.offers.premium.name,
      target: t.offers.premium.target,
      icon: Crown,
      color: "#D4A843",
      recommended: true,
      features: language === "fr"
        ? ["Support & Supervision 24h/7", "SLA Garanti (Disponibilité > 99%)", "Technicien dédié & Gestionnaire de compte", "Stock de consignation sur site", "Plan de progrès annuel inclus"]
        : ["24/7 Support & Supervision", "Guaranteed SLA (Availability > 99%)", "Dedicated technician & Account manager", "On-site consignment stock", "Annual progress plan included"],
    },
    {
      name: t.offers.surMesure.name,
      target: t.offers.surMesure.target,
      icon: Star,
      color: "#5B7B3A",
      recommended: false,
      features: language === "fr"
        ? ["Architecture Multi-sites / Régionale", "KPI spécifiques & Reporting personnalisé", "Engagement de Résultats", "Gestion de projet & Gouvernance"]
        : ["Multi-site / Regional architecture", "Specific KPIs & Custom reporting", "Results commitment", "Project management & Governance"],
    },
  ], [t, language]);

  const comparison = useMemo(() => language === "fr" ? [
    { criteria: "Approche", classic: "Mono-domaine / Silos", teranga: "Partenaire Unique Multi-domaines" },
    { criteria: "Réactivité & Standards", classic: "Délais rallongés", teranga: "Locale + Standards Internationaux" },
    { criteria: "Engagement de Service", classic: "SLA Non Garantis / Best Effort", teranga: "SLA 98%+ Contractuels" },
    { criteria: "Modèle Financier", classic: "Vente Unique (CAPEX)", teranga: "Flexible : CAPEX ou OPEX" },
    { criteria: "Support & Couverture", classic: "Heures Ouvrées / Limité", teranga: "Support 24/7 + Couverture Sahel" },
  ] : [
    { criteria: "Approach", classic: "Single-domain / Silos", teranga: "Single Multi-domain Partner" },
    { criteria: "Responsiveness & Standards", classic: "Extended delays", teranga: "Local + International Standards" },
    { criteria: "Service Commitment", classic: "Non-guaranteed SLA / Best Effort", teranga: "Contractual SLA 98%+" },
    { criteria: "Financial Model", classic: "One-time sale (CAPEX)", teranga: "Flexible: CAPEX or OPEX" },
    { criteria: "Support & Coverage", classic: "Business hours / Limited", teranga: "24/7 Support + Sahel Coverage" },
  ], [language]);

  return (
    <section id="offres" className="py-20 md:py-28 bg-background">
      <div className="container">
        <SectionTitle
          label={t.offers.label}
          title={t.offers.title}
          subtitle={t.offers.subtitle}
        />

        {/* Service formulas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {formulas.map((formula, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div
                className={`relative bg-white rounded-2xl p-6 border shadow-sm hover:shadow-lg transition-all h-full flex flex-col ${
                  formula.recommended
                    ? "border-[#D4A843] shadow-md ring-1 ring-[#D4A843]/20"
                    : "border-[#D4A843]/10"
                }`}
              >
                {formula.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#D4A843] text-white text-xs font-['Outfit'] font-semibold rounded-full">
                    {t.offers.recommended}
                  </div>
                )}

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${formula.color}15` }}
                >
                  <formula.icon className="w-6 h-6" style={{ color: formula.color }} />
                </div>

                <h4 className="font-['Outfit'] font-bold text-[#0B3D6E] text-xl mb-1">
                  {formula.name}
                </h4>
                <p className="text-[#0B3D6E]/50 text-xs font-['Outfit'] font-medium mb-5">
                  {formula.target}
                </p>

                <ul className="space-y-3 flex-1">
                  {formula.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#D4A843] mt-0.5 shrink-0" />
                      <span className="text-[#0B3D6E]/70 text-sm leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`mt-6 flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-['Outfit'] font-semibold transition-all ${
                    formula.recommended
                      ? "bg-gradient-to-r from-[#D4A843] to-[#C49535] text-white shadow-md hover:shadow-lg"
                      : "bg-[#0B3D6E]/5 text-[#0B3D6E] hover:bg-[#0B3D6E]/10"
                  }`}
                >
                  {t.offers.requestOffer}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Why Teranga TE - Comparison */}
        <SectionTitle
          label={t.offers.diffLabel}
          title={t.offers.diffTitle}
          subtitle={t.offers.diffSubtitle}
        />

        <AnimatedSection>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 text-[#0B3D6E]/60 text-sm font-['Outfit'] font-semibold uppercase tracking-wider bg-[#F7F3EB] rounded-tl-xl">
                    {t.offers.criteria}
                  </th>
                  <th className="text-center p-4 text-[#0B3D6E]/40 text-sm font-['Outfit'] font-semibold bg-[#F7F3EB]">
                    {t.offers.classic}
                  </th>
                  <th className="text-center p-4 text-[#0B3D6E] text-sm font-['Outfit'] font-semibold bg-[#D4A843]/10 rounded-tr-xl">
                    <span className="flex items-center justify-center gap-2">
                      <Star className="w-4 h-4 text-[#D4A843]" />
                      {t.offers.teranga}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.criteria}
                    className={i === comparison.length - 1 ? "" : "border-b border-[#0B3D6E]/5"}
                  >
                    <td className="p-4 text-[#0B3D6E] text-sm font-['Outfit'] font-medium">
                      {row.criteria}
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center gap-1.5 text-[#0B3D6E]/40 text-sm">
                        <XIcon className="w-4 h-4 text-red-400" />
                        {row.classic}
                      </span>
                    </td>
                    <td className="p-4 text-center bg-[#D4A843]/5">
                      <span className="inline-flex items-center gap-1.5 text-[#0B3D6E] text-sm font-medium">
                        <Check className="w-4 h-4 text-green-500" />
                        {row.teranga}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
