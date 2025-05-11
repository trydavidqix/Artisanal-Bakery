import React, { useEffect, useRef, memo, useState } from "react";

interface LordIconProps {
  src: string;
  trigger?:
    | "hover"
    | "click"
    | "loop"
    | "loop-on-hover"
    | "morph"
    | "boomerang"
    | "in";
  state?: string;
  colors?: {
    primary?: string;
    secondary?: string;
  };
  size?: number;
  delay?: number;
  className?: string;
}

const LordIcon: React.FC<LordIconProps> = ({
  src,
  trigger = "hover",
  state,
  colors = { primary: "#dfdfdf", secondary: "#000000" },
  size = 32,
  delay = 0,
  className = "",
}) => {
  const iconRef = useRef<HTMLElement>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const checkScriptLoaded = (): boolean =>
      typeof window !== "undefined" && "lordicon" in window;

    if (checkScriptLoaded()) {
      setIsScriptLoaded(true);
      return;
    }

    const handleScriptLoad = () => {
      if (checkScriptLoaded()) {
        setIsScriptLoaded(true);
      }
    };

    document
      .querySelector('script[src*="lordicon"]')
      ?.addEventListener("load", handleScriptLoad);

    const timer = setInterval(() => {
      if (checkScriptLoaded()) {
        setIsScriptLoaded(true);
        clearInterval(timer);
      }
    }, 100);

    return () => {
      clearInterval(timer);
      document
        .querySelector('script[src*="lordicon"]')
        ?.removeEventListener("load", handleScriptLoad);
    };
  }, []);

  useEffect(() => {
    if (isScriptLoaded && iconRef.current) {
      if (delay) {
        iconRef.current.setAttribute("delay", delay.toString());
      }
      if (state) {
        iconRef.current.setAttribute("state", state);
      }
    }
  }, [delay, state, isScriptLoaded]);

  const colorString = colors.secondary
    ? `primary:${colors.primary},secondary:${colors.secondary}`
    : `primary:${colors.primary}`;

  return (
    <lord-icon
      ref={iconRef}
      src={src}
      trigger={trigger}
      colors={colorString}
      style={{ width: `${size}px`, height: `${size}px` }}
      className={className}
    ></lord-icon>
  );
};

export default memo(LordIcon);
