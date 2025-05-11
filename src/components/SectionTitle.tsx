import React from "react";

interface SectionTitleProps {
  preTitle?: string;
  title: string;
  accentText?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  preTitle,
  title,
  accentText,
  description,
  align = "center",
  className = "",
}) => {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  return (
    <div className={`mb-6 xs:mb-8 sm:mb-12 ${alignClass} ${className}`}>
      {/* Linha decorativa */}
      <span className="block w-10 sm:w-12 h-1 bg-[var(--color-accent)] mb-3 sm:mb-4 mx-auto"></span>

      {/* Pretítulo opcional */}
      {preTitle && (
        <div className="inline-block px-3 xs:px-4 sm:px-6 py-1 sm:py-2 bg-[var(--color-accent-transparent)] rounded-full mb-2 xs:mb-3 sm:mb-4">
          <span className="text-[var(--color-accent)] font-medium text-xs xs:text-xs sm:text-sm">
            {preTitle}
          </span>
        </div>
      )}

      {/* Título principal com texto destacado opcional */}
      <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold">
        {title}{" "}
        {accentText && (
          <span className="text-[var(--color-accent)]">{accentText}</span>
        )}
      </h2>

      {/* Descrição opcional */}
      {description && (
        <p className="text-[var(--color-medium-500)] mt-2 xs:mt-3 sm:mt-4 max-w-lg mx-auto text-sm sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
};

export default React.memo(SectionTitle);
