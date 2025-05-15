import React, { useState } from "react";
import LordIcon from "../components/LordIcon";
import { useResponsive } from "../hooks/useResponsive";

import paoDeFermentacao from "../images/Paes/paodefermentacaonatural.webp";
import bagueteTradicional from "../images/Paes/baguetetradicional.webp";
import paoMultigraos from "../images/Paes/paomultigraos.webp";
import croissantManteiga from "../images/Doces/croissantmanteiga.webp";
import painAuChocolat from "../images/Doces/painauchocolat.webp";
import tortaDeMaca from "../images/Bolos/tortademaca.webp";
import boloDeChocolate from "../images/Bolos/bolodechocolate.webp";
import quicheLorraine from "../images/Salgados/quichelorraine.webp";
import paoDeQueijo from "../images/Salgados/paodequeijo.webp";
import coxinha from "../images/Salgados/coxinha.webp";

const categories = [
  { id: "all", label: "Todos" },
  {
    id: "breads",
    label: "Pães",
  },
  {
    id: "pastries",
    label: "Doces",
  },
  {
    id: "cakes",
    label: "Bolos",
  },
  {
    id: "savory",
    label: "Salgados",
  },
];

const products = [
  {
    id: 1,
    name: "Pão de Fermentação Natural",
    category: "breads",
    price: "R$ 18,90",
    description: "Feito com farinha orgânica e fermentação de 24 horas",
    image: paoDeFermentacao,
    highlight: true,
    rating: 5,
    reviews: 128,
  },
  {
    id: 2,
    name: "Baguete Tradicional",
    category: "breads",
    price: "R$ 12,90",
    description: "Crocante por fora, macia por dentro",
    image: bagueteTradicional,
    highlight: false,
    rating: 4.5,
    reviews: 95,
  },
  {
    id: 3,
    name: "Croissant Manteiga",
    category: "pastries",
    price: "R$ 9,90",
    description: "Amanteigado e com 36 camadas",
    image: croissantManteiga,
    highlight: true,
    rating: 4.9,
    reviews: 96,
  },
  {
    id: 4,
    name: "Pain au Chocolat",
    category: "pastries",
    price: "R$ 12,90",
    description: "Recheado com chocolate belga",
    image: painAuChocolat,
    highlight: false,
    rating: 4.8,
    reviews: 87,
  },
  {
    id: 5,
    name: "Torta de Maçã",
    category: "cakes",
    price: "R$ 89,90",
    description: "Maçãs caramelizadas e massa folhada",
    image: tortaDeMaca,
    highlight: true,
    rating: 5,
    reviews: 112,
  },
  {
    id: 6,
    name: "Bolo de Chocolate",
    category: "cakes",
    price: "R$ 79,90",
    description: "Três camadas com ganache belga",
    image: boloDeChocolate,
    highlight: false,
    rating: 4.7,
    reviews: 76,
  },
  {
    id: 7,
    name: "Quiche Lorraine",
    category: "savory",
    price: "R$ 45,90",
    description: "Bacon, queijo e creme fresco",
    image: quicheLorraine,
    highlight: true,
    rating: 4.8,
    reviews: 63,
  },
  {
    id: 8,
    name: "Pão de Queijo",
    category: "savory",
    price: "R$ 5,90",
    description: "Receita tradicional mineira",
    image: paoDeQueijo,
    highlight: false,
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 9,
    name: "Coxinha",
    category: "savory",
    price: "R$ 7,90",
    description: "Recheio cremoso de frango",
    image: coxinha,
    highlight: false,
    rating: 4.7,
    reviews: 92,
  },
  {
    id: 10,
    name: "Pão Multigrãos",
    category: "breads",
    price: "R$ 16,90",
    description: "Com sementes e grãos integrais",
    image: paoMultigraos,
    highlight: false,
    rating: 4.6,
    reviews: 82,
  },
];

const ProductCard = ({
  product,
  isMobile,
}: {
  product: (typeof products)[0];
  isMobile: boolean;
}) => {
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

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <LordIcon
                  key={i}
                  src="https://cdn.lordicon.com/cvwrvyjv.json"
                  trigger="loop"
                  colors={{
                    primary:
                      i < fullStars || (i === fullStars && hasHalfStar)
                        ? "#000000"
                        : "#d1d5db",
                    secondary:
                      i < fullStars || (i === fullStars && hasHalfStar)
                        ? "#000000"
                        : "#d1d5db",
                  }}
                  size={isMobile ? 10 : 14}
                />
              ))}
            </div>
            <span className="text-xs text-[var(--color-medium-500)] ml-1 sm:ml-2">
              ({product.reviews})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const { isMobile, isTablet } = useResponsive();

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);
  return (
    <section
      id="products"
      data-section="products"
      className="section-products py-12 sm:py-20 md:py-24 lg:py-32 animate-fade-in w-full"
    >
      <div className="w-full max-w-6xl mx-auto px-3 sm:px-6">
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden mb-8 sm:mb-16 md:mb-20 relative">
          <div className="bg-[var(--color-accent)]/10 p-6 sm:p-8 md:p-16 relative z-10">
            <div className="absolute top-0 right-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-[var(--color-secondary-accent)]/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-[var(--color-accent)]/10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute top-1/4 right-1/4 w-6 sm:w-8 h-6 sm:h-8 bg-[var(--color-secondary-accent)]/20 rounded-full"></div>

            <div className="relative z-10 text-center">
              <span className="inline-block px-3 sm:px-4 py-1 bg-[var(--color-accent)]/10 rounded-full mb-3 sm:mb-4">
                <span className="text-[var(--color-accent)] font-medium text-xs sm:text-sm">
                  Nossa Seleção
                </span>
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
                Produtos{" "}
                <span className="text-[var(--color-accent)] italic">
                  Artesanais
                </span>
              </h2>
              <p className="text-[var(--text-secondary)] mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
                Cada produto é uma história de tradição, amor e dedicação à arte
                da panificação, com ingredientes selecionados e técnicas
                tradicionais que resultam em sabores únicos.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-10 sm:mb-16 relative">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent"></div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 py-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 sm:px-5 py-2 sm:py-3 rounded-full text-xs sm:text-sm transition-all flex items-center ${
                  activeCategory === category.id
                    ? "bg-[var(--color-accent)] text-white"
                    : "bg-[var(--color-accent)]/5 text-[var(--text-primary)] hover:bg-[var(--color-accent)]/10"
                }`}
              >
                <span>{category.label}</span>
              </button>
            ))}
          </div>
          <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent"></div>
        </div>{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full grid-layout">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isMobile={isMobile}
            />
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <div className="py-10 sm:py-16 text-center">
            <LordIcon
              src="https://cdn.lordicon.com/etwtznjn.json"
              trigger="loop"
              colors={{
                primary: "#000000",
                secondary: "#000000",
              }}
              size={isMobile ? 80 : isTablet ? 100 : 120}
            />
            <p className="text-[var(--text-secondary)] mt-4 text-sm sm:text-base">
              Não encontramos produtos nesta categoria no momento
            </p>
            <button
              onClick={() => setActiveCategory("all")}
              className="mt-4 px-4 sm:px-6 py-2 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full hover:bg-[var(--color-accent)]/20 transition-colors text-sm sm:text-base"
            >
              Ver todos os produtos
            </button>
          </div>
        )}
        <div className="mt-20 sm:mt-24 md:mt-32 bg-[var(--bg-secondary)] rounded-3xl p-6 sm:p-10 lg:p-16">
          <div className="text-center mb-8 sm:mb-12">
            <span className="block w-10 sm:w-12 h-1 bg-[var(--color-accent)] mx-auto mb-3 sm:mb-4"></span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Nosso <span className="text-[var(--color-accent)]">Processo</span>
            </h3>
            <p className="text-[var(--color-medium-500)] mt-2 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Descubra como cada produto é cuidadosamente preparado em nossa
              padaria artesanal
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <LordIcon
                  src="https://cdn.lordicon.com/evyyfapb.json"
                  trigger="loop"
                  colors={{
                    primary: "#000000",
                    secondary: "#000000",
                  }}
                  size={isMobile ? 40 : isTablet ? 49 : 70}
                />
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Ingredientes Selecionados
              </h4>
              <p className="text-[var(--color-medium-500)] text-sm sm:text-base">
                Escolhemos a dedo cada ingrediente, dando preferência para
                produtos locais e orgânicos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <LordIcon
                  src="https://cdn.lordicon.com/ttuvtvaz.json"
                  trigger="loop"
                  colors={{
                    primary: "#000000",
                    secondary: "#000000",
                  }}
                  size={isMobile ? 40 : isTablet ? 50 : 70}
                />
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Preparo Tradicional
              </h4>
              <p className="text-[var(--color-medium-500)] text-sm sm:text-base">
                Usamos técnicas tradicionais e damos o tempo necessário para
                cada fermentação e preparo.
              </p>
            </div>

            <div className="text-center sm:col-span-2 md:col-span-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <LordIcon
                  src="https://cdn.lordicon.com/hlfocnwl.json"
                  trigger="loop"
                  colors={{
                    primary: "#000000",
                    secondary: "#000000",
                  }}
                  size={isMobile ? 40 : isTablet ? 50 : 70}
                />
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Fornada com Carinho
              </h4>
              <p className="text-[var(--color-medium-500)] text-sm sm:text-base">
                Cada produto é cuidadosamente assado em fornos que preservam o
                sabor e aroma naturais.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20 sm:mt-24 md:mt-32">
          <div className="text-center mb-8 sm:mb-12">
            <span className="block w-10 sm:w-12 h-1 bg-[var(--color-accent)] mx-auto mb-3 sm:mb-4"></span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Categorias{" "}
              <span className="text-[var(--color-accent)]">Especiais</span>
            </h3>
            <p className="text-[var(--color-medium-500)] mt-2 sm:mt-4 max-w-lg mx-auto text-sm sm:text-base">
              Conheça nossas categorias de produtos especiais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="relative h-48 sm:h-60 md:h-80 rounded-3xl overflow-hidden group cursor-pointer">
              <img
                src={paoDeFermentacao}
                alt="Pães Especiais"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-accent)]/80 z-10 group-hover:bg-[var(--color-accent)]/60 transition-all duration-300"></div>

              <div className="absolute top-4 left-4 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full border border-[var(--color-accent)]/20"></div>
              <div className="absolute bottom-8 right-8 w-12 sm:w-16 h-12 sm:h-16 rounded-full border border-[var(--color-accent)]/20"></div>

              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center p-4 sm:p-6">
                  <h4 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                    Pães Especiais
                  </h4>
                  <p className="text-white/80 max-w-xs mx-auto mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">
                    Pães artesanais com fermentação natural e ingredientes
                    selecionados
                  </p>
                  <a
                    href="#breads"
                    className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-white text-[var(--color-accent)] rounded-full text-xs sm:text-sm font-medium hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 group-hover:scale-105"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveCategory("breads");
                      document
                        .getElementById("products")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Ver Pães
                  </a>
                </div>
              </div>
            </div>

            <div className="relative h-48 sm:h-60 md:h-80 rounded-3xl overflow-hidden group cursor-pointer">
              <img
                src={tortaDeMaca}
                alt="Doces e Tortas"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-secondary-accent)]/80 z-10 group-hover:bg-[var(--color-secondary-accent)]/60 transition-all duration-300"></div>

              <div className="absolute top-4 right-4 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full border border-[var(--color-secondary-accent)]/20"></div>
              <div className="absolute bottom-8 left-8 w-12 sm:w-16 h-12 sm:h-16 rounded-full border border-[var(--color-secondary-accent)]/20"></div>

              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center p-4 sm:p-6">
                  <h4 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                    Doces & Tortas
                  </h4>
                  <p className="text-white/80 max-w-xs mx-auto mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">
                    Doces irresistíveis preparados com ingredientes premium e
                    técnicas francesas
                  </p>
                  <a
                    href="#pastries"
                    className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-white text-[var(--color-secondary-accent)] rounded-full text-xs sm:text-sm font-medium hover:bg-[var(--color-secondary-accent)] hover:text-white transition-all duration-300 group-hover:scale-105"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveCategory("pastries");
                      document
                        .getElementById("products")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Ver Doces
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 sm:mt-20 md:mt-24 relative overflow-hidden rounded-3xl">
          <div className="bg-[var(--bg-secondary)] p-6 sm:p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between relative z-10">
            <div className="absolute -top-10 -right-10 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-[var(--color-secondary-accent)]/10 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 bg-[var(--color-accent)]/10 rounded-full"></div>

            <div className="lg:w-2/3 mb-6 lg:mb-0">
              <div className="inline-block px-3 sm:px-4 py-1 bg-[var(--color-accent)]/10 rounded-full mb-3 sm:mb-4">
                <span className="text-[var(--color-accent)] font-medium text-xs sm:text-sm">
                  Personalizados para Você
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
                Encomendas{" "}
                <span className="text-[var(--color-accent)] italic">
                  Especiais
                </span>
              </h3>
              <p className="text-[var(--text-secondary)] max-w-lg text-sm sm:text-base">
                Tem um evento especial chegando? Encomende nossos produtos
                artesanais personalizados para sua festa, casamento ou
                celebração. Nossa equipe está pronta para criar algo único para
                seu momento.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center bg-[var(--color-accent)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-lg transition-all duration-300 relative z-10 hover:transform hover:scale-105 text-sm sm:text-base"
            >
              <span>Fazer Encomenda</span>{" "}
              <LordIcon
                src="https://cdn.lordicon.com/zmkotitn.json"
                trigger="loop"
                colors={{
                  primary: "#ffffff",
                  secondary: "#ffffff",
                }}
                size={isMobile ? 16 : 20}
                className="ml-2"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
