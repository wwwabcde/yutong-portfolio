"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { springConfig } from "./constants";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const outerX = useSpring(x, springConfig);
  const outerY = useSpring(y, springConfig);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const handleInteractive = (event: Event) => {
      const detail = (event as CustomEvent).detail as { active?: boolean } | undefined;
      setActive(Boolean(detail?.active));
    };

    document.body.classList.add("custom-cursor-active");
    window.addEventListener("mousemove", move);
    window.addEventListener("cursor-interactive", handleInteractive as EventListener);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("cursor-interactive", handleInteractive as EventListener);
    };
  }, [mounted, x, y]);

  if (!mounted) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 -translate-x-1/2 -translate-y-1/2 rounded-full bg-apple-primary"
        style={{ x, y, width: 6, height: 6 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-apple-primary/20 bg-apple-bg/60 backdrop-blur-md"
        style={{
          x: outerX,
          y: outerY,
          width: active ? 52 : 32,
          height: active ? 52 : 32,
        }}
        transition={{ type: "spring", ...springConfig }}
      />
    </>
  );
}
