/**
 * Teranga Flow - Expertises Section
 * 4 expertise domains with image cards, detailed service lists, and enriched descriptions.
 * Sand background with wave separators.
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Zap,
  Sun,
  ClipboardCheck,
  Server,
  Cloud,
  ShieldCheck,
  Cable,
  Printer,
  BatteryCharging,
  Gauge,
  FileSearch,
  PanelTop,
  Warehouse,
  Battery,
  HardHat,
  ArrowRight,
  Network,
  Cog,
  BarChart3,
} from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import SectionTitle from "../SectionTitle";

const ICT_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/expertise-ict-fBaDApo4qym68m9DBUzyBE.webp";
const ENERGY_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/expertise-energy-QxbZZfUAeoVkPzsMTwjhyn.webp";
const SOLAR_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/expertise-solar-VHKtkagtzLM9gKGVKD772C.webp";

const expertises = [
  {
    id: "ict",
    icon: Monitor,
    title: "ICT",
    subtitle: "Infrastructure & Services Managés",
    description:
      "Conception, déploiement et gestion d'infrastructures IT complètes. Nous couvrons l'ensemble du cycle de vie : audit, design, installation, infogérance et support 24/7 avec des SLA contractuels.",
    image: ICT_IMG,
    color: "#0B3D6E",
    services: [
      { icon: Printer, label: "MPS (Managed Print Services)", detail: "Ricoh, Riso, Epson" },
      { icon: Server, label: "Infogérance & Hébergement", detail: "Supervision proactive 24/7" },
      { icon: Cloud, label: "Cloud & Virtualisation", detail: "VMware, Microsoft Azure" },
      { icon: ShieldCheck, label: "Cybersécurité", detail: "Cisco, Fortinet" },
      { icon: Cable, label: "Câblage structuré & Réseaux", detail: "LAN, WAN, WiFi" },
      { icon: Network, label: "Réseaux & Télécoms", detail: "VoIP, Visioconférence" },
    ],
  },
  {
    id: "energy",
    icon: Zap,
    title: "Énergie",
    subtitle: "Alimentation & Continuité de Service",
    description:
      "Solutions complètes de production et distribution d'énergie pour garantir la continuité de vos opérations. Maintenance préventive et corrective de groupes électrogènes et onduleurs.",
    image: ENERGY_IMG,
    color: "#C49535",
    services: [
      { icon: BatteryCharging, label: "Groupes Électrogènes", detail: "Kohler — vente, installation, maintenance" },
      { icon: Battery, label: "Onduleurs (UPS)", detail: "Protection des équipements critiques" },
      { icon: Gauge, label: "Audits Énergétiques", detail: "Optimisation de la consommation" },
      { icon: Cog, label: "Maintenance Préventive", detail: "Contrats SLA 98%+" },
      { icon: BarChart3, label: "Supervision & Monitoring", detail: "Télésurveillance en temps réel" },
    ],
  },
  {
    id: "solar",
    icon: Sun,
    title: "Énergies Renouvelables",
    subtitle: "Solaire Photovoltaïque & Stockage",
    description:
      "Conception et réalisation de centrales solaires, solutions hybrides et micro-réseaux. Nous proposons des modèles EPC clé en main avec options de financement CAPEX ou OPEX.",
    image: SOLAR_IMG,
    color: "#5B7B3A",
    services: [
      { icon: PanelTop, label: "Solaire Photovoltaïque", detail: "JinKO Solar, JA Solar" },
      { icon: Warehouse, label: "Micro-réseaux & Hybride", detail: "Diesel-solaire, stockage" },
      { icon: Battery, label: "Stockage d'Énergie", detail: "Huawei, SMA, Victron Energy" },
      { icon: HardHat, label: "EPC Clé en Main", detail: "Étude, installation, mise en service" },
      { icon: BarChart3, label: "Monitoring & O&M", detail: "Suivi de performance à distance" },
    ],
  },
  {
    id: "control",
    icon: ClipboardCheck,
    title: "Contrôle Technique Lift",
    subtitle: "Inspection & Conformité Ascenseurs",
    description:
      "Inspection réglementaire et contrôle technique des ascenseurs et équipements de levage selon les normes européennes EN 81-20/50.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/inspection-ascenseurs_8f6624e3.png",
    color: "#0B3D6E",
    services: [
      { icon: FileSearch, label: "Inspection Ascenseurs", detail: "Contrôle périodique réglementaire" },
      { icon: ShieldCheck, label: "Conformité EN 81-20/50", detail: "Normes européennes" },
      { icon: ClipboardCheck, label: "Audits de Sécurité", detail: "Évaluation des risques" },
      { icon: Gauge, label: "Rapports de Conformité", detail: "Documentation complète" },
    ],
  },
];

export default function ExpertisesSection() {
  const [activeTab, setActiveTab] = useState("ict");
  const active = expertises.find((e) => e.id === activeTab)!;

  return (
    <section id="expertises" className="relative py-20 md:py-28">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 md:h-16">
          <path d="M0,60 L0,30 C360,0 720,50 1080,20 C1260,5 1380,30 1440,40 L1440,60 Z" fill="#F5F0E8" />
        </svg>
      </div>

      <div className="bg-[#F5F0E8]">
        <div className="container py-4">
          <SectionTitle
            label="Nos services"
            title="Nos Expertises"
            subtitle="Des solutions intégrées couvrant l'ensemble du cycle de vie technologique et énergétique de vos infrastructures critiques."
          />

          {/* Tab navigation */}
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {expertises.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(exp.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-['Outfit'] font-medium transition-all ${
                    activeTab === exp.id
                      ? "bg-[#0B3D6E] text-white shadow-lg"
                      : "bg-white text-[#0B3D6E]/70 hover:bg-white/80 border border-[#0B3D6E]/10"
                  }`}
                >
                  <exp.icon className="w-4 h-4" />
                  {exp.title}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Active expertise content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
            >
              {/* Image */}
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10]">
                  {active.image ? (
                    <img
                      src={active.image}
                      alt={active.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#0B3D6E] to-[#0B3D6E]/80 flex items-center justify-center">
                      <active.icon className="w-24 h-24 text-white/20" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-white text-xs font-['Outfit'] font-semibold mb-2"
                      style={{ backgroundColor: active.color }}
                    >
                      {active.title}
                    </span>
                    <h3 className="text-2xl text-white font-['Outfit'] font-bold">{active.subtitle}</h3>
                  </div>
                </div>
                {/* Description */}
                <p className="text-[#0B3D6E]/70 text-sm leading-relaxed bg-white rounded-xl p-5 border border-[#D4A843]/10">
                  {active.description}
                </p>
              </div>

              {/* Services list */}
              <div>
                <h3 className="text-xl text-[#0B3D6E] font-['Outfit'] font-bold mb-6">
                  Services {active.title}
                </h3>
                <div className="space-y-3">
                  {active.services.map((service, i) => (
                    <motion.div
                      key={service.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-[#D4A843]/10 hover:border-[#D4A843]/30 hover:shadow-md transition-all"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${active.color}15` }}
                      >
                        <service.icon className="w-5 h-5" style={{ color: active.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[#0B3D6E] font-['Outfit'] font-medium text-sm block">
                          {service.label}
                        </span>
                        <span className="text-[#0B3D6E]/50 text-xs">{service.detail}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#D4A843] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  ))}
                </div>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-[#D4A843] to-[#C49535] text-white font-['Outfit'] font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
                >
                  Demander un devis
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-[99%]">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 md:h-16 rotate-180">
          <path d="M0,60 L0,30 C360,0 720,50 1080,20 C1260,5 1380,30 1440,40 L1440,60 Z" fill="#F5F0E8" />
        </svg>
      </div>
    </section>
  );
}
