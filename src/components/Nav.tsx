import React, { useState, useEffect, useMemo, memo, useCallback } from "react";
import { motion } from "framer-motion";
import { useResponsive } from "../hooks/useResponsive";
import SmoothLink from "./SmoothLink";

interface NavProps {
  className?: string;
  isMobile?: boolean;
  onItemClick?: () => void;
  animation?: any;
}

const Nav: React.FC<NavProps> = ({
  className = "",
  isMobile = false,
  onItemClick,
  animation,
}) => {
  const [activeSection, setActiveSection] = useState("home");
  const { screenWidth } = useResponsive();
  const navItems = useMemo(
    () => [
      { name: "Home", section: "home" },
      { name: "Nossa História", section: "about" },
      { name: "Produtos", section: "products" },
      { name: "Depoimentos", section: "testimonials" },
      { name: "Contato", section: "contact" },
    ],
    []
  ); // Manipulador otimizado para clique nos links com pausa na detecção de rolagem
  const handleLinkClick = useCallback(
    (section: string) => {
      // Define a seção ativa imediatamente para feedback visual
      setActiveSection(section);

      // Declaramos a variável scrollingPaused no escopo externo
      // Pausar a detecção de rolagem por um curto período durante a navegação via clique
      // @ts-ignore - Acessando variável definida no useEffect
      if (typeof window.navScrollingPaused !== "undefined") {
        // @ts-ignore
        window.navScrollingPaused = true;
        setTimeout(() => {
          // @ts-ignore
          window.navScrollingPaused = false;
        }, 800);
      }

      // Executa o callback passado (ex: fechar menu móvel) sem delay
      if (onItemClick) {
        onItemClick();
      }
    },
    [onItemClick]
  );
  useEffect(() => {
    // Inicializar a variável global para controlar a pausa na detecção de rolagem
    // @ts-ignore
    window.navScrollingPaused = false;

    // Função mais eficiente para detectar qual seção está visível
    const handleScroll = () => {
      // Se a detecção de rolagem estiver pausada, não fazer nada
      // @ts-ignore
      if (window.navScrollingPaused) return;

      // Verificar se estamos no final da página
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 10
      ) {
        setActiveSection(navItems[navItems.length - 1].section);
        return;
      }

      // Valor de deslocamento para considerar o cabeçalho
      const headerOffset = 100;

      // Encontrar a seção mais próxima do topo da tela (após o offset)
      let currentSection = navItems[0].section;
      let minDistance = Number.MAX_SAFE_INTEGER;

      for (const item of navItems) {
        const element = document.getElementById(item.section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - headerOffset);

          // Se este elemento está mais próximo do topo visível que o anterior
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = item.section;

            // Se estiver muito próximo, é uma correspondência exata
            if (distance < 10) break;
          }
        }
      }

      setActiveSection(currentSection);
    }; // Usar debounce mais agressivo para melhorar a performance
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

    const onScroll = () => {
      // Se há navegação ativa via clique no link, pausar a detecção de rolagem
      // @ts-ignore
      if (window.navScrollingPaused) return;

      // Limpar qualquer timeout anterior
      if (scrollTimeout !== null) {
        clearTimeout(scrollTimeout);
      }

      // Configurar novo timeout com delay maior para reduzir cálculos
      scrollTimeout = setTimeout(() => {
        requestAnimationFrame(handleScroll);
        scrollTimeout = null;
      }, 150); // Aumentar o intervalo para reduzir a frequência
    };

    // Chamar uma vez na montagem
    handleScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [navItems]);

  const getFontSize = () => {
    if (isMobile) {
      return "text-xl";
    } else if (screenWidth < 768) {
      return "text-xs";
    } else if (screenWidth < 1024) {
      return "text-sm";
    } else {
      return "text-base";
    }
  };

  const navContainerClasses = `flex ${
    isMobile
      ? "flex-col items-center w-full space-y-5 md:space-y-6 px-4"
      : "flex-row items-center justify-center space-x-2 sm:space-x-3 md:space-x-6"
  }`;

  return (
    <nav className={className}>
      <div className={navContainerClasses}>
        {navItems.map((item, i) =>
          motion.div ? (
            <motion.div
              key={item.section}
              custom={i}
              variants={animation}
              className="relative"
            >
              {" "}
              <SmoothLink
                to={`#${item.section}`}
                onClick={() => handleLinkClick(item.section)}
                className={`py-2 px-1 ${getFontSize()} font-medium transition-colors duration-300 block ${
                  isMobile ? "text-xl sm:text-2xl mb-1" : ""
                } ${
                  activeSection === item.section
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-light-100)] hover:text-[var(--color-accent)]"
                }`}
              >
                {item.name}
                {activeSection === item.section && !isMobile && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-accent)]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </SmoothLink>
            </motion.div>
          ) : (
            <div key={item.section} className="relative">
              {" "}
              <SmoothLink
                to={`#${item.section}`}
                onClick={() => handleLinkClick(item.section)}
                className={`py-2 px-1 ${getFontSize()} font-medium transition-colors duration-300 block ${
                  isMobile ? "text-xl sm:text-2xl mb-1" : ""
                } ${
                  activeSection === item.section
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-light-100)] hover:text-[var(--color-accent)]"
                }`}
              >
                {item.name}
                {activeSection === item.section && !isMobile && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-accent)]" />
                )}
              </SmoothLink>
            </div>
          )
        )}
      </div>
    </nav>
  );
};

export default memo(Nav);
