import React from "react";
import LordIcon from "./LordIcon";
import { Product } from "../types";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating % 1 !== 0;

  return (
    <div className="group bg-[var(--bg-secondary)] rounded-2xl xs:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 w-full">
      <div className="h-36 xs:h-40 sm:h-44 md:h-52 bg-[var(--color-accent)]/10 relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 responsive-image"
          loading="lazy"
        />
      </div>

      <div className="p-3 xs:p-4 sm:p-5 w-full">
        <div className="flex justify-between items-center mb-1 sm:mb-2">
          <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-[var(--text-primary)] truncate pr-2">
            {product.name}
          </h3>
          <span className="text-[var(--color-accent)] font-medium text-xs xs:text-sm whitespace-nowrap">
            {product.price}
          </span>
        </div>

        <p className="text-xxs xs:text-xs sm:text-sm text-[var(--color-medium-500)] mb-2 xs:mb-3 sm:mb-4 h-6 xs:h-8 sm:h-10 line-clamp-2">
          {product.description}
        </p>

        {/* Rating stars */}
        <div className="flex items-center mb-1 sm:mb-2">
          <div className="flex">
            {Array.from({ length: fullStars }).map((_, i) => (
              <LordIcon
                key={`full-${i}`}
                src="https://cdn.lordicon.com/cvwrvyjv.json"
                trigger="loop"
                size={16}
                colors={{ primary: "#000000", secondary: "#000000" }}
              />
            ))}
            {hasHalfStar && (
              <LordIcon
                key="half"
                src="https://cdn.lordicon.com/ggjhvvvv.json"
                trigger="loop"
                size={16}
                colors={{ primary: "#000000", secondary: "#000000" }}
              />
            )}
          </div>
          <span className="text-xs text-[var(--color-medium-500)] ml-2">
            ({product.reviews})
          </span>
        </div>

        {/* Add to cart button could be added here */}
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
