import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import LordIcon from "./LordIcon";

interface MobileNavMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNavMenu({ isOpen, onClose }: MobileNavMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null); // Calculando a altura da tela baseada na API window
  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 0;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);

      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ paddingTop: Math.min(screenHeight * 0.15, 100) }}
    >
      {" "}
      <motion.div
        className="bg-white shadow-xl p-6 w-[94%] max-w-sm text-center mx-auto rounded-xl relative"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {" "}
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-30 left-35 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-label="Fechar menu"
        >
          {" "}
          <LordIcon
            src="https://cdn.lordicon.com/yvrdhjfn.json"
            trigger="in"
            delay={1500}
            state="in-reveal"
            size={24}
            colors={{
              primary: "#000000",
              secondary: "#000000",
            }}
          />
        </button>
        <motion.ul
          className="space-y-5 text-gray-800"
          variants={containerAnimation}
          initial="hidden"
          animate="show"
        >
          <motion.li variants={itemAnimation}>
            <a
              href="#home"
              onClick={onClose}
              className="block py-2 px-3 text-lg font-medium hover:text-[var(--color-accent)] transition-colors duration-300"
            >
              Início
            </a>
          </motion.li>
          <motion.li variants={itemAnimation}>
            <a
              href="#about"
              onClick={onClose}
              className="block py-2 px-3 text-lg font-medium hover:text-[var(--color-accent)] transition-colors duration-300"
            >
              Nossa História
            </a>
          </motion.li>
          <motion.li variants={itemAnimation}>
            <a
              href="#products"
              onClick={onClose}
              className="block py-2 px-3 text-lg font-medium hover:text-[var(--color-accent)] transition-colors duration-300"
            >
              Produtos
            </a>
          </motion.li>{" "}
          <motion.li variants={itemAnimation}>
            <a
              href="#contact"
              onClick={onClose}
              className="block py-2 px-3 text-lg font-medium hover:text-[var(--color-accent)] transition-colors duration-300"
            >
              Contato
            </a>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}
