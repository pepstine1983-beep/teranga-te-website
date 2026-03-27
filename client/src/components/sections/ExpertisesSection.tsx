/**
 * Teranga Flow - Expertises Section
 * 4 expertise domains with detailed sub-services, brand logos, and enriched descriptions.
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
  Laptop,
  Wifi,
  Thermometer,
  Eye,
  Flame,
  Lock,
  Lightbulb,
  Smartphone,
  Wrench,
  CheckCircle,
} from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import SectionTitle from "../SectionTitle";

const ICT_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/expertise-ict-fBaDApo4qym68m9DBUzyBE.webp";
const ENERGY_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/expertise-energy-QxbZZfUAeoVkPzsMTwjhyn.webp";
const SOLAR_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/expertise-solar-VHKtkagtzLM9gKGVKD772C.webp";
const CONTROL_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/inspection-ascenseurs_8f6624e3.png";

const expertises = [
  {
    id: "ict",
    icon: Monitor,
    title: "ICT",
    subtitle: "Technologies de l'Information",
    tagline: "Votre réseau ne s'arrête pas. Votre business non plus.",
    description:
      "Des infrastructures robustes pour une entreprise connectée et performante. Conception, déploiement et gestion d'infrastructures IT complètes avec des SLA contractuels et un support 24/7.",
    image: ICT_IMG,
    color: "#0B3D6E",
    subSections: [
      {
        title: "MPS (Managed Print Services)",
        icon: Printer,
        items: [
          "Modèles CAPEX ou OPEX selon vos besoins",
          "Imprimantes multifonctions, scanners, imprimantes de production",
          "Maintenance avec ou sans pièces de rechange",
          "Leasing : solution complète avec engagement de résultats",
        ],
        brands: "Ricoh, Epson, Riso",
      },
      {
        title: "Postes de travail & Serveurs",
        icon: Laptop,
        items: [
          "Postes de travail : Dell, HP, Lenovo",
          "Serveurs : Dell, HP, IBM",
          "Modèle OPEX : packages sur mesure avec engagement de résultats",
        ],
        brands: "Dell, HP, Lenovo, IBM",
      },
      {
        title: "Réseaux & Sécurité",
        icon: ShieldCheck,
        items: [
          "Matériel réseau : fourniture, installation, maintenance",
          "Sécurité réseau : protection et surveillance",
          "Firewalls, switches, points d'accès Wi-Fi",
        ],
        brands: "Cisco, Fortinet, Ubiquiti",
      },
      {
        title: "Câblage Réseau",
        icon: Cable,
        items: [
          "Câblage structuré cuivre et fibre optique",
          "Baies de brassage, chemins de câbles",
          "Certification et recette des installations",
        ],
        brands: "Legrand, Nexans, Belden",
      },
      {
        title: "Cloud, Virtualisation & Infogérance",
        icon: Cloud,
        items: [
          "Support & Helpdesk — supervision proactive 24/7",
          "Cloud & Virtualisation (VMware, Microsoft Azure)",
          "Cybersécurité : protection & conformité",
        ],
        brands: "Microsoft, VMware",
      },
    ],
  },
  {
    id: "energy",
    icon: Zap,
    title: "Énergie",
    subtitle: "CFO, CFA & CVC",
    tagline: "Garantir la continuité de vos opérations, en toute sécurité.",
    description:
      "Solutions complètes de production, distribution et sécurisation d'énergie. Audit énergétique, courant fort, courant faible, climatisation — un seul interlocuteur pour toute votre infrastructure.",
    image: ENERGY_IMG,
    color: "#C49535",
    subSections: [
      {
        title: "CFO (Courant Fort)",
        icon: BatteryCharging,
        items: [
          "Onduleurs (UPS), Groupes électrogènes",
          "Inverseurs, Régulateurs de tension",
          "Câblage, TGBT",
          "Maintenance préventive et corrective",
        ],
        brands: "GE, Pramac, Kohler, Generac, APC, Eaton, Schneider, Socomec, Cummins, FG Wilson, Himoinsa",
      },
      {
        title: "CFA (Courant Faible)",
        icon: Eye,
        items: [
          "Contrôle d'accès",
          "Détection incendie",
          "Vidéosurveillance, anti-intrusion",
          "Câblage CFA, sécurité physique et logique",
        ],
        brands: "Honeywell, Hikvision, Axis, Vivotek, Paradox, Texecom, Siemens, Esser",
      },
      {
        title: "CVC (Climatisation & Ventilation)",
        icon: Thermometer,
        items: [
          "Climatiseurs, groupes froids",
          "Armoires de refroidissement",
          "Installation et maintenance",
        ],
        brands: "Daikin, Carrier, Airwell, Lennox",
      },
      {
        title: "Audit Énergétique",
        icon: Gauge,
        items: [
          "Analyse des consommations et ROI",
          "Supervision & monitoring en temps réel",
          "Modèle OPEX : packages sur mesure",
        ],
        brands: "",
      },
    ],
  },
  {
    id: "solar",
    icon: Sun,
    title: "Énergies Renouvelables",
    subtitle: "Solaire Photovoltaïque & Stockage",
    tagline: "L'énergie du soleil au service de votre croissance.",
    description:
      "Conception et réalisation de centrales solaires, solutions hybrides et micro-réseaux. Modèles EPC clé en main avec options de financement CAPEX ou OPEX (Tiers-Investisseur). Notre offre intègre une solution de monitoring énergétique permettant de suivre en temps réel la consommation globale et par équipement, avec un reporting automatisé incluant le TOP 5 des équipements les plus énergivores.",
    image: SOLAR_IMG,
    color: "#5B7B3A",
    subSections: [
      {
        title: "Solaire Photovoltaïque",
        icon: PanelTop,
        items: [
          "On-Grid, Off-Grid, Hybride",
          "EPC clé en main : étude, fourniture, installation, formation",
          "EPC + Financement : modèle Tiers-Investisseur (OPEX)",
        ],
        brands: "JA Solar, Jinko, Longi",
      },
      {
        title: "Solar Home System",
        icon: Smartphone,
        items: [
          "Kits modulaires pour zones rurales",
          "Paiement mobile intégré (Pay-as-you-go)",
          "Monitoring à distance",
        ],
        brands: "Victron Energy, Bboxx, Mobisol, Schneider Electric",
      },
      {
        title: "Monitoring & Reporting Énergétique",
        icon: BarChart3,
        items: [
          "Suivi en temps réel de la consommation globale et par équipement",
          "Reporting automatisé : TOP 5 des équipements les plus énergivores",
          "Optimisation des coûts et détection des anomalies",
          "Tableaux de bord personnalisés pour le client",
        ],
        brands: "Fronius, Huawei, SMA, SolarEdge, Meteocontrol, Victron",
      },
      {
        title: "Stockage & Micro-réseaux",
        icon: Battery,
        items: [
          "Batteries Li-ion, EMS/BMS intelligents",
          "Monitoring IoT 24/7",
          "Applications : data centers, télécoms, éclairage public, agro-industrie",
        ],
        brands: "Huawei, SMA, Victron",
      },
      {
        title: "EPC & Maintenance",
        icon: HardHat,
        items: [
          "Projets EPC clé en main",
          "Suivi de performance à distance",
          "Opération & Maintenance (O&M)",
        ],
        brands: "",
      },
    ],
  },
  {
    id: "control",
    icon: ClipboardCheck,
    title: "Contrôle Technique Lift",
    subtitle: "Inspection & Conformité Ascenseurs",
    tagline: "La sécurité de vos ascenseurs, notre priorité.",
    description:
      "Inspection réglementaire et contrôle technique des ascenseurs et équipements de levage selon les normes européennes EN 81-20/50. Organisme agréé avec couverture nationale et régionale.",
    image: CONTROL_IMG,
    color: "#0B3D6E",
    subSections: [
      {
        title: "Services Certifiés",
        icon: FileSearch,
        items: [
          "Inspection de mise en service",
          "Contrôles périodiques : conformité EN 81-20/50",
          "Audits de sécurité : diagnostics et recommandations",
          "Registre national & reporting réglementaire",
        ],
        brands: "",
      },
      {
        title: "Nos Engagements",
        icon: CheckCircle,
        items: [
          "Organisme agréé",
          "Rapports sous 48h",
          "Techniciens certifiés",
          "Couverture nationale et régionale",
        ],
        brands: "",
      },
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
            title="Nos 4 Domaines d'Expertise"
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
            >
              {/* Hero banner with image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8 aspect-[21/8]">
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-white text-xs font-['Outfit'] font-semibold mb-2"
                    style={{ backgroundColor: active.color }}
                  >
                    {active.title}
                  </span>
                  <h3 className="text-2xl md:text-3xl text-white font-['Outfit'] font-bold mb-1">
                    {active.subtitle}
                  </h3>
                  <p className="text-white/80 italic text-sm md:text-base font-['DM_Serif_Display']">
                    "{active.tagline}"
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-xl p-5 border border-[#D4A843]/10 mb-8">
                <p className="text-[#0B3D6E]/80 text-sm md:text-base leading-relaxed">
                  {active.description}
                </p>
              </div>

              {/* Sub-sections grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                {active.subSections.map((sub, i) => (
                  <motion.div
                    key={sub.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-xl p-5 border border-[#D4A843]/10 hover:border-[#D4A843]/30 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${active.color}15` }}
                      >
                        <sub.icon className="w-5 h-5" style={{ color: active.color }} />
                      </div>
                      <h4 className="text-[#0B3D6E] font-['Outfit'] font-bold text-base">
                        {sub.title}
                      </h4>
                    </div>
                    <ul className="space-y-2 mb-3">
                      {sub.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-[#0B3D6E]/70">
                          <span className="text-[#D4A843] mt-0.5 shrink-0">&#10003;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {sub.brands && (
                      <div className="pt-3 border-t border-[#D4A843]/10">
                        <span className="text-xs font-['Outfit'] font-semibold text-[#D4A843] uppercase tracking-wider">
                          Marques :
                        </span>
                        <span className="text-xs text-[#0B3D6E]/60 ml-2">{sub.brands}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#D4A843] to-[#C49535] text-white font-['Outfit'] font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
                >
                  Demander une offre
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
