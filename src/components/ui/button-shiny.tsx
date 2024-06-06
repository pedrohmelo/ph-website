"use client";

import { motion } from "framer-motion";

const ButtonShiny = () => {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      style={{ "--x": "100%" } as React.CSSProperties}
      animate={{ "--x": "-100%" }}
      className="px-6 py-2 rounded-md relative radial-gradient"
    >
      <span className="text-neutral-200 tracking-wide font-light text-xl h-full w-full block relative linear-mask">
        Entre em contato
      </span>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.button>
  );
};

export default ButtonShiny;
