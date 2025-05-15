import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import MobileNavMenu from "./MobileNavMenu";
import LordIcon from "./LordIcon";
import { useResponsive } from "../hooks/useResponsive";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile } = useResponsive();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Verificar se as seções estão disponíveis
    const checkSections = () => {
      const sections = ["home", "about", "products", "testimonials", "contact"];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) console.warn(`Seção #${id} não encontrada`);
      });
    };

    // Executar verificação após carregamento da página
    setTimeout(checkSections, 1000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Quando abrimos o menu, garantimos que o comportamento de rolagem é adequado
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };

  const getHeaderClass = () => {
    if (isMobile && isMenuOpen) {
      return "bg-white";
    }

    if (scrolled || isMenuOpen) {
      return "bg-[var(--bg-primary)]/95 backdrop-blur shadow-lg";
    }

    return "bg-transparent";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 py-3 sm:py-4 transition-all duration-300 ${getHeaderClass()}`}
    >
      <div className="container mx-auto w-full px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between relative w-full">
          {" "}
          <div className="flex items-center z-50">
            <a
              href="#home"
              className="flex items-center group"
              onClick={closeMenu}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-[var(--color-accent)]/20 transition-all duration-300">
                <LordIcon
                  src="https://cdn.lordicon.com/xlsnmber.json"
                  trigger="loop"
                  colors={{
                    primary: "#000000",
                    secondary: "#000000",
                  }}
                  size={isMobile ? 50 : 60}
                />
              </div>
              <div>
                <div className="font-bold text-lg sm:text-xl text-[var(--color-accent)] font-serif">
                  Artisanal
                </div>
                <div className="text-xs sm:text-sm text-[var(--text-secondary)] uppercase tracking-widest">
                  BAKERY
                </div>
              </div>
            </a>
          </div>
          {/* Menu desktop */}
          <Nav className="hidden lg:flex pointer-events-auto" />
          {/* Botão de encomenda desktop */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="py-2 px-4 sm:px-6 bg-[var(--color-accent)] text-white text-sm sm:text-base rounded-full hover:shadow-lg transition-all duration-300 flex items-center"
            >
              <span>Encomendar</span>
            </a>{" "}
          </div>{" "}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 z-50 text-black"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? (
                <LordIcon
                  src="https://cdn.lordicon.com/yvrdhjfn.json"
                  trigger="in"
                  delay={1500}
                  state="in-reveal"
                  size={28}
                  colors={{
                    primary: "#000000",
                    secondary: "#000000",
                  }}
                />
              ) : (
                <LordIcon
                  src="https://cdn.lordicon.com/yvrdhjfn.json"
                  trigger="in"
                  delay={1500}
                  state="menu-fold"
                  size={28}
                  colors={{
                    primary: "#000000",
                    secondary: "#000000",
                  }}
                />
              )}{" "}
            </button>
          </div>
          <MobileNavMenu isOpen={isMenuOpen} onClose={closeMenu} />
        </div>
      </div>

      {/* Linha decorativa no desktop ao rolar */}
      {scrolled && !isMobile && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent"></div>
      )}
    </header>
  );
};

export default Header;
