/**
 * Teranga Flow - Section Title Component
 * Elegant serif title with golden accent line and subtitle.
 */
import AnimatedSection from "./AnimatedSection";

interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionTitleProps) {
  return (
    <AnimatedSection
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {label && (
        <span className="inline-block font-['Outfit'] font-semibold text-xs uppercase tracking-[0.2em] text-[#D4A843] mb-3">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 ${
          light ? "text-white" : "text-[#0B3D6E]"
        }`}
      >
        {title}
      </h2>
      {/* Gold accent line */}
      <div
        className={`flex items-center gap-2 mb-5 ${
          align === "center" ? "justify-center" : "justify-start"
        }`}
      >
        <div className="w-8 h-0.5 bg-[#D4A843] rounded-full" />
        <div className="w-2 h-2 rounded-full bg-[#D4A843]" />
        <div className="w-8 h-0.5 bg-[#D4A843] rounded-full" />
      </div>
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/80" : "text-[#0B3D6E]/70"}`}
        >
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
