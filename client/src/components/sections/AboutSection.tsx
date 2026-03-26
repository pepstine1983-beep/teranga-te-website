/**
 * Teranga Flow - About Section
 * Story-driven layout with MD message, vision 2028, 4 pillars, and Teranga DNA.
 */
import { Target, Users, Clock, Award, Lightbulb, HandshakeIcon, Leaf, Globe, Quote } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import SectionTitle from "../SectionTitle";
import CounterAnimation from "../CounterAnimation";

const MD_PHOTO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/md-papa-moussa-tine_afce5590.png";

const pillars = [
  {
    icon: Target,
    title: "Partenaire Unique",
    desc: "Multi-domaines : ICT, Énergie, Renouvelables et Contrôle technique en un seul interlocuteur.",
  },
  {
    icon: Award,
    title: "SLA 98%+",
    desc: "Des engagements de service mesurables et garantis contractuellement pour vos infrastructures critiques.",
  },
  {
    icon: Users,
    title: "Équipe Senior",
    desc: "Des experts certifiés avec une expérience terrain approfondie en Afrique de l'Ouest.",
  },
  {
    icon: Clock,
    title: "Support 24/7",
    desc: "Une disponibilité permanente avec des temps de réponse adaptés à vos enjeux.",
  },
];

const dnaValues = [
  {
    icon: Lightbulb,
    title: "Excellence Technique",
    desc: "Standards internationaux appliqués localement avec rigueur et expertise.",
  },
  {
    icon: HandshakeIcon,
    title: "Teranga (Hospitalité)",
    desc: "L'hospitalité sénégalaise au cœur de chaque relation client et partenaire.",
  },
  {
    icon: Leaf,
    title: "Engagement ESG",
    desc: "Impact environnemental et social mesurable dans chacun de nos projets.",
  },
  {
    icon: Globe,
    title: "Ancrage Sahélien",
    desc: "Connaissance profonde du terrain et des réalités locales du Sahel.",
  },
];

export default function AboutSection() {
  return (
    <section id="apropos" className="py-20 md:py-28 bg-background">
      <div className="container">
        <SectionTitle
          label="Qui sommes-nous"
          title="À propos de Teranga TE"
          subtitle="Fondée en 2026 à Dakar, Teranga TE incarne la rencontre entre expertise technique de haut niveau et excellence RH au service du Sahel."
        />

        {/* MD Message + Story grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
          {/* Managing Director Message */}
          <AnimatedSection direction="left">
            <div className="relative bg-white rounded-2xl border border-[#D4A843]/15 shadow-sm overflow-hidden h-full">
              {/* Decorative top bar */}
              <div className="h-1.5 bg-gradient-to-r from-[#0B3D6E] via-[#D4A843] to-[#0B3D6E]" />

              <div className="p-6 md:p-8">
                {/* Quote icon */}
                <div className="w-10 h-10 rounded-full bg-[#D4A843]/10 flex items-center justify-center mb-5">
                  <Quote className="w-5 h-5 text-[#D4A843]" />
                </div>

                <h3 className="text-xl text-[#0B3D6E] font-['DM_Serif_Display'] italic mb-5">
                  Le mot du Directeur Général
                </h3>

                <p className="text-[#0B3D6E]/75 leading-relaxed mb-4 text-[15px]">
                  « Chez Teranga TE, nous croyons que l'Afrique de l'Ouest mérite des services technologiques
                  et énergétiques de classe mondiale, délivrés avec la chaleur et la proximité qui font
                  la force de notre continent.
                </p>
                <p className="text-[#0B3D6E]/75 leading-relaxed mb-4 text-[15px]">
                  Notre ambition est simple : être le partenaire unique qui transforme la complexité
                  technique en avantage compétitif pour nos clients. Chaque projet que nous menons
                  porte notre signature — l'excellence technique alliée à l'hospitalité sénégalaise,
                  la <em>Teranga</em>.
                </p>
                <p className="text-[#0B3D6E]/75 leading-relaxed mb-6 text-[15px]">
                  Ensemble, construisons les infrastructures qui porteront la croissance du Sahel. »
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-[#D4A843]/10">
                  <img
                    src={MD_PHOTO}
                    alt="Papa Moussa TINE - Managing Director"
                    className="w-16 h-16 rounded-full object-cover object-top border-2 border-[#D4A843]/30 shadow-md"
                  />
                  <div>
                    <p className="font-['Outfit'] font-bold text-[#0B3D6E] text-base">
                      Papa Moussa TINE
                    </p>
                    <p className="text-[#D4A843] font-['Outfit'] font-medium text-sm">
                      Managing Director
                    </p>
                    <p className="text-[#0B3D6E]/50 text-xs font-['Outfit']">
                      Fondateur de Teranga TE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Vision 2028 */}
          <AnimatedSection direction="right">
            <div className="flex flex-col gap-6 h-full">
              {/* Story */}
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D4A843] to-[#0B3D6E] rounded-full hidden md:block" />
                <div className="md:pl-8">
                  <h3 className="text-2xl text-[#0B3D6E] font-['Outfit'] font-bold mb-4">Notre Histoire</h3>
                  <p className="text-[#0B3D6E]/70 leading-relaxed mb-3">
                    Fondée par <strong>Papa Moussa TINE</strong> et <strong>AfriRH</strong>, Teranga TE
                    est née de la conviction que l'Afrique de l'Ouest mérite des services managés de
                    haut niveau, alliant réactivité locale et standards internationaux.
                  </p>
                  <p className="text-[#0B3D6E]/70 leading-relaxed">
                    Avec un modèle financier flexible (CAPEX ou OPEX), nous nous adaptons à la structure
                    de chaque client, des TPE aux grands groupes multi-sites.
                  </p>
                </div>
              </div>

              {/* Vision 2028 card */}
              <div className="bg-gradient-to-br from-[#0B3D6E] to-[#0B3D6E]/90 rounded-2xl p-7 md:p-8 text-white relative overflow-hidden flex-1">
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#D4A843]/10" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[#D4A843]/5" />

                <div className="relative z-10">
                  <span className="inline-block font-['Outfit'] font-semibold text-xs uppercase tracking-[0.2em] text-[#D4A843] mb-2">
                    Vision 2028
                  </span>
                  <h3 className="text-xl text-white font-['Outfit'] font-bold mb-3">
                    Référence technologique du Sahel
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-6 text-sm">
                    Devenir le partenaire technologique de référence au Sahel pour les
                    infrastructures critiques, avec une présence consolidée dans 6+ pays et un
                    impact ESG mesurable.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-[Outfit] font-bold text-[#D4A843]">
                        <CounterAnimation target={6} suffix="+" />
                      </div>
                      <span className="text-white/60 text-xs font-['Outfit']">Pays</span>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-[Outfit] font-bold text-[#D4A843]">
                        <CounterAnimation target={98} suffix="%" />
                      </div>
                      <span className="text-white/60 text-xs font-['Outfit']">SLA garanti</span>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-[Outfit] font-bold text-[#D4A843]">
                        24/7
                      </div>
                      <span className="text-white/60 text-xs font-['Outfit']">Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* ADN Teranga */}
        <AnimatedSection className="mb-16">
          <h3 className="text-2xl text-[#0B3D6E] text-center font-['Outfit'] font-bold mb-3">
            L'ADN Teranga
          </h3>
          <p className="text-center text-[#0B3D6E]/60 text-sm max-w-2xl mx-auto mb-10">
            Nos valeurs fondatrices guident chaque décision et chaque projet que nous menons.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {dnaValues.map((val, i) => (
            <AnimatedSection key={val.title} delay={i * 0.1}>
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4A843]/20 to-[#D4A843]/5 flex items-center justify-center mx-auto mb-4">
                  <val.icon className="w-6 h-6 text-[#D4A843]" />
                </div>
                <h4 className="font-['Outfit'] font-semibold text-[#0B3D6E] text-base mb-2">
                  {val.title}
                </h4>
                <p className="text-[#0B3D6E]/60 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* 4 Pillars */}
        <AnimatedSection>
          <h3 className="text-2xl text-[#0B3D6E] text-center font-['Outfit'] font-bold mb-10">
            Nos 4 piliers de force
          </h3>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={i * 0.1}>
              <div className="group bg-white rounded-2xl p-6 border border-[#D4A843]/10 hover:border-[#D4A843]/30 shadow-sm hover:shadow-md transition-all h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B3D6E]/10 to-[#D4A843]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <pillar.icon className="w-6 h-6 text-[#0B3D6E]" />
                </div>
                <h4 className="font-['Outfit'] font-semibold text-[#0B3D6E] text-lg mb-2">
                  {pillar.title}
                </h4>
                <p className="text-[#0B3D6E]/60 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
