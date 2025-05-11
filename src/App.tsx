import { useEffect, useCallback, memo, useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LordIcon from "./components/LordIcon";
import SmoothLink from "./components/SmoothLink";
import heroImage from "./images/free-photo-of-croissant-com-nutella-e-morangos.webp";
import { useResponsive } from "./hooks/useResponsive";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Home from "./pages/Home";
import Products from "./pages/Products";
export const Hero = memo(() => {
  const { isMobile, isTablet } = useResponsive();

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-16 min-h-[85vh] xs:min-h-[90vh] sm:min-h-screen"
    >
      <div className="absolute inset-0 bg-[url('/images/bread-pattern-bg.png')] opacity-5 z-0"></div>
      <div className="container mx-auto w-full px-3 xs:px-4 sm:px-6 pt-12 xs:pt-16 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 flex flex-col lg:flex-row items-center justify-between relative z-10">
        <div className="w-full lg:w-1/2 mb-8 xs:mb-10 sm:mb-12 lg:mb-0 animate-fade-in text-center lg:text-left">
          <div className="inline-block px-3 xs:px-4 sm:px-6 py-1 sm:py-2 bg-[var(--color-accent-transparent)] rounded-full mb-2 xs:mb-3 sm:mb-4">
            <span className="text-[var(--color-accent)] font-medium text-xs xs:text-xs sm:text-sm">
              Desde 2015
            </span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 xs:mb-4 sm:mb-5 leading-tight">
            <span className="text-[var(--color-accent)]">Artesania</span> em
            <br className="hidden xs:block" /> cada pão que{" "}
            <br className="hidden xs:block" />
            assamos
          </h1>
          <p className="text-[var(--color-medium-500)] max-w-lg mx-auto lg:mx-0 mb-5 xs:mb-6 sm:mb-8 text-xs xs:text-sm sm:text-base md:text-lg">
            Receitas tradicionais preparadas com ingredientes selecionados e o
            carinho artesanal que você só encontra na Artisanal Bakery.
          </p>
          <div className="flex flex-wrap gap-2 xs:gap-3 sm:gap-4 justify-center lg:justify-start">
            <SmoothLink
              to="#products"
              className="inline-block py-2 xs:py-2.5 sm:py-3 px-4 xs:px-5 sm:px-6 bg-[var(--color-accent)] text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 text-xs xs:text-sm sm:text-base"
            >
              Ver produtos
            </SmoothLink>
            <SmoothLink
              to="#about"
              className="inline-block py-2 xs:py-2.5 sm:py-3 px-4 xs:px-5 sm:px-6 border border-[var(--border-color)] text-[var(--text-primary)] font-medium rounded-full hover:bg-[var(--color-accent-transparent)] transition-colors duration-300 text-xs xs:text-sm sm:text-base"
            >
              Nossa história
            </SmoothLink>
          </div>
          <div className="mt-6 xs:mt-8 sm:mt-10 flex gap-3 xs:gap-4 sm:gap-6 md:gap-8 justify-center lg:justify-start">
            <div>
              <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-accent)]">
                15+
              </p>
              <p className="text-xxs xs:text-xs sm:text-sm text-[var(--color-medium-500)]">
                Anos de experiência
              </p>
            </div>
            <div>
              <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-accent)]">
                20+
              </p>
              <p className="text-xxs xs:text-xs sm:text-sm text-[var(--color-medium-500)]">
                Tipos de pães
              </p>
            </div>
            <div>
              <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-accent)]">
                5k+
              </p>
              <p className="text-xs sm:text-sm text-[var(--color-medium-500)]">
                Clientes satisfeitos
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 relative animate-fade-in">
          <div
            className="relative mx-auto w-[220px] h-[220px] xs:w-[260px] xs:h-[260px] sm:w-[300px] sm:h-[300px] 
            md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px]"
          >
            <div className="absolute inset-0 rounded-full bg-[var(--color-accent-transparent)]"></div>
            <div className="absolute inset-3 xs:inset-4 rounded-full overflow-hidden bg-[var(--color-accent)]/5 flex items-center justify-center">
              <img
                src={heroImage}
                alt="Croissant com Nutella e Morangos"
                className="w-full h-full object-cover rounded-full"
                loading="eager"
              />
            </div>
            <div
              className={`absolute -top-3 xs:-top-4 sm:-top-6 md:-top-8 -left-3 xs:-left-4 sm:-left-6 md:-left-8
              w-12 xs:w-14 sm:w-16 md:w-20 h-12 xs:h-14 sm:h-16 md:h-20 
              rounded-full bg-[var(--color-secondary-accent)]/30 flex items-center justify-center 
              ${isMobile ? "hidden xs:flex" : "flex"}`}
            >
              <LordIcon
                src="https://cdn.lordicon.com/zvdzdgsi.json"
                trigger="hover"
                colors={{
                  primary: "#000000",
                  secondary: "#000000",
                }}
                size={isMobile ? 20 : isTablet ? 28 : 36}
              />
            </div>
            <div
              className={`absolute top-1/2 -right-3 xs:-right-4 sm:-right-6 md:-right-8
              w-10 xs:w-12 sm:w-14 md:w-18 h-10 xs:h-12 sm:h-14 md:h-18
              rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center
              ${isMobile ? "hidden xs:flex" : "flex"}`}
            >
              <LordIcon
                src="https://cdn.lordicon.com/irxlolbb.json"
                trigger="hover"
                colors={{
                  primary: "#000000",
                  secondary: "#000000",
                }}
                size={isMobile ? 18 : isTablet ? 24 : 30}
              />
            </div>
            <div
              className={`absolute -bottom-2 sm:-bottom-4 left-1/4
              w-8 xs:w-9 sm:w-10 md:w-14 h-8 xs:h-9 sm:h-10 md:h-14
              rounded-full bg-[var(--color-tertiary-accent)]/20 flex items-center justify-center
              ${isMobile ? "hidden xs:flex" : "flex"}`}
            >
              <LordIcon
                src="https://cdn.lordicon.com/rvssagad.json"
                trigger="hover"
                colors={{
                  primary: "#000000",
                  secondary: "#000000",
                }}
                size={isMobile ? 14 : isTablet ? 20 : 24}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 md:h-24 overflow-hidden">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
            className="fill-[var(--bg-secondary)] opacity-30"
          ></path>
        </svg>
      </div>
    </section>
  );
});
const AnimationStyles = memo(() => (
  <style>{`
    @keyframes pathDraw {
      to {
        stroke-dashoffset: 0;
      }
    }
    .animate-path-draw {
      stroke-dasharray: 130;
      stroke-dashoffset: 130;
      animation: pathDraw 1s forwards;
    }
    .animate-fade-in {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease-out, transform 0.5s ease-out;
    }
    .animate-fade-in.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .vertical-text {
      writing-mode: vertical-rl;
    }
    .delay-300 {
      animation-delay: 300ms;
    }
    
    @media (max-width: 640px) {
      .animate-fade-in {
        transition: opacity 0.4s ease-out, transform 0.4s ease-out;
      }
    }
  `}</style>
));
const App = () => {
  const [, setIsPageLoaded] = useState(false);
  const animateElements = useCallback(() => {
    const elements = document.querySelectorAll(".animate-fade-in");
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("visible");
      }, 100 * index);
    });
  }, []);

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content =
      "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";
    document.getElementsByTagName("head")[0].appendChild(meta);

    const animationTimer = setTimeout(() => {
      setIsPageLoaded(true);
      animateElements();
    }, 100);

    if ("ontouchstart" in window || navigator.maxTouchPoints) {
      document.body.classList.add("touch-device");
    }

    return () => {
      clearTimeout(animationTimer);
      document.getElementsByTagName("head")[0].removeChild(meta);
    };
  }, [animateElements]);
  return (
    <Router>
      <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen font-sans transition-colors duration-300">
        <Header />
        <main className="mx-auto">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Home />
                  <About />
                  <Products />
                  <Testimonials />
                  <Contact />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
        <AnimationStyles />
      </div>
    </Router>
  );
};

export default App;
