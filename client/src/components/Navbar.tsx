/**
 * Teranga Flow Design - Navbar Component
 * Warm, organic navigation with golden accents and fluid transitions.
 * Sticky header with background blur on scroll.
 * Supports both anchor links (home page) and route links (Careers).
 * Includes FR/EN language switcher.
 */
import { useState, useEffect } from "react";
import { Menu, X, Phone, Users, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");
  const [location] = useLocation();
  const isHome = location === "/";
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "#accueil" },
    { label: t.nav.about, href: "#apropos" },
    { label: t.nav.expertises, href: "#expertises" },
    { label: t.nav.offers, href: "#offres" },
    { label: t.nav.references, href: "#references" },
    { label: t.nav.sahel, href: "#sahel" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const sectionIds = ["accueil", "apropos", "expertises", "offres", "references", "sahel", "contact"];
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (!isHome) return;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      if (isHome) {
        const el = document.getElementById(href.replace("#", ""));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        window.location.href = "/" + href;
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-[0_2px_20px_rgba(11,61,110,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-20 lg:h-24">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663476210552/X8H4fjGbsgzCUU4Ftp9pLB/logo_teranga-1_2298ef91.png"
            alt="Teranga Technology & Energy"
            className={`h-14 lg:h-16 w-auto object-contain transition-all rounded-lg px-2 py-1 ${
              scrolled ? "" : "bg-white/90 backdrop-blur-sm shadow-sm"
            }`}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={isHome ? link.href : "/" + link.href}
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  handleNavClick(link.href);
                }
              }}
              className={`relative px-3 py-2 text-sm font-['Outfit'] font-medium transition-colors rounded-full ${
                isHome && activeSection === link.href.replace("#", "")
                  ? scrolled
                    ? "text-[#0B3D6E]"
                    : "text-white"
                  : scrolled
                  ? "text-[#0B3D6E]/70 hover:text-[#0B3D6E]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
              {isHome && activeSection === link.href.replace("#", "") && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#D4A843] rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </a>
          ))}

          {/* Carrières link */}
          <a
            href="/carrieres"
            className={`relative px-3 py-2 text-sm font-['Outfit'] font-medium transition-colors rounded-full ${
              !isHome
                ? scrolled
                  ? "text-[#0B3D6E]"
                  : "text-white"
                : scrolled
                ? "text-[#0B3D6E]/70 hover:text-[#0B3D6E]"
                : "text-white/80 hover:text-white"
            }`}
          >
            {t.nav.careers}
            {!isHome && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#D4A843] rounded-full"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
          </a>
        </div>

        {/* CTA + Language Switcher + Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-['Outfit'] font-semibold transition-all border ${
              scrolled
                ? "border-[#0B3D6E]/20 text-[#0B3D6E] hover:bg-[#0B3D6E]/5"
                : "border-white/30 text-white hover:bg-white/10"
            }`}
            aria-label="Switch language"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{language === "fr" ? "EN" : "FR"}</span>
          </button>

          <a
            href={isHome ? "#contact" : "/#contact"}
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                handleNavClick("#contact");
              }
            }}
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#D4A843] to-[#C49535] text-white text-sm font-['Outfit'] font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            <Phone className="w-4 h-4" />
            {t.nav.contactUs}
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-[#0B3D6E]" : "text-white"
            }`}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-[#D4A843]/20 overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={isHome ? link.href : "/" + link.href}
                  onClick={(e) => {
                    if (isHome) {
                      e.preventDefault();
                      handleNavClick(link.href);
                    } else {
                      setMobileOpen(false);
                    }
                  }}
                  className={`px-4 py-3 rounded-lg text-base font-['Outfit'] font-medium transition-colors ${
                    isHome && activeSection === link.href.replace("#", "")
                      ? "bg-[#0B3D6E]/5 text-[#0B3D6E]"
                      : "text-[#0B3D6E]/70 hover:bg-[#0B3D6E]/5 hover:text-[#0B3D6E]"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              {/* Carrières mobile link */}
              <a
                href="/carrieres"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-['Outfit'] font-medium transition-colors flex items-center gap-2 ${
                  !isHome
                    ? "bg-[#0B3D6E]/5 text-[#0B3D6E]"
                    : "text-[#0B3D6E]/70 hover:bg-[#0B3D6E]/5 hover:text-[#0B3D6E]"
                }`}
              >
                <Users className="w-4 h-4" />
                {t.nav.careers}
              </a>

              {/* Language switcher mobile */}
              <button
                onClick={toggleLanguage}
                className="px-4 py-3 rounded-lg text-base font-['Outfit'] font-medium transition-colors flex items-center gap-2 text-[#0B3D6E]/70 hover:bg-[#0B3D6E]/5 hover:text-[#0B3D6E]"
              >
                <Globe className="w-4 h-4" />
                {language === "fr" ? "English" : "Français"}
              </button>

              <a
                href={isHome ? "#contact" : "/#contact"}
                onClick={(e) => {
                  if (isHome) {
                    e.preventDefault();
                    handleNavClick("#contact");
                  } else {
                    setMobileOpen(false);
                  }
                }}
                className="mt-2 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-[#D4A843] to-[#C49535] text-white text-base font-['Outfit'] font-semibold rounded-full"
              >
                <Phone className="w-4 h-4" />
                {t.nav.contactUs}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
