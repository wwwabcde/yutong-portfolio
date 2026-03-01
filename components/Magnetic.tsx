"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { springConfig } from "./constants";

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Magnetic({ children, className, onClick }: MagneticProps) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const translateX = useSpring(mx, springConfig);
  const translateY = useSpring(my, springConfig);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    mx.set(offsetX * 0.25);
    my.set(offsetY * 0.25);
  };

  const handleEnter = () => {
    window.dispatchEvent(
      new CustomEvent("cursor-interactive", { detail: { active: true } })
    );
  };

  const handleLeave = () => {
    window.dispatchEvent(
      new CustomEvent("cursor-interactive", { detail: { active: false } })
    );
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      style={{ translateX, translateY }}
      className={className}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
