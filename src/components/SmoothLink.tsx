import React, { useCallback, useRef } from "react";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

interface SmoothLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const SmoothLink: React.FC<SmoothLinkProps> = ({
  to,
  children,
  className = "",
  onClick,
}) => {
  const { scrollToSection } = useSmoothScroll();
  const linkRef = useRef<HTMLAnchorElement>(null);

  // Manipulador de clique simplificado para evitar delays
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Previne o comportamento padrão
      e.preventDefault();

      // Extrai o ID do elemento alvo do link
      const targetId = to.startsWith("#") ? to.substring(1) : to;

      // Aplicar classe ativa para feedback visual
      if (e.currentTarget) {
        e.currentTarget.classList.add("link-active");

        // Remover após breve período
        setTimeout(() => {
          e.currentTarget.classList.remove("link-active");
        }, 300);
      }

      // Executa a rolagem imediatamente
      scrollToSection(targetId, onClick);
    },
    [to, onClick, scrollToSection]
  );
  return (
    <a
      ref={linkRef}
      href={to}
      onClick={handleClick}
      className={className}
      role="button"
      aria-label={`Ir para ${to.replace("#", "")}`}
    >
      {children}
    </a>
  );
};

export default SmoothLink;
