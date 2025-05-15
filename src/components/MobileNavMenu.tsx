import { useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import SmoothLink from "./SmoothLink";

interface MobileNavMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNavMenu({ isOpen, onClose }: MobileNavMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null); // Implementação melhorada para navegação em dispositivos móveis
  const handleNavigation = useCallback(
    (sectionId: string) => {
      console.log(`Navegando para seção #${sectionId} via menu móvel`);

      // Primeiro, fecha o menu imediatamente para melhor experiência no mobile
      // Fechar o menu antes da rolagem evita problemas de layout
      onClose();
      console.log("Menu móvel fechado antes de iniciar a navegação");

      // Pequeno delay para garantir que o menu foi fechado antes da rolagem
      setTimeout(() => {
        // Busca o elemento usando vários seletores para ser mais resiliente
        const targetElement =
          document.getElementById(sectionId) ||
          document.querySelector(`section[id="${sectionId}"]`) ||
          document.querySelector(`[data-section="${sectionId}"]`) ||
          document.querySelector(`[data-id="${sectionId}"]`);

        if (targetElement) {
          // Destacar brevemente o elemento para feedback visual
          const originalOutline = targetElement.style.outline;
          targetElement.style.outline = "3px solid var(--color-accent)";

          // Garante que o body não tem overflow hidden (que poderia ter sido definido pelo menu)
          document.body.style.overflow = "";
          document.body.style.position = "";
          document.body.style.width = "";

          // Usar abordagem mais robusta de rolagem para mobile
          const headerOffset = 60;
          const elementRect = targetElement.getBoundingClientRect();
          const scrollTarget =
            elementRect.top + window.pageYOffset - headerOffset;

          // Técnicas de rolagem com três camadas para máxima compatibilidade

          // 1. scrollIntoView (mais suportado em navegadores mobile)
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          // 2. Após pequeno delay, ajuste fino com scrollTo
          setTimeout(() => {
            window.scrollTo({
              top: scrollTarget,
              behavior: "smooth",
            });
          }, 50);

          // 3. Método de backup para Safari no iOS que às vezes ignora behavior: smooth
          setTimeout(() => {
            window.scrollTo(0, scrollTarget);
          }, 100);

          // Restaura a aparência original do elemento após o destaque
          setTimeout(() => {
            targetElement.style.outline = originalOutline;
          }, 1500);
        } else {
          console.warn(
            `Elemento #${sectionId} não encontrado para navegação mobile`
          );
          // Tenta fazer debugging dos IDs disponíveis
          const sections = document.querySelectorAll("section[id]");
          console.log(
            `Seções com IDs disponíveis: ${Array.from(sections)
              .map((s) => s.id)
              .join(", ")}`
          );
        }
      }, 100);
    },
    [onClose]
  );

  useEffect(() => {
    // Handlers separados para mouse e toque para lidar melhor com iPads
    const handleMouseDown = (event: MouseEvent) => {
      if (
        overlayRef.current === event.target &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      // Precisamos verificar o target do evento de toque de forma diferente
      const target = event.target as Node;
      if (
        overlayRef.current &&
        target === overlayRef.current &&
        menuRef.current &&
        !menuRef.current.contains(target)
      ) {
        // Prevenimos comportamento padrão para o iPad
        event.preventDefault();
        onClose();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      // Adicionamos eventos com opções específicas para iOS/iPadOS
      document.addEventListener("mousedown", handleMouseDown, {
        passive: false,
      });
      document.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      document.addEventListener(
        "click",
        (e) => {
          // Redundância para garantir a captura em iPads
          if (overlayRef.current === e.target) onClose();
        },
        { passive: false }
      );
      document.addEventListener("keydown", handleEscapeKey);

      // Fixar a rolagem em iPads também
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("click", (e) => {
        if (overlayRef.current === e.target) onClose();
      });
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <motion.div
      ref={overlayRef}
      className="lg:hidden fixed inset-0 top-[56px] sm:top-[64px] z-30 bg-black/50 backdrop-blur-sm touch-auto"
      role="dialog"
      aria-modal="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={(e) => {
        // Se o clique foi diretamente no overlay (fundo), feche o menu
        if (e.target === e.currentTarget) {
          e.preventDefault(); // Prevenir comportamento padrão para iPad
          e.stopPropagation(); // Parar propagação
          onClose();
        }
      }}
      onTouchEnd={(e) => {
        // Tratamento especial para eventos de toque em iPad
        if (e.target === e.currentTarget) {
          e.preventDefault();
          onClose();
        }
      }}
      style={{
        WebkitTapHighlightColor: "transparent", // Remover highlight de toque em iPads
      }}
    >
      <motion.div
        ref={menuRef}
        className="bg-white shadow-xl p-6 pt-5 w-full text-center mx-0 rounded-none border-b-2 border-[var(--color-accent)]/20 relative"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => {
          e.stopPropagation(); // Impede que cliques no menu fechem ele
        }}
        onTouchEnd={(e) => e.stopPropagation()} // Também para eventos de toque
      >
        {" "}
        <motion.ul
          className="space-y-6 text-gray-800 w-full pt-0"
          variants={containerAnimation}
          initial="hidden"
          animate="show"
        >
          <motion.li variants={itemAnimation}>
            {" "}
            <SmoothLink
              to="#home"
              onClick={() => handleNavigation("home")}
              className="block py-3 px-3 text-lg font-medium hover:text-[var(--color-accent)] active:bg-[var(--color-accent)]/10 transition-colors duration-300 w-full"
            >
              Início
            </SmoothLink>
          </motion.li>
          <motion.li variants={itemAnimation}>
            {" "}
            <SmoothLink
              to="#about"
              onClick={() => handleNavigation("about")}
              className="block py-3 px-3 text-lg font-medium hover:text-[var(--color-accent)] active:bg-[var(--color-accent)]/10 transition-colors duration-300 w-full"
            >
              Nossa História
            </SmoothLink>
          </motion.li>
          <motion.li variants={itemAnimation}>
            {" "}
            <SmoothLink
              to="#products"
              onClick={() => handleNavigation("products")}
              className="block py-3 px-3 text-lg font-medium hover:text-[var(--color-accent)] active:bg-[var(--color-accent)]/10 transition-colors duration-300 w-full"
            >
              Produtos
            </SmoothLink>
          </motion.li>
          <motion.li variants={itemAnimation}>
            {" "}
            <SmoothLink
              to="#testimonials"
              onClick={() => handleNavigation("testimonials")}
              className="block py-3 px-3 text-lg font-medium hover:text-[var(--color-accent)] active:bg-[var(--color-accent)]/10 transition-colors duration-300 w-full"
            >
              Depoimentos
            </SmoothLink>
          </motion.li>
          <motion.li variants={itemAnimation}>
            {" "}
            <SmoothLink
              to="#contact"
              onClick={() => handleNavigation("contact")}
              className="block py-3 px-3 text-lg font-medium hover:text-[var(--color-accent)] active:bg-[var(--color-accent)]/10 transition-colors duration-300 w-full"
            >
              Contato
            </SmoothLink>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}
