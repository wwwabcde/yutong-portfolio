"use client";

import { motion } from "framer-motion";

export function AppNav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-30 border-b border-apple-primary/5 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <span className="text-sm font-semibold text-apple-primary tracking-tight">
          吴雨桐
        </span>
        <div className="flex items-center gap-6 text-[13px] text-apple-secondary">
          <a href="#about" className="transition-colors hover:text-apple-primary">
            关于
          </a>
          <a href="#projects" className="transition-colors hover:text-apple-primary">
            项目
          </a>
          <a href="#thinking" className="transition-colors hover:text-apple-primary">
            产品思考
          </a>
          <a href="#contact" className="transition-colors hover:text-apple-primary">
            联系
          </a>
        </div>
      </div>
    </nav>
  );
}
