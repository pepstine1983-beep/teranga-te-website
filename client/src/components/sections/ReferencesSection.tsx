/**
 * Teranga Flow - References & Partners Section
 * Partner logos, testimonials, and trust indicators.
 */
import { Quote } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import SectionTitle from "../SectionTitle";

const partners = [
  { name: "IBM", color: "#0530AD" },
  { name: "Palo Alto Networks", color: "#FA582D" },
  { name: "APC", color: "#E4002B" },
  { name: "Cummins", color: "#E31937" },
  { name: "Schneider Electric", color: "#3DCD58" },
  { name: "Cisco", color: "#049FD9" },
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
          subtitle="Des PME aux grands groupes, nos solutions accompagnent les leaders du Sahel."
        />

        {/* Partner logos */}
        <AnimatedSection className="mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group flex items-center justify-center h-24 bg-white rounded-xl border border-[#D4A843]/10 hover:border-[#D4A843]/30 hover:shadow-md transition-all"
              >
                <div className="flex flex-col items-center gap-1">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-['Outfit'] font-bold text-sm"
                    style={{ backgroundColor: partner.color }}
                  >
                    {partner.name.charAt(0)}
                  </div>
                  <span className="text-[#0B3D6E]/70 text-xs font-['Outfit'] font-medium text-center px-2 leading-tight">
                    {partner.name}
                  </span>
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
