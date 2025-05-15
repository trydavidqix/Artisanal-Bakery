import LordIcon from "../components/LordIcon";

import anaclara from "../images/Testimonials/anaclara.webp";
import chefdecozinha from "../images/Testimonials/chefdecozinha.webp";
import nutricionista from "../images/Testimonials/nutricionista.webp";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      data-section="testimonials"
      className="section-testimonials py-16 sm:py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 animate-fade-in">
        {/* Seção de Testemunhos com responsividade */}
        <div className="pt-4 sm:pt-8">
          <div className="text-center mb-8 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold">
              O Que Nossos{" "}
              <span className="text-[var(--color-accent)]">Clientes</span> Dizem
            </h3>
            <p className="text-[var(--color-medium-500)] mt-3 sm:mt-6 max-w-lg mx-auto text-sm sm:text-base md:text-lg">
              Depoimentos de quem já experimentou nossos produtos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
            {/* Testemunho 1 - Ana Clara */}
            <div className="bg-[var(--bg-secondary)] p-5 sm:p-8 rounded-3xl shadow-lg">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="flex space-x-1 sm:space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <LordIcon
                      key={star}
                      src="https://cdn.lordicon.com/cvwrvyjv.json"
                      trigger="loop"
                      colors={{
                        primary: "#000000",
                        secondary: "#000000",
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                {" "}
                <img
                  src={anaclara}
                  alt="Ana Clara"
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold">
                    Ana Clara
                  </h4>
                  <p className="text-[var(--color-medium-500)] text-sm sm:text-base">
                    Cliente satisfeita
                  </p>
                </div>
              </div>
              <p className="text-[var(--color-medium-500)] mt-4 sm:mt-6 text-sm sm:text-base">
                "Adorei os produtos! Super recomendo para todos que querem
                qualidade e sabor."
              </p>
            </div>
            {/* Testemunho 2 - Chef de Cozinha */}
            <div className="bg-[var(--bg-secondary)] p-5 sm:p-8 rounded-3xl shadow-lg">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="flex space-x-1 sm:space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <LordIcon
                      key={star}
                      src="https://cdn.lordicon.com/cvwrvyjv.json"
                      trigger="loop"
                      colors={{
                        primary: "#000000",
                        secondary: "#000000",
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                {" "}
                <img
                  src={chefdecozinha}
                  alt="Chef de Cozinha"
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold">
                    Chef de Cozinha
                  </h4>
                  <p className="text-[var(--color-medium-500)] text-sm sm:text-base">
                    Profissional de gastronomia
                  </p>
                </div>
              </div>
              <p className="text-[var(--color-medium-500)] mt-4 sm:mt-6 text-sm sm:text-base">
                "Os ingredientes são de altíssima qualidade, perfeitos para
                minhas receitas."
              </p>
            </div>
            {/* Testemunho 3 - Nutricionista */}
            <div className="bg-[var(--bg-secondary)] p-5 sm:p-8 rounded-3xl shadow-lg">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="flex space-x-1 sm:space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <LordIcon
                      key={star}
                      src="https://cdn.lordicon.com/cvwrvyjv.json"
                      trigger="loop"
                      colors={{
                        primary: "#000000",
                        secondary: "#000000",
                      }}
                    />
                  ))}
                </div>
              </div>{" "}
              <div className="flex items-center space-x-4">
                {" "}
                <img
                  src={nutricionista}
                  alt="Nutricionista"
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold">
                    Nutricionista
                  </h4>
                  <p className="text-[var(--color-medium-500)] text-sm sm:text-base">
                    Especialista em saúde
                  </p>
                </div>
              </div>
              <p className="text-[var(--color-medium-500)] mt-4 sm:mt-6 text-sm sm:text-base">
                "Recomendo para todos os meus pacientes. Produtos saudáveis e
                deliciosos."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
