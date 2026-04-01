/**
 * Teranga Flow - Expertises Section
 * 4 expertise domains with detailed sub-services, brand logos, and enriched descriptions.
 * Sand background with wave separators.
 */
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor, Zap, Sun, ClipboardCheck, Server, Cloud, ShieldCheck, Cable, Printer,
  BatteryCharging, Gauge, FileSearch, PanelTop, Warehouse, Battery, HardHat,
  ArrowRight, Network, Cog, BarChart3, Laptop, Wifi, Thermometer, Eye, Flame,
  Lock, Lightbulb, Smartphone, Wrench, CheckCircle,
} from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import SectionTitle from "../SectionTitle";
import { useLanguage } from "@/contexts/LanguageContext";

const ICT_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/expertise-ict-fBaDApo4qym68m9DBUzyBE.webp";
const ENERGY_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/expertise-energy-QxbZZfUAeoVkPzsMTwjhyn.webp";
const SOLAR_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/expertise-solar-VHKtkagtzLM9gKGVKD772C.webp";
const CONTROL_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/inspection-ascenseurs_8f6624e3.png";

export default function ExpertisesSection() {
  const [activeTab, setActiveTab] = useState("ict");
  const { t } = useLanguage();

  // Sub-section items stay the same (technical terms) but section titles/descriptions are translated
  const expertises = useMemo(() => [
    {
      id: "ict",
      icon: Monitor,
      title: t.expertises.ict.title,
      subtitle: t.expertises.ict.fullTitle,
      tagline: t.expertises.ict.tagline,
      description: t.expertises.ict.description,
      image: ICT_IMG,
      color: "#0B3D6E",
      subSections: [
        {
          title: "MPS (Managed Print Services)",
          icon: Printer,
          items: [
            "CAPEX / OPEX",
            "Multifunction, scanners, production printers",
            "Maintenance",
            "Leasing",
          ],
          brands: "Ricoh, Epson, Riso",
        },
        {
          title: "Workstations & Servers",
          icon: Laptop,
          items: ["Dell, HP, Lenovo", "Dell, HP, IBM", "OPEX packages"],
          brands: "Dell, HP, Lenovo, IBM",
        },
        {
          title: "Networks & Security",
          icon: ShieldCheck,
          items: ["Network equipment", "Network security", "Firewalls, switches, Wi-Fi"],
          brands: "Cisco, Fortinet, Ubiquiti",
        },
        {
          title: "Network Cabling",
          icon: Cable,
          items: ["Copper & fiber optic", "Patch panels", "Certification"],
          brands: "Legrand, Nexans, Belden",
        },
        {
          title: "Cloud, Virtualization & IT Management",
          icon: Cloud,
          items: ["Helpdesk 24/7", "VMware, Microsoft Azure", "Cybersecurity"],
          brands: "Microsoft, VMware",
        },
      ],
    },
    {
      id: "energy",
      icon: Zap,
      title: t.expertises.energy.title,
      subtitle: t.expertises.energy.fullTitle,
      tagline: t.expertises.energy.tagline,
      description: t.expertises.energy.description,
      image: ENERGY_IMG,
      color: "#C49535",
      subSections: [
        {
          title: "CFO (High Current)",
          icon: BatteryCharging,
          items: ["UPS, Generators", "Inverters, Voltage regulators", "Cabling, TGBT", "Preventive & corrective maintenance"],
          brands: "GE, Pramac, Kohler, Generac, APC, Eaton, Schneider, Socomec, Cummins, FG Wilson, Himoinsa, Eneria",
        },
        {
          title: "CFA (Low Current)",
          icon: Eye,
          items: ["Access control", "Fire detection", "CCTV, intrusion detection", "CFA cabling"],
          brands: "Honeywell, Hikvision, Axis, Vivotek, Paradox, Texecom, Siemens, Esser",
        },
        {
          title: "HVAC",
          icon: Thermometer,
          items: ["Air conditioning, chillers", "Cooling cabinets", "Installation & maintenance"],
          brands: "Daikin, Carrier, Airwell, Lennox",
        },
        {
          title: "Energy Audit",
          icon: Gauge,
          items: ["Consumption analysis & ROI", "Real-time monitoring", "OPEX packages"],
          brands: "",
        },
      ],
    },
    {
      id: "solar",
      icon: Sun,
      title: t.expertises.renewables.title,
      subtitle: t.expertises.renewables.fullTitle,
      tagline: t.expertises.renewables.tagline,
      description: t.expertises.renewables.description,
      image: SOLAR_IMG,
      color: "#5B7B3A",
      subSections: [
        {
          title: "Solar Photovoltaic",
          icon: PanelTop,
          items: ["On-Grid, Off-Grid, Hybrid", "Turnkey EPC", "EPC + Financing (OPEX)"],
          brands: "JA Solar, Jinko, Longi",
        },
        {
          title: "Solar Home System",
          icon: Smartphone,
          items: ["Modular kits", "Mobile payment (Pay-as-you-go)", "Remote monitoring"],
          brands: "Victron Energy, Bboxx, Mobisol, Schneider Electric",
        },
        {
          title: "Energy Monitoring & Reporting",
          icon: BarChart3,
          items: ["Real-time consumption tracking", "TOP 5 energy-consuming equipment", "Cost optimization", "Custom dashboards"],
          brands: "Fronius, Huawei, SMA, SolarEdge, Meteocontrol, Victron",
        },
        {
          title: "Storage & Micro-grids",
          icon: Battery,
          items: ["Li-ion batteries, EMS/BMS", "IoT monitoring 24/7", "Data centers, telecoms, public lighting"],
          brands: "Huawei, SMA, Victron",
        },
        {
          title: "EPC & Maintenance",
          icon: HardHat,
          items: ["Turnkey EPC projects", "Remote performance tracking", "O&M"],
          brands: "",
        },
      ],
    },
    {
      id: "control",
      icon: ClipboardCheck,
      title: t.expertises.control.title,
      subtitle: t.expertises.control.fullTitle,
      tagline: t.expertises.control.tagline,
      description: t.expertises.control.description,
      image: CONTROL_IMG,
      color: "#0B3D6E",
      subSections: [
        {
          title: "Certified Services",
          icon: FileSearch,
          items: ["Commissioning inspection", "EN 81-20/50 periodic controls", "Safety audits", "National registry & regulatory reporting"],
          brands: "",
        },
        {
          title: "Our Commitments",
          icon: CheckCircle,
          items: ["Approved body", "Reports within 48h", "Certified technicians", "National & regional coverage"],
          brands: "",
        },
      ],
    },
  ], [t]);

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
            label={t.expertises.label}
            title={t.expertises.title}
            subtitle={t.expertises.subtitle}
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
                <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
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
                    {active.tagline}
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
                          {t.expertises.brands}
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
                  {t.expertises.requestOffer}
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
