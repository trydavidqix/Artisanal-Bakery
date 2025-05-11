import React from "react";
import LordIcon from "./LordIcon";
import { useResponsive } from "../hooks/useResponsive";

interface IconFeatureProps {
  iconSrc: string;
  title: string;
  description: string;
  bgColor?: string;
  iconSize?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
}
const IconFeature: React.FC<IconFeatureProps> = ({
  iconSrc,
  title,
  description,
  bgColor = "bg-[var(--color-accent)]/10",
  iconSize = {
    mobile: 40,
    tablet: 50,
    desktop: 70,
  },
}) => {
  const { isMobile, isTablet } = useResponsive();

  const getIconSize = () => {
    if (isMobile) return iconSize.mobile || 40;
    if (isTablet) return iconSize.tablet || 50;
    return iconSize.desktop || 70;
  };

  return (
    <div className="text-center">
      <div
        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${bgColor} flex items-center justify-center mx-auto mb-4 sm:mb-6`}
      >
        <LordIcon
          src={iconSrc}
          trigger="loop"
          colors={{
            primary: "#000000",
            secondary: "#000000",
          }}
          size={getIconSize()}
        />
      </div>
      <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{title}</h4>
      <p className="text-[var(--color-medium-500)] text-sm sm:text-base">
        {description}
      </p>
    </div>
  );
};

export default React.memo(IconFeature);
