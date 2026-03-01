"use client";

import { motion } from "framer-motion";

const revealTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
};

interface RevealOnViewProps {
  children: React.ReactNode;
  className?: string;
}

export function RevealOnView({ children, className }: RevealOnViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={revealTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
