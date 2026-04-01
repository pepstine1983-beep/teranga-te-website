/**
 * Teranga Flow - Hero Section
 * Full-screen immersive hero with Dakar cityscape, overlay gradient, and animated CTAs.
 */
import { motion } from "framer-motion";
import { ArrowRight, Shield, Headphones } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/hero-banner-TTaExixwVbHJLGVUv2gkRZ.webp";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Dakar skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D6E]/90 via-[#0B3D6E]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D6E]/50 via-transparent to-[#0B3D6E]/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-[#D4A843] animate-pulse" />
            <span className="text-white/90 text-sm font-['Outfit'] font-medium">
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
          >
            {t.hero.titlePart1}{" "}
            <span className="text-[#D4A843]">{t.hero.titleHighlight}</span>
            {t.hero.titlePart2}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mb-10 font-['Source_Sans_3']"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#D4A843] to-[#C49535] text-white font-['Outfit'] font-semibold rounded-full shadow-lg shadow-[#D4A843]/25 hover:shadow-xl hover:shadow-[#D4A843]/30 hover:scale-[1.03] transition-all"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#expertises"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("expertises")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-md text-white font-['Outfit'] font-semibold rounded-full border border-white/25 hover:bg-white/20 transition-all"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex flex-wrap gap-6"
          >
            <div className="flex items-center gap-2.5 text-white/70">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                <Shield className="w-4 h-4 text-[#D4A843]" />
              </div>
              <span className="text-sm font-['Outfit']">{t.hero.sla}</span>
            </div>
            <div className="flex items-center gap-2.5 text-white/70">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                <Headphones className="w-4 h-4 text-[#D4A843]" />
              </div>
              <span className="text-sm font-['Outfit']">{t.hero.support}</span>
            </div>
            <div className="flex items-center gap-2.5 text-white/70">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-[#D4A843] text-xs font-bold">6+</span>
              </div>
              <span className="text-sm font-['Outfit']">{t.hero.countries}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20"
        >
          <path
            d="M0,0 C360,80 720,0 1080,60 C1260,80 1380,40 1440,20 L1440,80 L0,80 Z"
            fill="oklch(0.99 0.005 80)"
          />
        </svg>
      </div>
    </section>
  );
}
