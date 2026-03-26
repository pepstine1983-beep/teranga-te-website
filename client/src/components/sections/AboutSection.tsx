/**
 * Teranga Flow - About Section
 * Story-driven layout with timeline, vision 2028, and 4 pillars.
 */
import { Target, Users, Clock, Award } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import SectionTitle from "../SectionTitle";
import CounterAnimation from "../CounterAnimation";

const pillars = [
  {
    icon: Target,
    title: "Partenaire Unique",
    desc: "Multi-domaines : ICT, Énergie, Renouvelables et Contrôle technique en un seul interlocuteur.",
  },
  {
    icon: Award,
    title: "SLA 98%+",
    desc: "Des engagements de service mesurables et garantis pour vos infrastructures critiques.",
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

export default function AboutSection() {
  return (
    <section id="apropos" className="py-20 md:py-28 bg-background">
      <div className="container">
        <SectionTitle
          label="Qui sommes-nous"
          title="À propos de Teranga TE"
          subtitle="Fondée en 2026 à Dakar, Teranga TE incarne la rencontre entre expertise technique et excellence RH."
        />

        {/* Story + Vision grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-20">
          {/* Story */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D4A843] to-[#0B3D6E] rounded-full hidden md:block" />
              <div className="md:pl-8">
                <h3 className="text-2xl text-[#0B3D6E] mb-4">Notre Histoire</h3>
                <p className="text-[#0B3D6E]/70 leading-relaxed mb-6">
                  Fondée par <strong>Papa Moussa Tine</strong> et <strong>AfriRH</strong>, Teranga TE
                  est née de la conviction que l'Afrique de l'Ouest mérite des services managés de
                  haut niveau, alliant réactivité locale et standards internationaux.
                </p>
                <p className="text-[#0B3D6E]/70 leading-relaxed">
                  Notre nom, <em>Teranga</em>, évoque l'hospitalité sénégalaise — une valeur que nous
                  portons dans chaque interaction avec nos clients et partenaires.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Vision 2028 */}
          <AnimatedSection direction="right">
            <div className="bg-gradient-to-br from-[#0B3D6E] to-[#0B3D6E]/90 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#D4A843]/10" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[#D4A843]/5" />

              <div className="relative z-10">
                <span className="inline-block font-['Outfit'] font-semibold text-xs uppercase tracking-[0.2em] text-[#D4A843] mb-3">
                  Vision 2028
                </span>
                <h3 className="text-2xl text-white mb-4">
                  Référence technologique du Sahel
                </h3>
                <p className="text-white/80 leading-relaxed mb-8">
                  Devenir le partenaire technologique de référence au Sahel pour les
                  infrastructures critiques, avec une présence consolidée dans 6+ pays et un
                  impact ESG mesurable.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-[Outfit] font-bold text-[#D4A843]">
                      <CounterAnimation target={6} suffix="+" />
                    </div>
                    <span className="text-white/60 text-xs font-['Outfit']">Pays</span>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-[Outfit] font-bold text-[#D4A843]">
                      <CounterAnimation target={98} suffix="%" />
                    </div>
                    <span className="text-white/60 text-xs font-['Outfit']">SLA garanti</span>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-[Outfit] font-bold text-[#D4A843]">
                      24/7
                    </div>
                    <span className="text-white/60 text-xs font-['Outfit']">Support</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* 4 Pillars */}
        <AnimatedSection>
          <h3 className="text-2xl text-[#0B3D6E] text-center mb-10">
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
