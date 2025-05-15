import { memo } from "react";
import LordIcon from "../components/LordIcon";
import { useResponsive } from "../hooks/useResponsive";
import chefImage from "../images/cook-196932_1280.webp";

const bakeryHighlights = [
  {
    name: "Ingredientes Orgânicos",
    description: "Selecionamos os melhores ingredientes de produtores locais",
    iconSrc: "https://cdn.lordicon.com/gdzgkrni.json",
  },
  {
    name: "Fermentação Natural",
    description: "Processo lento que realça os sabores e nutrientes",
    iconSrc: "https://cdn.lordicon.com/jhiqqftv.json",
  },
  {
    name: "Receitas Tradicionais",
    description: "Técnicas passadas por gerações de padeiros artesanais",
    iconSrc: "https://cdn.lordicon.com/yuncjfyp.json",
  },
  {
    name: "Produção Artesanal",
    description: "Cada produto feito à mão com cuidado e atenção aos detalhes",
    iconSrc: "https://cdn.lordicon.com/swqvtpml.json",
  },
];

const HighlightItem = memo(
  ({ highlight }: { highlight: (typeof bakeryHighlights)[0] }) => {
    const { isMobile, isTablet } = useResponsive();

    const getIconSize = () => {
      if (isMobile) return 36;
      if (isTablet) return 42;
      return 49;
    };

    return (
      <div className="bg-[var(--bg-secondary)] p-3 xs:p-4 sm:p-6 rounded-xl xs:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
        <div className="flex items-center mb-2 xs:mb-3 sm:mb-4">
          <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-lg xs:rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mr-2 xs:mr-3 sm:mr-4">
            <LordIcon
              src={highlight.iconSrc}
              trigger="loop"
              colors={{
                primary: "#000000",
                secondary: "#000000",
              }}
              size={getIconSize()}
            />
          </div>
          <h4 className="text-sm xs:text-base sm:text-lg font-bold">
            {highlight.name}
          </h4>
        </div>
        <p className="text-[var(--color-medium-500)] text-xxs xs:text-xs sm:text-sm">
          {highlight.description}
        </p>
      </div>
    );
  }
);

const About = () => {
  const { isMobile } = useResponsive();

  return (
    <section
      id="about"
      data-section="about"
      className="section-about py-10 xs:py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="animate-fade-in">
          {/* Cabeçalho da seção com decoração e responsividade */}
          <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-16">
            <span className="block w-10 xs:w-12 sm:w-16 h-1 bg-[var(--color-accent)] mx-auto mb-2 xs:mb-3 sm:mb-4"></span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold">
              Nossa <span className="text-[var(--color-accent)]">História</span>
            </h2>
            <p className="text-[var(--color-medium-500)] mt-2 xs:mt-3 sm:mt-4 max-w-lg mx-auto text-xs xs:text-sm sm:text-base">
              Uma jornada de paixão pela arte da panificação artesanal
            </p>
          </div>
          {/* Nossa história com layout adaptativo e responsivo */}
          <div className="flex flex-col lg:flex-row items-center gap-6 xs:gap-8 sm:gap-10 lg:gap-12 mb-8 xs:mb-10 sm:mb-16">
            {/* Imagem/ilustração responsiva */}
            <div className="lg:w-1/2 relative w-full mb-6 xs:mb-8 lg:mb-0 flex justify-center">
              {/* Imagem do Chef */}{" "}
              <div className="relative">
                {" "}
                <img
                  src={chefImage}
                  alt="Chef com pão artesanal"
                  className="rounded-lg xs:rounded-xl md:rounded-2xl object-cover 
                    max-h-[220px] xs:max-h-[260px] sm:max-h-[320px] md:max-h-[370px] lg:max-h-[420px] shadow-md"
                  style={{ width: isMobile ? "100%" : "auto" }}
                />
                {/* Badge decorativo responsivo */}
                <div
                  className="absolute -bottom-3 xs:-bottom-4 sm:-bottom-6 -right-1 xs:-right-2 sm:-right-6 
                  bg-[var(--color-accent)] text-white p-2 xs:p-3 sm:p-4 
                  rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg transform rotate-6"
                >
                  <p className="text-lg xs:text-xl sm:text-2xl font-bold">
                    Desde
                  </p>
                  <p className="text-xl xs:text-2xl sm:text-3xl font-bold">
                    2015
                  </p>
                </div>
              </div>
            </div>
            {/* Conteúdo textual com responsividade */}
            <div className="lg:w-1/2 space-y-3 xs:space-y-4 sm:space-y-5">
              <div className="inline-block px-2 xs:px-3 sm:px-4 py-1 bg-[var(--color-accent-transparent)] rounded-full mb-1 xs:mb-2">
                <span className="text-[var(--color-accent)] font-medium text-xxs xs:text-xs sm:text-sm">
                  Nossa Jornada
                </span>
              </div>

              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold">
                Uma tradição que começou com paixão pela panificação
              </h3>

              <div className="text-[var(--color-medium-600)] space-y-2 xs:space-y-3 sm:space-y-4 leading-relaxed text-xs xs:text-sm sm:text-base">
                <p>
                  A Artisanal Bakery nasceu em 2015 a partir do sonho do chef
                  João Ferreira, que após anos de experiência em renomadas
                  padarias na França e Itália, decidiu trazer para o Brasil as
                  técnicas tradicionais de panificação europeia.
                </p>
                <p>
                  Nossa padaria começou como uma pequena loja de bairro, mas
                  rapidamente conquistou o paladar dos clientes com pães de
                  fermentação natural, croissants feitos à mão e doces que
                  respeitam a sazonalidade dos ingredientes.
                </p>
                <p>
                  Acreditamos que o bom pão leva tempo. Por isso, nossas massas
                  fermentam por longos períodos, desenvolvendo sabores complexos
                  e texturas únicas que só a verdadeira panificação artesanal
                  pode proporcionar.
                </p>
              </div>

              {/* Assinatura do fundador responsiva */}
              <div className="pt-2 sm:pt-4">
                <p className="text-[var(--color-accent)] font-medium text-base sm:text-lg">
                  João Ferreira
                </p>
                <p className="text-[var(--color-medium-500)] text-xs sm:text-sm">
                  Fundador & Chef Principal
                </p>
              </div>
            </div>
          </div>{" "}
          {/* Nossos diferenciais com responsividade */}
          <div className="mt-10 xs:mt-12 sm:mt-16 md:mt-20">
            <div className="text-center mb-6 xs:mb-8 sm:mb-10">
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold">
                O que nos{" "}
                <span className="text-[var(--color-accent)]">diferencia</span>
              </h3>
              <p className="text-[var(--color-medium-500)] mt-2 xs:mt-3 sm:mt-4 max-w-lg mx-auto text-xs xs:text-sm sm:text-base">
                Comprometimento com qualidade e tradição em cada etapa do
                processo
              </p>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
              {bakeryHighlights.map((highlight, index) => (
                <HighlightItem key={index} highlight={highlight} />
              ))}
            </div>
          </div>
          {/* Nossa missão com responsividade */}
          <div className="mt-10 xs:mt-12 sm:mt-16 md:mt-20 bg-[var(--bg-secondary)] p-4 xs:p-6 sm:p-8 md:p-12 rounded-2xl xs:rounded-3xl relative overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute -right-8 -top-8 xs:-right-10 xs:-top-10 w-20 xs:w-24 sm:w-32 md:w-40 h-20 xs:h-24 sm:h-32 md:h-40 bg-[var(--color-accent)]/10 rounded-full"></div>
            <div className="absolute -left-8 -bottom-8 xs:-left-10 xs:-bottom-10 w-28 xs:w-32 sm:w-40 md:w-48 h-28 xs:h-32 sm:h-40 md:h-48 bg-[var(--color-secondary-accent)]/15 rounded-full"></div>

            <div className="relative z-10">
              <div className="flex items-center mb-3 xs:mb-4 sm:mb-6">
                <LordIcon
                  src="https://cdn.lordicon.com/wjhxvnmc.json"
                  trigger="loop"
                  colors={{
                    primary: "#000000",
                    secondary: "#000000",
                  }}
                  size={60}
                  className="sm:hidden"
                />
                <LordIcon
                  src="https://cdn.lordicon.com/ivayzoro.json"
                  trigger="hover"
                  colors={{
                    primary: "#000000",
                    secondary: "#000000",
                  }}
                  size={40}
                  className="hidden sm:block"
                />
                <h4 className="ml-3 sm:ml-4 text-xl sm:text-2xl font-bold text-[var(--color-accent)]">
                  Nossa Missão
                </h4>
              </div>

              <blockquote className="text-base sm:text-xl md:text-2xl italic text-[var(--color-medium-600)] leading-relaxed">
                "Proporcionar experiências gastronômicas memoráveis através de
                produtos artesanais de alta qualidade, respeitando tradições
                culinárias e promovendo uma alimentação mais consciente."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);
