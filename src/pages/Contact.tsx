import { memo } from "react";
import LordIcon from "../components/LordIcon";
import { useResponsive } from "../hooks/useResponsive";

const Contact = () => {
  const { isMobile } = useResponsive();

  return (
    <section
      id="contact"
      data-section="contact"
      className="section-contact py-10 xs:py-12 sm:py-16 md:py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        {/* Título com decoração responsiva */}
        <div className="text-center mb-6 xs:mb-8 sm:mb-12 md:mb-16">
          <span className="block w-10 xs:w-12 sm:w-16 h-1 bg-[var(--color-accent)] mx-auto mb-3 xs:mb-4 sm:mb-6"></span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold">
            Entre em <span className="text-[var(--color-accent)]">Contato</span>
          </h2>
          <p className="text-[var(--color-medium-500)] mt-2 xs:mt-3 sm:mt-4 max-w-lg mx-auto text-xs xs:text-sm sm:text-base md:text-lg">
            Estamos prontos para atender você e tornar seu dia mais doce
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 xs:gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          {/* Informações de Contato */}
          <div className="lg:col-span-2">
            <div className="bg-[var(--bg-secondary)] p-4 xs:p-6 sm:p-8 md:p-10 rounded-2xl xs:rounded-3xl shadow-md sm:shadow-lg relative overflow-hidden h-full">
              {/* Elementos decorativos */}
              <div className="absolute -left-8 -top-8 xs:-left-10 xs:-top-10 w-20 xs:w-24 sm:w-32 md:w-40 h-20 xs:h-24 sm:h-32 md:h-40 bg-[var(--color-accent)]/10 rounded-full"></div>
              <div className="absolute -right-8 -bottom-8 xs:-right-10 xs:-bottom-10 w-20 xs:w-24 sm:w-32 md:w-40 h-20 xs:h-24 sm:h-32 md:h-40 bg-[var(--color-secondary-accent)]/10 rounded-full"></div>

              <div className="relative z-10">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-4 xs:mb-6 sm:mb-8 text-[var(--text-primary)]">
                  Entre em Contato
                </h3>{" "}
                <div className="space-y-4 xs:space-y-5 sm:space-y-8">
                  {/* Endereço */}
                  <div className="flex items-start">
                    <div
                      className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-lg xs:rounded-xl 
                      bg-[var(--color-accent)]/10 flex items-center justify-center mr-2 xs:mr-3 sm:mr-4 shrink-0"
                    >
                      <LordIcon
                        src="https://cdn.lordicon.com/onmwuuox.json"
                        trigger="loop"
                        colors={{
                          primary: "#000000",
                          secondary: "#000000",
                        }}
                        size={isMobile ? 28 : 36}
                      />
                    </div>
                    <div>
                      <h4 className="text-sm xs:text-base sm:text-lg font-semibold mb-0.5 xs:mb-1 sm:mb-2">
                        Endereço
                      </h4>
                      <p className="text-[var(--color-medium-500)] leading-relaxed text-xs xs:text-sm sm:text-base">
                        Rua das Flores, 123 - Jardim Botânico
                        <br />
                        São Paulo, SP - 04567-890
                      </p>
                    </div>
                  </div>

                  {/* Telefone */}
                  <div className="flex items-start">
                    <div
                      className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-lg xs:rounded-xl 
                      bg-[var(--color-accent)]/10 flex items-center justify-center mr-2 xs:mr-3 sm:mr-4 shrink-0"
                    >
                      <LordIcon
                        src="https://cdn.lordicon.com/dnphlhar.json"
                        trigger="loop"
                        colors={{
                          primary: "#dfdfdf",
                          secondary: "#000000",
                        }}
                        size={isMobile ? 28 : 36}
                      />
                    </div>
                    <div>
                      <h4 className="text-sm xs:text-base sm:text-lg font-semibold mb-0.5 xs:mb-1 sm:mb-2">
                        Telefone
                      </h4>
                      <p className="text-[var(--color-medium-500)] leading-relaxed text-xs xs:text-sm sm:text-base">
                        (11) 98765-4321
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    {" "}
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mr-3 sm:mr-5 shrink-0">
                      <LordIcon
                        src="https://cdn.lordicon.com/vpbspaec.json"
                        trigger="loop"
                        colors={{
                          primary: "#000000",
                          secondary: "#000000",
                        }}
                        size={isMobile ? 49 : 49}
                      />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                        Email
                      </h4>{" "}
                      <p className="text-[var(--color-medium-500)] leading-relaxed text-sm sm:text-base">
                        email@artisanalbakery.com.br
                      </p>
                    </div>
                  </div>

                  {/* Horários */}
                  <div className="flex items-start">
                    {" "}
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mr-3 sm:mr-5 shrink-0">
                      <LordIcon
                        src="https://cdn.lordicon.com/warimioc.json"
                        trigger="loop"
                        colors={{
                          primary: "#dfdfdf",
                          secondary: "#000000",
                        }}
                        size={isMobile ? 49 : 49}
                      />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                        Horário de Funcionamento
                      </h4>
                      <div className="text-[var(--color-medium-500)] text-sm sm:text-base">
                        <div className="flex justify-between max-w-[200px] mb-1">
                          <span className="font-medium">Segunda - Sexta:</span>
                          <span>7h às 20h</span>
                        </div>
                        <div className="flex justify-between max-w-[200px] mb-1">
                          <span className="font-medium">Sábados:</span>
                          <span>7h às 18h</span>
                        </div>
                        <div className="flex justify-between max-w-[200px]">
                          <span className="font-medium">Domingos:</span>
                          <span>8h às 14h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* Social Media */}
                <div className="mt-6 xs:mt-8 sm:mt-10">
                  <h4 className="font-semibold mb-2 xs:mb-3 sm:mb-4 text-sm xs:text-base sm:text-lg">
                    Siga-nos nas redes sociais
                  </h4>
                  <div className="flex space-x-2 xs:space-x-3 sm:space-x-4">
                    <div
                      className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--color-accent)]/10 
                      flex items-center justify-center text-[var(--color-accent)] "
                    >
                      <LordIcon
                        src="https://cdn.lordicon.com/lplofcfe.json"
                        trigger="loop"
                        colors={{
                          primary: "#dfdfdf",
                          secondary: "#000000",
                        }}
                        size={isMobile ? 24 : 32}
                      />
                    </div>
                    <div
                      className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--color-accent)]/10 
                      flex items-center justify-center text-[var(--color-accent)] "
                    >
                      <LordIcon
                        src="https://cdn.lordicon.com/zmvgugmh.json"
                        trigger="loop"
                        state="hover-dots"
                        colors={{
                          primary: "#000000",
                          secondary: "#000000",
                        }}
                        size={isMobile ? 24 : 32}
                      />
                    </div>
                    <div
                      className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--color-accent)]/10 
                      flex items-center justify-center text-[var(--color-accent)] "
                    >
                      <LordIcon
                        src="https://cdn.lordicon.com/yizwahhw.json"
                        trigger="loop"
                        state="hover-draw"
                        colors={{
                          primary: "#000000",
                          secondary: "#000000",
                        }}
                        size={isMobile ? 24 : 32}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Formulário de Contato */}
          <div className="lg:col-span-3">
            <div className="bg-[var(--bg-secondary)] p-4 xs:p-6 sm:p-8 md:p-10 rounded-2xl xs:rounded-3xl shadow-md sm:shadow-lg">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-4 xs:mb-5 sm:mb-8 text-[var(--text-primary)]">
                Envie uma mensagem
              </h3>

              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-4 sm:gap-6 mb-3 xs:mb-4 sm:mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs xs:text-sm sm:text-base font-medium text-[var(--color-medium-700)] mb-1 xs:mb-2 sm:mb-3"
                    >
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-2 xs:p-3 sm:p-4 border border-[var(--border-color)] rounded-lg xs:rounded-xl 
                      bg-[var(--bg-primary)] text-[var(--text-primary)] focus:border-[var(--color-accent)] focus:ring-2 
                      focus:ring-[var(--color-accent)]/20 focus:outline-none transition text-xs xs:text-sm sm:text-base"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs xs:text-sm sm:text-base font-medium text-[var(--color-medium-700)] mb-1 xs:mb-2 sm:mb-3"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 xs:p-3 sm:p-4 border border-[var(--border-color)] rounded-lg xs:rounded-xl 
                      bg-[var(--bg-primary)] text-[var(--text-primary)] focus:border-[var(--color-accent)] focus:ring-2 
                      focus:ring-[var(--color-accent)]/20 focus:outline-none transition text-xs xs:text-sm sm:text-base"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="mb-3 xs:mb-4 sm:mb-6">
                  <label
                    htmlFor="phone"
                    className="block text-xs xs:text-sm sm:text-base font-medium text-[var(--color-medium-700)] mb-1 xs:mb-2 sm:mb-3"
                  >
                    Telefone
                  </label>{" "}
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-2 xs:p-3 sm:p-4 border border-[var(--border-color)] rounded-lg xs:rounded-xl 
                      bg-[var(--bg-primary)] text-[var(--text-primary)] focus:border-[var(--color-accent)] focus:ring-2 
                      focus:ring-[var(--color-accent)]/20 focus:outline-none transition text-xs xs:text-sm sm:text-base"
                    placeholder="(00) 00000-0000"
                    required
                  />
                </div>
                <div className="mb-3 xs:mb-4 sm:mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-xs xs:text-sm sm:text-base font-medium text-[var(--color-medium-700)] mb-1 xs:mb-2 sm:mb-3"
                  >
                    Assunto
                  </label>
                  <select
                    id="subject"
                    className="w-full p-2 xs:p-3 sm:p-4 border border-[var(--border-color)] rounded-lg xs:rounded-xl 
                      bg-[var(--bg-primary)] text-[var(--text-primary)] focus:border-[var(--color-accent)] focus:ring-2 
                      focus:ring-[var(--color-accent)]/20 focus:outline-none transition text-xs xs:text-sm sm:text-base"
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="order">Fazer uma encomenda</option>
                    <option value="catering">Serviço para eventos</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Parcerias</option>
                    <option value="other">Outro assunto</option>
                  </select>
                </div>
                <div className="mb-4 xs:mb-5 sm:mb-8">
                  <label
                    htmlFor="message"
                    className="block text-xs xs:text-sm sm:text-base font-medium text-[var(--color-medium-700)] mb-1 xs:mb-2 sm:mb-3"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={isMobile ? 4 : 6}
                    className="w-full p-2 xs:p-3 sm:p-4 border border-[var(--border-color)] rounded-lg xs:rounded-xl 
                      bg-[var(--bg-primary)] text-[var(--text-primary)] focus:border-[var(--color-accent)] focus:ring-2 
                      focus:ring-[var(--color-accent)]/20 focus:outline-none transition resize-none text-xs xs:text-sm sm:text-base"
                    placeholder="Escreva sua mensagem..."
                    required
                  ></textarea>
                </div>{" "}
                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center 
                  px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 
                  bg-[var(--color-accent)] text-white font-semibold rounded-full 
                  hover:shadow-lg transition-all duration-300 
                  text-xs xs:text-sm sm:text-base"
                >
                  <span>Enviar Mensagem</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 ml-1.5 xs:ml-2 sm:ml-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section - Movido para dentro do container principal */}
        <div className="mt-16 sm:mt-24">
          <div className="bg-[var(--bg-secondary)] p-4 sm:p-6 rounded-3xl shadow-lg overflow-hidden h-[300px] sm:h-[400px]">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.3953778542!2d-46.9249422334661!3d-23.681434660495377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2sS%C3%A3o%20Paulo%2C%20SP%2C%20Brasil!5e0!3m2!1spt-BR!2spt!4v1746709708739!5m2!1spt-BR!2spt"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Padaria Artisanal"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
