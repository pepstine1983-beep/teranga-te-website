/**
 * Teranga Flow - Careers Page
 * Presents company culture, benefits, job openings and application form.
 * Design: Sahélien organique with warm golden/blue palette.
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
  Send,
  GraduationCap,
  Heart,
  Globe,
  Rocket,
  Users,
  Shield,
  Sun,
  Zap,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CAREERS_HERO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/careers-hero-Kdn3TZmsZdigyAMGfnMJhP.webp";

/* ─── Culture values ─── */
const cultureValues = [
  {
    icon: Heart,
    title: "Teranga",
    desc: "L'hospitalité sénégalaise au cœur de nos relations. Chaque collaborateur est accueilli comme un membre de la famille.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    desc: "Nous encourageons l'initiative et la créativité. Chaque idée compte pour transformer le Sahel.",
  },
  {
    icon: GraduationCap,
    title: "Formation continue",
    desc: "Certifications Cisco, Fortinet, VMware, Microsoft… Nous investissons dans votre montée en compétences.",
  },
  {
    icon: Globe,
    title: "Impact régional",
    desc: "Travaillez sur des projets qui transforment les infrastructures de 6+ pays du Sahel.",
  },
];

/* ─── Benefits ─── */
const benefits = [
  { icon: Shield, label: "Couverture santé" },
  { icon: GraduationCap, label: "Certifications financées" },
  { icon: Sun, label: "Environnement bienveillant" },
  { icon: Users, label: "Équipe soudée" },
  { icon: Globe, label: "Mobilité régionale" },
  { icon: Zap, label: "Projets stimulants" },
];

/* ─── Job openings ─── */
const jobOpenings = [
  {
    id: 1,
    title: "Ingénieur Réseaux & Sécurité",
    department: "ICT",
    location: "Dakar, Sénégal",
    type: "CDI – Temps plein",
    description:
      "Vous concevez, déployez et administrez les infrastructures réseau et sécurité de nos clients. Vous assurez la supervision proactive et le support N2/N3 dans un environnement multi-clients.",
    requirements: [
      "Bac+5 en Informatique, Réseaux ou Télécommunications",
      "3+ ans d'expérience en administration réseau (Cisco, Fortinet)",
      "Certifications CCNA/CCNP ou NSE4+ appréciées",
      "Expérience en environnement multi-sites",
      "Français courant, anglais technique",
    ],
  },
  {
    id: 2,
    title: "Technicien Systèmes & Virtualisation",
    department: "ICT",
    location: "Dakar, Sénégal",
    type: "CDI – Temps plein",
    description:
      "Vous gérez les environnements serveurs et de virtualisation (VMware, Hyper-V) de nos clients. Vous participez aux projets de migration cloud et à l'infogérance quotidienne.",
    requirements: [
      "Bac+3/5 en Informatique ou Systèmes",
      "2+ ans d'expérience en administration Windows Server / Linux",
      "Connaissances VMware vSphere, Microsoft 365",
      "Capacité à travailler en astreinte (support 24/7)",
      "Sens du service client et rigueur",
    ],
  },
  {
    id: 3,
    title: "Ingénieur Énergie Solaire",
    department: "Énergies Renouvelables",
    location: "Dakar, Sénégal (déplacements régionaux)",
    type: "CDI – Temps plein",
    description:
      "Vous dimensionnez et supervisez l'installation de centrales solaires photovoltaïques (on-grid et off-grid). Vous assurez le suivi de performance et la maintenance des installations.",
    requirements: [
      "Bac+5 en Génie Électrique ou Énergies Renouvelables",
      "3+ ans d'expérience en dimensionnement et installation PV",
      "Maîtrise des onduleurs SMA, Huawei et des panneaux JinKO/JA Solar",
      "Disponibilité pour des déplacements au Sahel",
      "Permis de conduire requis",
    ],
  },
  {
    id: 4,
    title: "Chargé(e) Commercial(e) B2B",
    department: "Commercial",
    location: "Dakar, Sénégal",
    type: "CDI – Temps plein",
    description:
      "Vous développez le portefeuille clients de Teranga TE sur les segments PME et grands comptes. Vous identifiez les besoins, proposez des solutions adaptées et assurez le suivi commercial.",
    requirements: [
      "Bac+3/5 en Commerce, Marketing ou Gestion",
      "2+ ans d'expérience en vente B2B (services IT ou énergie)",
      "Excellentes capacités de négociation et de présentation",
      "Connaissance du tissu économique sénégalais et sahélien",
      "Maîtrise du français, wolof apprécié",
    ],
  },
  {
    id: 5,
    title: "Technicien MPS (Managed Print Services)",
    department: "ICT",
    location: "Dakar, Sénégal",
    type: "CDI – Temps plein",
    description:
      "Vous assurez l'installation, la maintenance et le suivi du parc d'impression de nos clients (Ricoh, Riso, Epson). Vous optimisez les coûts d'impression et garantissez la disponibilité des équipements.",
    requirements: [
      "Bac+2/3 en Maintenance Informatique ou Électronique",
      "Expérience en maintenance d'imprimantes multifonctions",
      "Connaissance des marques Ricoh, Riso ou Epson",
      "Autonomie et sens de l'organisation",
      "Permis de conduire souhaité",
    ],
  },
];

/* ─── Job Card Component ─── */
function JobCard({ job }: { job: (typeof jobOpenings)[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="bg-white rounded-2xl border border-[#D4A843]/10 hover:border-[#D4A843]/25 shadow-sm hover:shadow-md transition-all overflow-hidden"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 md:p-7"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block px-3 py-1 text-xs font-['Outfit'] font-semibold rounded-full bg-[#0B3D6E]/10 text-[#0B3D6E]">
                {job.department}
              </span>
              <span className="text-[#0B3D6E]/40 text-xs">#{job.id}</span>
            </div>
            <h3 className="text-lg md:text-xl font-['Outfit'] font-bold text-[#0B3D6E] mb-2">
              {job.title}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#0B3D6E]/60">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {job.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {job.type}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[#D4A843] font-['Outfit'] font-medium text-sm shrink-0">
            {expanded ? "Réduire" : "Voir le détail"}
            {expanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </div>
        </div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-7 pb-6 md:pb-7 border-t border-[#D4A843]/10 pt-5">
              <p className="text-[#0B3D6E]/70 leading-relaxed mb-5">
                {job.description}
              </p>
              <h4 className="font-['Outfit'] font-semibold text-[#0B3D6E] text-sm mb-3">
                Profil recherché :
              </h4>
              <ul className="space-y-2 mb-6">
                {job.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[#0B3D6E]/70">
                    <CheckCircle2 className="w-4 h-4 text-[#D4A843] mt-0.5 shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
              <a
                href="#postuler"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("postuler")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#D4A843] to-[#C49535] text-white text-sm font-['Outfit'] font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <Send className="w-4 h-4" />
                Postuler à cette offre
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Main Page ─── */
export default function Careers() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={CAREERS_HERO}
            alt="Équipe Teranga TE"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D6E]/90 via-[#0B3D6E]/70 to-[#0B3D6E]/50" />
        </div>
        <div className="relative z-10 container text-center py-32 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#D4A843]/20 text-[#D4A843] text-sm font-['Outfit'] font-semibold mb-6 backdrop-blur-sm border border-[#D4A843]/30">
              Rejoignez l'aventure Teranga
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-['DM_Serif_Display'] text-white leading-tight mb-6">
              Construisez l'avenir du{" "}
              <span className="text-[#D4A843]">Sahel</span> avec nous
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              Rejoignez une équipe passionnée qui transforme les infrastructures
              technologiques et énergétiques de l'Afrique de l'Ouest.
            </p>
            <a
              href="#offres"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("offres")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#D4A843] to-[#C49535] text-white font-['Outfit'] font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              <Briefcase className="w-5 h-5" />
              Voir nos offres
            </a>
          </motion.div>
        </div>
      </section>

      {/* Back to home link */}
      <div className="container pt-8">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-[#0B3D6E]/60 hover:text-[#0B3D6E] text-sm font-['Outfit'] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </a>
      </div>

      {/* Culture Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block font-['Outfit'] font-semibold text-xs uppercase tracking-[0.2em] text-[#D4A843] mb-3">
              Notre culture
            </span>
            <h2 className="text-3xl md:text-4xl font-['DM_Serif_Display'] text-[#0B3D6E] mb-4">
              Pourquoi travailler chez Teranga TE ?
            </h2>
            <p className="text-[#0B3D6E]/60 max-w-2xl mx-auto">
              Chez Teranga TE, nous croyons que les meilleurs talents s'épanouissent
              dans un environnement qui valorise l'excellence, l'hospitalité et l'impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {cultureValues.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group bg-white rounded-2xl p-6 border border-[#D4A843]/10 hover:border-[#D4A843]/30 shadow-sm hover:shadow-md transition-all text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4A843]/20 to-[#D4A843]/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <val.icon className="w-6 h-6 text-[#D4A843]" />
                </div>
                <h3 className="font-['Outfit'] font-semibold text-[#0B3D6E] text-lg mb-2">
                  {val.title}
                </h3>
                <p className="text-[#0B3D6E]/60 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Benefits strip */}
          <div className="bg-gradient-to-r from-[#0B3D6E] to-[#0B3D6E]/90 rounded-2xl p-8 md:p-10">
            <h3 className="text-white font-['Outfit'] font-bold text-xl text-center mb-8">
              Nos avantages
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {benefits.map((b) => (
                <div key={b.label} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                    <b.icon className="w-5 h-5 text-[#D4A843]" />
                  </div>
                  <span className="text-white/80 text-sm font-['Outfit']">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="offres" className="py-16 md:py-24 bg-[#F8F5F0]">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block font-['Outfit'] font-semibold text-xs uppercase tracking-[0.2em] text-[#D4A843] mb-3">
              Nos offres
            </span>
            <h2 className="text-3xl md:text-4xl font-['DM_Serif_Display'] text-[#0B3D6E] mb-4">
              Postes ouverts
            </h2>
            <p className="text-[#0B3D6E]/60 max-w-2xl mx-auto">
              Découvrez nos opportunités actuelles et trouvez le poste qui correspond
              à vos ambitions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {jobOpenings.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="postuler" className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block font-['Outfit'] font-semibold text-xs uppercase tracking-[0.2em] text-[#D4A843] mb-3">
                Candidature
              </span>
              <h2 className="text-3xl md:text-4xl font-['DM_Serif_Display'] text-[#0B3D6E] mb-4">
                Postulez maintenant
              </h2>
              <p className="text-[#0B3D6E]/60">
                Envoyez-nous votre candidature et nous vous recontacterons sous 48h.
              </p>
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
              >
                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-['Outfit'] font-bold text-green-800 mb-2">
                  Candidature envoyée !
                </h3>
                <p className="text-green-700">
                  Merci pour votre intérêt. Notre équipe RH vous recontactera sous 48h.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-[#D4A843]/10 shadow-sm p-6 md:p-8 space-y-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-['Outfit'] font-medium text-[#0B3D6E] mb-1.5">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Votre nom"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#0B3D6E]/15 focus:border-[#D4A843] focus:ring-2 focus:ring-[#D4A843]/20 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-['Outfit'] font-medium text-[#0B3D6E] mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="votre@email.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#0B3D6E]/15 focus:border-[#D4A843] focus:ring-2 focus:ring-[#D4A843]/20 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-['Outfit'] font-medium text-[#0B3D6E] mb-1.5">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      placeholder="+221 XX XXX XX XX"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#0B3D6E]/15 focus:border-[#D4A843] focus:ring-2 focus:ring-[#D4A843]/20 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-['Outfit'] font-medium text-[#0B3D6E] mb-1.5">
                      Poste souhaité *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-[#0B3D6E]/15 focus:border-[#D4A843] focus:ring-2 focus:ring-[#D4A843]/20 outline-none transition-all text-sm text-[#0B3D6E]/70"
                    >
                      <option value="">Sélectionnez un poste</option>
                      {jobOpenings.map((job) => (
                        <option key={job.id} value={job.title}>
                          {job.title}
                        </option>
                      ))}
                      <option value="candidature-spontanee">Candidature spontanée</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-['Outfit'] font-medium text-[#0B3D6E] mb-1.5">
                    Message / Motivation *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Présentez-vous brièvement et expliquez votre motivation..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#0B3D6E]/15 focus:border-[#D4A843] focus:ring-2 focus:ring-[#D4A843]/20 outline-none transition-all text-sm resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-['Outfit'] font-medium text-[#0B3D6E] mb-1.5">
                    Lien vers votre CV (Google Drive, LinkedIn, etc.)
                  </label>
                  <input
                    type="url"
                    placeholder="https://..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#0B3D6E]/15 focus:border-[#D4A843] focus:ring-2 focus:ring-[#D4A843]/20 outline-none transition-all text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D4A843] to-[#C49535] text-white font-['Outfit'] font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-[1.01] transition-all"
                >
                  <Send className="w-4 h-4" />
                  Envoyer ma candidature
                </button>

                <p className="text-center text-[#0B3D6E]/40 text-xs">
                  Vos données sont traitées conformément à notre politique de confidentialité.
                  Nous vous recontacterons sous 48h.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
