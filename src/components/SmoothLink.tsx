import React from "react";
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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = to.startsWith("#") ? to.substring(1) : to;

    scrollToSection(targetId, onClick);
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default SmoothLink;
