import React, { memo } from "react";
import LordIcon from "./LordIcon";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 xs:py-10 sm:py-12 md:py-16 mt-6 sm:mt-10 text-center text-[var(--color-medium-600)] border-t border-[var(--border-color)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo da padaria no footer */}
        <div className="mb-6 xs:mb-8 sm:mb-10 flex justify-center">
          <div className="group">
            <div className="flex items-center">
              <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mr-2 xs:mr-3 group-hover:bg-[var(--color-accent)]/20 transition-all duration-300">
                <LordIcon
                  src="https://cdn.lordicon.com/xlsnmber.json"
                  trigger="loop"
                  colors={{
                    primary: "#000000",
                    secondary: "#000000",
                  }}
                  size={40}
                />
              </div>
              <div>
                <div className="font-bold text-sm xs:text-base sm:text-lg text-[var(--color-medium-700)] font-serif">
                  Artisanal
                </div>
                <div className="text-[9px] xs:text-[10px] sm:text-xs text-[var(--color-medium-500)] uppercase tracking-widest">
                  BAKERY
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Links úteis em layout responsivo */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-8 mb-8 sm:mb-12 max-w-4xl mx-auto">
          <div className="text-left">
            <h4 className="font-semibold text-xs xs:text-sm mb-3 xs:mb-4 text-[var(--color-medium-800)]">
              Produtos
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="text-xs sm:text-sm text-[var(--color-medium-600)] hover:text-[var(--color-accent)] transition-colors duration-300 cursor-pointer">
                  Pães
                </span>
              </li>
              <li>
                <span className="text-xs sm:text-sm text-[var(--color-medium-600)] hover:text-[var(--color-accent)] transition-colors duration-300 cursor-pointer">
                  Bolos
                </span>
              </li>
              <li>
                <span className="text-xs sm:text-sm text-[var(--color-medium-600)] hover:text-[var(--color-accent)] transition-colors duration-300 cursor-pointer">
                  Doces
                </span>
              </li>
              <li>
                <span className="text-xs sm:text-sm text-[var(--color-medium-600)] hover:text-[var(--color-accent)] transition-colors duration-300 cursor-pointer">
                  Salgados
                </span>
              </li>
            </ul>
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-xs xs:text-sm mb-3 xs:mb-4 text-[var(--color-medium-800)]">
              Informações
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="text-xs sm:text-sm text-[var(--color-medium-600)] hover:text-[var(--color-accent)] transition-colors duration-300 cursor-pointer">
                  Sobre Nós
                </span>
              </li>
              <li>
                <span className="text-xs sm:text-sm text-[var(--color-medium-600)] hover:text-[var(--color-accent)] transition-colors duration-300 cursor-pointer">
                  Horários
                </span>
              </li>
              <li>
                <span className="text-xs sm:text-sm text-[var(--color-medium-600)] hover:text-[var(--color-accent)] transition-colors duration-300 cursor-pointer">
                  Encomendas
                </span>
              </li>
            </ul>
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-xs xs:text-sm mb-3 xs:mb-4 text-[var(--color-medium-800)]">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="text-xs sm:text-sm text-[var(--color-medium-600)] hover:text-[var(--color-accent)] transition-colors duration-300 cursor-pointer">
                  Privacidade
                </span>
              </li>
              <li>
                <span className="text-xs sm:text-sm text-[var(--color-medium-600)] hover:text-[var(--color-accent)] transition-colors duration-300 cursor-pointer">
                  Termos
                </span>
              </li>
            </ul>
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-xs xs:text-sm mb-3 xs:mb-4 text-[var(--color-medium-800)]">
              Contato
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-5 inline-flex justify-center text-[var(--color-accent)]">
                  <LordIcon
                    src="https://cdn.lordicon.com/vmxvhdko.json"
                    trigger="loop"
                    colors={{
                      primary: "#000000",
                      secondary: "#000000",
                    }}
                    size={30}
                  />
                </span>
                <span className="text-xs sm:text-sm text-[var(--color-medium-600)] ml-1">
                  (11) 98765-4321
                </span>
              </li>
              <li className="flex items-center">
                <span className="w-5 inline-flex justify-center text-[var(--color-accent)]">
                  <LordIcon
                    src="https://cdn.lordicon.com/vpbspaec.json"
                    trigger="loop"
                    colors={{
                      primary: "#000000",
                      secondary: "#000000",
                    }}
                    size={30}
                  />
                </span>
                <span className="text-xs sm:text-sm text-[var(--color-medium-600)] ml-1">
                  contato@padaria.com
                </span>
              </li>
              <li className="flex items-center">
                <span className="w-5 inline-flex justify-center text-[var(--color-accent)]">
                  <LordIcon
                    src="https://cdn.lordicon.com/onmwuuox.json"
                    trigger="loop"
                    colors={{
                      primary: "#000000",
                      secondary: "#000000",
                    }}
                    size={30}
                  />
                </span>
                <span className="text-xs sm:text-sm text-[var(--color-medium-600)] ml-1">
                  São Paulo, SP
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Direitos autorais */}
        <div className="mb-6 text-center">
          <p className="font-mono text-xs opacity-75">
            © 2025 Artisanal Bakery. Todos os direitos reservados.
          </p>
        </div>

        {/* Créditos e links sociais */}
        <div className="pt-6 sm:pt-8 border-t border-[var(--border-color-light)]">
          <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-3">
              <p className="font-mono text-xs mb-3 text-center">
                <span className="text-[var(--color-medium-700)]">
                  <a href="https://github.com/trydavidqix" target="_blank">
                    Desenvolvido por David William
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
