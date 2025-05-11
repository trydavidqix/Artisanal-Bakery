import { FC } from "react";
import LordIcon from "../components/LordIcon";
import paoDeFermentacao from "../images/Paes/paodefermentacaonatural.webp";
import croissantManteiga from "../images/Doces/croissantmanteiga.webp";
import tortaDeMaca from "../images/Bolos/tortademaca.webp";

const Home: FC = () => {
  return (
    <div>
      <section className="py-16 sm:py-20 md:py-24 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <span className="block w-12 sm:w-16 h-1 bg-[var(--color-accent)] mx-auto mb-3 sm:mb-4"></span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="text-[var(--color-accent)]">Produtos</span> da
              Semana
            </h2>
            <p className="text-[var(--color-medium-500)] mt-3 md:mt-4 max-w-lg mx-auto text-sm sm:text-base">
              Conheça os produtos que estão fazendo sucesso esta semana em nossa
              padaria
            </p>
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 grid-layout">
            {/* Pão de fermentação natural */}
            <div className="bg-[var(--bg-secondary)] rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="h-48 md:h-56 lg:h-64 overflow-hidden relative">
                <img
                  src={paoDeFermentacao}
                  alt="Pão de Fermentação Natural"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 md:p-6">
                {" "}
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Pão de Fermentação Natural
                </h3>
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {" "}
                    {[...Array(5)].map((_, i) => (
                      <LordIcon
                        key={i}
                        src="https://cdn.lordicon.com/cvwrvyjv.json"
                        trigger="loop"
                        size={16}
                        colors={{ primary: "#000000", secondary: "#000000" }}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-[var(--color-medium-500)] ml-2">
                    (128)
                  </span>
                </div>
                <p className="text-[var(--color-medium-600)] text-sm mb-4">
                  Nosso pão artesanal feito com fermento natural e 24h de
                  fermentação para o máximo de sabor e nutrientes.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--color-accent)] font-bold">
                    R$ 18,90
                  </span>
                </div>
              </div>
            </div>

            {/* Croissant de manteiga */}
            <div className="bg-[var(--bg-secondary)] rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="h-48 md:h-56 lg:h-64 overflow-hidden relative">
                <img
                  src={croissantManteiga}
                  alt="Croissant de Manteiga"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 md:p-6">
                {" "}
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Croissant de Manteiga
                </h3>
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <LordIcon
                        key={i}
                        src="https://cdn.lordicon.com/cvwrvyjv.json"
                        trigger="loop"
                        size={16}
                        colors={{ primary: "#000000", secondary: "#000000" }}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-[var(--color-medium-500)] ml-2">
                    (96)
                  </span>
                </div>
                <p className="text-[var(--color-medium-600)] text-sm mb-4">
                  Croissant tradicional francês com 36 camadas de massa folhada
                  e manteiga da melhor qualidade.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--color-accent)] font-bold">
                    R$ 9,90
                  </span>
                </div>
              </div>
            </div>

            {/* Torta de maçã */}
            <div className="bg-[var(--bg-secondary)] rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="h-48 md:h-56 lg:h-64 overflow-hidden relative">
                <img
                  src={tortaDeMaca}
                  alt="Torta de Maçã"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 md:p-6">
                {" "}
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Torta de Maçã
                </h3>
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <LordIcon
                        key={i}
                        src="https://cdn.lordicon.com/cvwrvyjv.json"
                        trigger="loop"
                        size={16}
                        colors={{ primary: "#000000", secondary: "#000000" }}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-[var(--color-medium-500)] ml-2">
                    (112)
                  </span>
                </div>
                <p className="text-[var(--color-medium-600)] text-sm mb-4">
                  Torta de maçã com massa folhada crocante e recheio de maçãs
                  caramelizadas com canela e especiarias.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--color-accent)] font-bold">
                    R$ 89,90
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 sm:mt-20 md:mt-24 text-center">
            <a
              href="#testimonials"
              className="inline-flex items-center text-[var(--color-accent)] hover:underline text-sm sm:text-base"
            >
              <span>Veja o que nossos clientes dizem</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
