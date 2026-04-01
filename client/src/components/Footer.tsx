/**
 * Teranga Flow Design - Footer Component
 * Deep blue background with golden accents, organic wave top separator.
 */
import { Phone, Mail, MapPin, ArrowUp, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const expertises = [
    "ICT",
    t.expertises.energy.title,
    t.expertises.renewables.title,
    t.expertises.control.title,
  ];

  const quickLinks = [
    { label: t.nav.home, href: "#accueil" },
    { label: t.nav.about, href: "#apropos" },
    { label: t.nav.expertises, href: "#expertises" },
    { label: t.nav.references, href: "#references" },
    { label: t.nav.sahel, href: "#sahel" },
    { label: t.nav.contact, href: "#contact" },
    { label: t.nav.careers, href: "/carrieres" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0B3D6E] text-white overflow-hidden">
      {/* Wave separator top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path d="M0,80 L0,40 C240,70 480,10 720,40 C960,70 1200,10 1440,40 L1440,80 Z" fill="#0B3D6E" />
        </svg>
      </div>

      <div className="container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/logo_teranga-1_2298ef91.png"
                alt="Teranga Technology & Energy"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              {t.footer.tagline}
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[#D4A843] text-sm font-['Outfit'] font-medium hover:text-[#D4A843]/80 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
              {t.footer.backToTop}
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Outfit'] font-semibold text-[#D4A843] text-sm uppercase tracking-wider mb-5">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertises */}
          <div>
            <h4 className="font-['Outfit'] font-semibold text-[#D4A843] text-sm uppercase tracking-wider mb-5">
              {t.footer.ourExpertises}
            </h4>
            <ul className="space-y-3">
              {expertises.map((exp) => (
                <li key={exp}>
                  <span className="text-white/70 text-sm">{exp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Outfit'] font-semibold text-[#D4A843] text-sm uppercase tracking-wider mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#D4A843] mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-white/70 text-sm">+221 77 337 26 28</span>
                  <span className="text-white/70 text-sm">+221 33 843 59 27</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#D4A843] mt-0.5 shrink-0" />
                <a href="mailto:moussa.tine@teranga-te.com" className="text-white/70 text-sm hover:text-white transition-colors">
                  moussa.tine@teranga-te.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4A843] mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">3 Liberté 6 extension, Dakar</span>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-[#D4A843] mt-0.5 shrink-0" />
                <a href="https://www.teranga-te.com" target="_blank" rel="noopener noreferrer" className="text-white/70 text-sm hover:text-white transition-colors">
                  www.teranga-te.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} Teranga Technology & Energy. {t.footer.allRights}
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/50 text-xs">{t.footer.dakar}</span>
            <span className="text-white/50 text-xs">{t.footer.support247}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
