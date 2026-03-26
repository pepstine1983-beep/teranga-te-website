/**
 * Teranga Flow Design - Navbar Component
 * Warm, organic navigation with golden accents and fluid transitions.
 * Sticky header with background blur on scroll.
 */
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Expertises", href: "#expertises" },
  { label: "Références", href: "#references" },
  { label: "Sahel", href: "#sahel" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Detect active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
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
      <nav className="container flex items-center justify-between h-18 lg:h-20">
        {/* Logo */}
        <a
          href="#accueil"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#accueil");
          }}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0B3D6E] to-[#D4A843] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
            <span className="text-white font-[Outfit] font-bold text-lg leading-none">T</span>
          </div>
          <div className="flex flex-col">
            <span
              className={`font-[Outfit] font-bold text-lg leading-tight transition-colors ${
                scrolled ? "text-[#0B3D6E]" : "text-white"
              }`}
            >
              Teranga TE
            </span>
            <span
              className={`text-[10px] font-['Source_Sans_3'] tracking-wider uppercase transition-colors ${
                scrolled ? "text-[#D4A843]" : "text-[#D4A843]"
              }`}
            >
              Technology & Energy
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`relative px-4 py-2 text-sm font-['Outfit'] font-medium transition-colors rounded-full ${
                activeSection === link.href.replace("#", "")
                  ? scrolled
                    ? "text-[#0B3D6E]"
                    : "text-white"
                  : scrolled
                  ? "text-[#0B3D6E]/70 hover:text-[#0B3D6E]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
              {activeSection === link.href.replace("#", "") && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#D4A843] rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#D4A843] to-[#C49535] text-white text-sm font-['Outfit'] font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            <Phone className="w-4 h-4" />
            Devis gratuit
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
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-4 py-3 rounded-lg text-base font-['Outfit'] font-medium transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "bg-[#0B3D6E]/5 text-[#0B3D6E]"
                      : "text-[#0B3D6E]/70 hover:bg-[#0B3D6E]/5 hover:text-[#0B3D6E]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="mt-2 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-[#D4A843] to-[#C49535] text-white text-base font-['Outfit'] font-semibold rounded-full"
              >
                <Phone className="w-4 h-4" />
                Devis gratuit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
