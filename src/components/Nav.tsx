import React, { useState, useEffect, useMemo, memo } from "react";
import { motion } from "framer-motion";
import { useResponsive } from "../hooks/useResponsive";

interface NavProps {
  className?: string;
  isMobile?: boolean;
  onItemClick?: () => void;
  animation?: any; // Para aceitar variantes de animação
}

const Nav: React.FC<NavProps> = ({
  className = "",
  isMobile = false,
  onItemClick,
  animation,
}) => {
  const [activeSection, setActiveSection] = useState("home"); // Obtendo dados responsivos do hook
  const { screenWidth } = useResponsive();

  const navItems = useMemo(
    () => [
      { name: "Home", section: "home" },
      { name: "Nossa História", section: "about" },
      { name: "Produtos", section: "products" },
      { name: "Contato", section: "contact" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const item of navItems) {
        const element = document.getElementById(item.section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.section);
            break;
          }
        }
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
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
              <a
                href={`#${item.section}`}
                onClick={onItemClick}
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
              </a>
            </motion.div>
          ) : (
            <div key={item.section} className="relative">
              <a
                href={`#${item.section}`}
                onClick={onItemClick}
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
              </a>
            </div>
          )
        )}
      </div>
    </nav>
  );
};

export default memo(Nav);
