import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import SmoothLink from "./SmoothLink";

interface MobileNavMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNavMenu({ isOpen, onClose }: MobileNavMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);

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
      className="lg:hidden fixed inset-x-0 bottom-0 top-[56px] sm:top-[64px] z-30 bg-black/50 backdrop-blur-sm flex flex-col items-start justify-start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {" "}
      <motion.div
        className="bg-white shadow-xl p-6 pt-5 w-full text-center mx-0 rounded-none border-b-2 border-[var(--color-accent)]/20 relative"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {" "}
        <motion.ul
          className="space-y-6 text-gray-800 w-full pt-0"
          variants={containerAnimation}
          initial="hidden"
          animate="show"
        >
          <motion.li variants={itemAnimation}>
            {" "}
            <SmoothLink
              to="#home"
              onClick={onClose}
              className="block py-3 px-3 text-lg font-medium hover:text-[var(--color-accent)] active:bg-[var(--color-accent)]/10 transition-colors duration-300 w-full"
            >
              Início
            </SmoothLink>
          </motion.li>
          <motion.li variants={itemAnimation}>
            {" "}
            <SmoothLink
              to="#about"
              onClick={onClose}
              className="block py-3 px-3 text-lg font-medium hover:text-[var(--color-accent)] active:bg-[var(--color-accent)]/10 transition-colors duration-300 w-full"
            >
              Nossa História
            </SmoothLink>
          </motion.li>
          <motion.li variants={itemAnimation}>
            {" "}
            <SmoothLink
              to="#products"
              onClick={onClose}
              className="block py-3 px-3 text-lg font-medium hover:text-[var(--color-accent)] active:bg-[var(--color-accent)]/10 transition-colors duration-300 w-full"
            >
              Produtos
            </SmoothLink>
          </motion.li>
          <motion.li variants={itemAnimation}>
            {" "}
            <SmoothLink
              to="#testimonials"
              onClick={onClose}
              className="block py-3 px-3 text-lg font-medium hover:text-[var(--color-accent)] active:bg-[var(--color-accent)]/10 transition-colors duration-300 w-full"
            >
              Depoimentos
            </SmoothLink>
          </motion.li>
          <motion.li variants={itemAnimation}>
            {" "}
            <SmoothLink
              to="#contact"
              onClick={onClose}
              className="block py-3 px-3 text-lg font-medium hover:text-[var(--color-accent)] active:bg-[var(--color-accent)]/10 transition-colors duration-300 w-full"
            >
              Contato
            </SmoothLink>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}
