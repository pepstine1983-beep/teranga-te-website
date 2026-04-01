/**
 * Teranga Flow - References & Partners Section
 * Real client logos, technology partner logos organized by expertise domain.
 */
import { Quote } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import SectionTitle from "../SectionTitle";

const clients = [
  {
    name: "AfriRH",
    sector: "RH & Conseil",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image201_00e0a760.png",
  },
  {
    name: "Afriland Company",
    sector: "Immobilier & Bâtiment",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image206_c20c5a56.png",
  },
  {
    name: "Godifa Technologies",
    sector: "Technologies & Innovation",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image202_c5943d34.png",
  },
  {
    name: "HCP",
    sector: "Conseil & Projets",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image203_58b2eb9c.jpeg",
  },
  {
    name: "NBW Law Firm",
    sector: "Service Juridique",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image204_a16db25c.png",
  },
  {
    name: "Al Amine Groupe",
    sector: "GED & Archivage",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image205_5802c025.png",
  },
  {
    name: "KAI NU DEM",
    sector: "Transport & Mobilité",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/kai-nu-dem-logo_192e88c7.png",
  },
  {
    name: "KPMG Sénégal",
    sector: "Audit & Conseil",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/s4TCDTV7TKKT_725f6646.png",
  },
];

const partnerCategories = [
  {
    category: "ICT — Réseaux, Sécurité, Postes & Serveurs",
    partners: [
      { name: "Cisco", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image193_63a1a8c4.png" },
      { name: "Fortinet", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image194_01fd48b2.png" },
      { name: "VMware", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image171_f57b395b.png" },
      { name: "Microsoft", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image177_a34dc56b.png" },
      { name: "HP", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image174_e5423688.png" },
      { name: "Dell", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/dell-logo_d1d2b961.png" },
      { name: "Lenovo", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/lenovo-logo_7e69ca57.png" },
      { name: "Ubiquiti", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/ubiquiti-logo_7fbfc0cd.jpg" },
      { name: "IBM", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/ibm-logo_204320a8.png" },
    ],
  },
  {
    category: "Impression (MPS)",
    partners: [
      { name: "Ricoh", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image173_b629c911.png" },
      { name: "Riso", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image172_ae44fdd3.png" },
      { name: "Epson", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image186_21629bff.png" },
    ],
  },
  {
    category: "Énergie — CFO (Groupes Électrogènes & Onduleurs)",
    partners: [
      { name: "GE", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/ge-logo_51b1241f.png" },
      { name: "Pramac", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/pramac-logo_9b0008fa.jpg" },
      { name: "Kohler", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image184_bab07b6a.png" },
      { name: "Generac", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/generac-logo_76ea1bc3.png" },
      { name: "Cummins", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/cummins-logo_ab3a2cc7.png" },
      { name: "FG Wilson", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/fgwilson-logo_6bacf4b3.png" },
      { name: "Himoinsa", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/himoinsa-logo_b637e6cc.png" },
      { name: "APC", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/apc-logo_62697785.png" },
      { name: "Eaton", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/eaton-logo_0e601af6.png" },
      { name: "Schneider Electric", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/schneider-logo_11a20a22.png" },
      { name: "Socomec", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/socomec-logo_bd0ddfb9.png" },
      { name: "Eneria", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/pasted_file_R5hNKK_image_d1246687.png" },
    ],
  },
  {
    category: "Énergie — CFA (Sécurité Incendie & Vidéosurveillance)",
    partners: [
      { name: "Honeywell", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/honeywell-logo_4f7980e1.png" },
      { name: "Hikvision", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/hikvision-logo_fa1182e0.png" },
      { name: "Axis", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/axis-logo_c3629772.png" },
      { name: "Vivotek", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/vivotek-logo_624e6be0.png" },
      { name: "Paradox", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/paradox-logo_bff5e653.png" },
      { name: "Texecom", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/texecom-logo_c62b2018.webp" },
      { name: "Siemens", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/siemens-logo_69f31f7e.png" },
      { name: "Esser", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/esser-logo_dd316ba3.jpg" },
    ],
  },
  {
    category: "Énergie — CVC (Climatisation & Ventilation)",
    partners: [
      { name: "Daikin", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/daikin-logo_cf1d433d.png" },
      { name: "Carrier", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/carrier-logo_2f9fffcc.png" },
      { name: "Airwell", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/airwell-logo_7cc02f2b.png" },
      { name: "Lennox", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/lennox-logo_3b37c11d.jpg" },
    ],
  },
  {
    category: "Câblage Réseau",
    partners: [
      { name: "Legrand", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/legrand-logo_2d450622.png" },
      { name: "Nexans", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/nexans-logo_c6f5cdec.png" },
      { name: "Belden", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/belden-logo_70735edc.png" },
    ],
  },
  {
    category: "Énergies Renouvelables — Solaire PV & Stockage",
    partners: [
      { name: "JinKO Solar", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image191_5c39e4d9.png" },
      { name: "JA Solar", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image192_30b97b2e.png" },
      { name: "Longi", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/longi-logo_50b50407.png" },
      { name: "Huawei", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image188_8c88e19f.png" },
      { name: "SMA", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image189_9679846e.png" },
      { name: "Victron Energy", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image187_84633471.png" },
    ],
  },
  {
    category: "Solar Home System",
    partners: [
      { name: "Victron Energy", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image187_84633471.png" },
      { name: "Bboxx", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/bboxx-logo_b3fa2fd2.jpg" },
      { name: "Mobisol", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/mobisol-logo_f9439dc9.jpg" },
      { name: "Schneider Electric", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/schneider-logo_11a20a22.png" },
    ],
  },
  {
    category: "Monitoring Énergétique",
    partners: [
      { name: "Fronius", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/fronius-logo_36d87f91.png" },
      { name: "Huawei", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image188_8c88e19f.png" },
      { name: "SMA", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image189_9679846e.png" },
      { name: "SolarEdge", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/solaredge-logo_d5aae24e.png" },
      { name: "Meteocontrol", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/meteocontrol-logo_bd415863.png" },
      { name: "Victron", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/image187_84633471.png" },
    ],
  },
];

const testimonials = [
  {
    quote:
      "Teranga TE a transformé notre infrastructure IT avec un professionnalisme remarquable. Leur support 24/7 est un véritable atout pour notre activité.",
    author: "Directeur IT",
    company: "Groupe industriel, Dakar",
  },
  {
    quote:
      "L'installation solaire réalisée par Teranga TE nous permet de réduire nos coûts énergétiques de 40%. Un partenaire fiable et innovant.",
    author: "Responsable Opérations",
    company: "PME, Sénégal",
  },
];

export default function ReferencesSection() {
  return (
    <section id="references" className="py-20 md:py-28 bg-background">
      <div className="container">
        <SectionTitle
          label="Ils nous font confiance"
          title="Références & Partenaires"
          subtitle="Nos clients nous choisissent pour notre expertise, notre réactivité et notre engagement à leurs côtés."
        />

        {/* Client logos */}
        <AnimatedSection className="mb-16">
          <h3 className="text-xl text-[#0B3D6E] text-center mb-8 font-['Outfit'] font-semibold">
            Nos Clients
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group flex flex-col items-center justify-center h-28 bg-white rounded-xl border border-[#D4A843]/10 hover:border-[#D4A843]/30 hover:shadow-md transition-all p-4"
              >
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 max-w-[100px] object-contain mb-2 group-hover:scale-105 transition-transform"
                  />
                ) : (
                  <div className="h-12 flex items-center justify-center mb-2">
                    <span className="text-[#0B3D6E] font-['Outfit'] font-bold text-xl">
                      {client.name}
                    </span>
                  </div>
                )}
                <span className="text-[#0B3D6E]/50 text-[10px] font-['Outfit'] text-center leading-tight">
                  {client.sector}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Technology Partners by domain */}
        <AnimatedSection className="mb-16">
          <h3 className="text-xl text-[#0B3D6E] text-center mb-10 font-['Outfit'] font-semibold">
            Partenaires Technologiques
          </h3>
          <div className="space-y-10">
            {partnerCategories.map((cat) => (
              <div key={cat.category}>
                <p className="text-sm font-['Outfit'] font-medium text-[#D4A843] uppercase tracking-wider mb-4 text-center">
                  {cat.category}
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {cat.partners.map((partner) => (
                    <div
                      key={partner.name}
                      className="group flex flex-col items-center justify-center h-20 w-28 bg-white rounded-xl border border-[#0B3D6E]/5 hover:border-[#D4A843]/20 hover:shadow-sm transition-all p-2"
                    >
                      {partner.logo ? (
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="h-8 max-w-[90px] object-contain group-hover:scale-105 transition-transform"
                        />
                      ) : (
                        <span className="text-[#0B3D6E] font-['Outfit'] font-bold text-sm text-center">
                          {partner.name}
                        </span>
                      )}
                      <span className="text-[#0B3D6E]/40 text-[9px] font-['Outfit'] mt-1 text-center leading-tight">
                        {partner.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="relative bg-white rounded-2xl p-8 border border-[#D4A843]/10 shadow-sm h-full">
                {/* Quote icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4A843] to-[#C49535] flex items-center justify-center shadow-md">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>

                <p className="text-[#0B3D6E]/80 leading-relaxed mb-6 mt-2 italic">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0B3D6E]/10 to-[#D4A843]/10 flex items-center justify-center">
                    <span className="text-[#0B3D6E] font-['Outfit'] font-bold text-sm">
                      {t.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-[#0B3D6E] font-['Outfit'] font-semibold text-sm">
                      {t.author}
                    </p>
                    <p className="text-[#0B3D6E]/50 text-xs">{t.company}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
