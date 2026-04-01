/**
 * Teranga Flow - About Section
 * Story-driven layout with MD message, vision 2028, 4 pillars, and Teranga DNA.
 */
import { Target, Users, Clock, Award, Lightbulb, HandshakeIcon, Leaf, Globe, Quote } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import SectionTitle from "../SectionTitle";
import CounterAnimation from "../CounterAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const MD_PHOTO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/PHOTO-2026-03-31-12-32-49_c13313d5.jpg";

export default function AboutSection() {
  const { t } = useLanguage();

  const pillars = [
    { icon: Target, title: t.about.pillarUnique, desc: t.about.pillarUniqueDesc },
    { icon: Award, title: t.about.pillarSLA, desc: t.about.pillarSLADesc },
    { icon: Users, title: t.about.pillarTeam, desc: t.about.pillarTeamDesc },
    { icon: Clock, title: t.about.pillarSupport, desc: t.about.pillarSupportDesc },
  ];

  const dnaValues = [
    { icon: Lightbulb, title: t.about.dnaExcellence, desc: t.about.dnaExcellenceDesc },
    { icon: HandshakeIcon, title: t.about.dnaTeranga, desc: t.about.dnaTerrangaDesc },
    { icon: Leaf, title: t.about.dnaESG, desc: t.about.dnaESGDesc },
    { icon: Globe, title: t.about.dnaSahel, desc: t.about.dnaSahelDesc },
  ];

  return (
    <section id="apropos" className="py-20 md:py-28 bg-background">
      <div className="container">
        <SectionTitle
          label={t.about.label}
          title={t.about.title}
          subtitle={t.about.subtitle}
        />

        {/* MD Message + Story grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
          {/* Managing Director Message */}
          <AnimatedSection direction="left">
            <div className="relative bg-white rounded-2xl border border-[#D4A843]/15 shadow-sm overflow-hidden h-full">
              <div className="h-1.5 bg-gradient-to-r from-[#0B3D6E] via-[#D4A843] to-[#0B3D6E]" />
              <div className="p-6 md:p-8">
                <div className="w-10 h-10 rounded-full bg-[#D4A843]/10 flex items-center justify-center mb-5">
                  <Quote className="w-5 h-5 text-[#D4A843]" />
                </div>
                <h3 className="text-xl text-[#0B3D6E] font-['DM_Serif_Display'] italic mb-5">
                  {t.about.mdTitle}
                </h3>
                <p className="text-[#0B3D6E]/75 leading-relaxed mb-4 text-[15px]">
                  {t.about.mdQuote1}
                </p>
                <p className="text-[#0B3D6E]/75 leading-relaxed mb-4 text-[15px]">
                  {t.about.mdQuote2}{" "}
                  <em>{t.about.mdQuote2Italic}</em>.
                </p>
                <p className="text-[#0B3D6E]/75 leading-relaxed mb-6 text-[15px]">
                  {t.about.mdQuote3}
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-[#D4A843]/10">
                  <img
                    src={MD_PHOTO}
                    alt={`${t.about.mdName} - ${t.about.mdRole}`}
                    className="w-16 h-16 rounded-full object-cover object-top border-2 border-[#D4A843]/30 shadow-md"
                  />
                  <div>
                    <p className="font-['Outfit'] font-bold text-[#0B3D6E] text-base">
                      {t.about.mdName}
                    </p>
                    <p className="text-[#D4A843] font-['Outfit'] font-medium text-sm">
                      {t.about.mdRole}
                    </p>
                    <p className="text-[#0B3D6E]/50 text-xs font-['Outfit']">
                      {t.about.mdFounder}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Vision 2028 */}
          <AnimatedSection direction="right">
            <div className="flex flex-col gap-6 h-full">
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D4A843] to-[#0B3D6E] rounded-full hidden md:block" />
                <div className="md:pl-8">
                  <h3 className="text-2xl text-[#0B3D6E] font-['Outfit'] font-bold mb-4">{t.about.storyTitle}</h3>
                  <p className="text-[#0B3D6E]/70 leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: t.about.storyP1 }} />
                  <p className="text-[#0B3D6E]/70 leading-relaxed">
                    {t.about.storyP2}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#0B3D6E] to-[#0B3D6E]/90 rounded-2xl p-7 md:p-8 text-white relative overflow-hidden flex-1">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#D4A843]/10" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[#D4A843]/5" />
                <div className="relative z-10">
                  <span className="inline-block font-['Outfit'] font-semibold text-xs uppercase tracking-[0.2em] text-[#D4A843] mb-2">
                    {t.about.visionLabel}
                  </span>
                  <h3 className="text-xl text-white font-['Outfit'] font-bold mb-3">
                    {t.about.visionTitle}
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-6 text-sm">
                    {t.about.visionDesc}
                  </p>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-[Outfit] font-bold text-[#D4A843]">
                        <CounterAnimation target={6} suffix="" />
                      </div>
                      <span className="text-white/60 text-xs font-['Outfit']">{t.about.collaborators}</span>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-[Outfit] font-bold text-[#D4A843]">
                        <CounterAnimation target={8} suffix="" />
                      </div>
                      <span className="text-white/60 text-xs font-['Outfit']">{t.about.clients}</span>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-[Outfit] font-bold text-[#D4A843]">
                        <CounterAnimation target={98} suffix="%" />
                      </div>
                      <span className="text-white/60 text-xs font-['Outfit']">{t.about.slaGuaranteed}</span>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-[Outfit] font-bold text-[#D4A843]">
                        24/7
                      </div>
                      <span className="text-white/60 text-xs font-['Outfit']">{t.about.support}</span>
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
            {t.about.dnaTitle}
          </h3>
          <p className="text-center text-[#0B3D6E]/60 text-sm max-w-2xl mx-auto mb-10">
            {t.about.dnaSubtitle}
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {dnaValues.map((val, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
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
            {t.about.pillarsTitle}
          </h3>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
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
