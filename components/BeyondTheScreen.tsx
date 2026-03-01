"use client";

import { Waves, Camera } from "lucide-react";
import { motion } from "framer-motion";
import { springConfig } from "./constants";
import { useState, useEffect } from "react";

const METHODOLOGY_GRID = [
  {
    id: "first-principles",
    title: "第一性原理",
    en: "First Principles",
    image: "/image/极简建筑.jpg",
    text: "识别问题的真实约束，而非表层需求。从变量关系出发，构建产品决策路径。",
  },
  {
    id: "evolutionary",
    title: "演进式系统架构",
    en: "Evolutionary Systems",
    image: "/image/手稿图.jpg",
    text: "系统不是一次设计完成，而是在真实反馈中持续进化。",
  },
  {
    id: "data-loop",
    title: "数据驱动的归因闭环",
    en: "Data-Driven Loop",
    image: "/image/working.jpg",
    text: "将结果转化为可定位的问题，让迭代拥有明确方向。",
  },
  {
    id: "collaborative",
    title: "跨界协作与价值连接",
    en: "Collaborative Link",
    image: "/image/白板讨论.jpg",
    text: "连接算法与业务语境，让技术能力成为可交付产品。",
  },
];

const WORKING_STYLE_TAGS = ["目标倒推路径", "闭环驱动迭代", "高压下稳定交付"];

const GALLERY_ITEMS = [
  { src: "/image/unsw2.JPG", caption: "学术背景", alt: "UNSW" },
  { src: "/image/摄影2.JPG", caption: "审美表现", alt: "摄影" },
  { src: "/image/surfing.jpg", caption: "生活状态", alt: "冲浪" },
];

function VerticalScroll() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % GALLERY_ITEMS.length), 4500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-apple-secondary">
        视觉长廊
      </p>
      <div className="relative min-h-[280px] flex-1 overflow-hidden rounded-xl bg-apple-bg">
        {GALLERY_ITEMS.map((item, i) => (
          <motion.div
            key={item.src + i}
            initial={false}
            animate={{ opacity: index === i ? 1 : 0, scale: index === i ? 1 : 0.98 }}
            transition={{ type: "spring", stiffness: 120, damping: 25 }}
            className="absolute inset-0 flex flex-col"
          >
            <div className="relative min-h-[200px] flex-1 overflow-hidden rounded-xl">
              <img
                src={item.src}
                alt={item.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
            <p className="mt-2 shrink-0 text-xs text-apple-secondary">{item.caption}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center gap-1.5">
        {GALLERY_ITEMS.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`图片 ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${index === i ? "w-5 bg-apple-primary" : "w-1.5 bg-apple-primary/30"}`}
          />
        ))}
      </div>
    </div>
  );
}

export function BeyondTheScreen() {
  return (
    <>
      {/* 专业方法论 — 图片为氛围背景，文案为主视觉 */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-apple-secondary">
          Working Style
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-apple-primary sm:text-3xl">
          专业方法论
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {METHODOLOGY_GRID.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring", ...springConfig, delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="group relative flex min-h-[200px] flex-col overflow-hidden rounded-xl border border-apple-primary/5 bg-apple-surface shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover scale-105 transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ filter: "blur(12px) brightness(0.6)" }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" aria-hidden />
              <div className="relative z-10 mt-auto flex flex-col justify-end p-5 text-white">
                <p className="text-[10px] font-medium uppercase tracking-wider text-white/70">{item.en}</p>
                <p className="mt-1 font-semibold tracking-tight text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/95">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Beyond the Screen — 三列：工作方式 | 兴趣卡片 | 视觉长廊 */}
      <section className="mx-auto mt-12 w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-apple-secondary">
          Beyond the Screen
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {/* 左侧：工作方式 — 弱化背景图，文案为主 */}
          <div className="relative flex min-h-[240px] flex-col justify-center overflow-hidden rounded-xl border border-apple-primary/5 bg-apple-surface p-6 shadow-sm">
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden
            >
              <img
                src="/image/极简建筑.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                style={{ opacity: 0.4 }}
              />
            </div>
            <div className="relative z-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-apple-secondary">
                Working Style
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-apple-primary sm:text-2xl">
                工作方式
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {WORKING_STYLE_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-apple-primary/15 bg-apple-bg/90 px-3 py-1 text-[11px] font-medium text-apple-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 中间：潜水 + 摄影 */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", ...springConfig }}
              className="group relative flex min-h-[180px] flex-col justify-end overflow-hidden rounded-xl border border-apple-primary/5 shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src="/image/diving.JPG"
                alt="潜水"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" aria-hidden />
              <div className="relative z-10 flex items-center gap-2 p-5 text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                  <Waves className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">潜水 Diving</p>
                  <p className="mt-0.5 text-xs text-white/90">
                    在高压环境下剥离噪音，保持呼吸与节奏。
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", ...springConfig, delay: 0.05 }}
              className="group relative flex min-h-[180px] flex-col justify-end overflow-hidden rounded-xl border border-apple-primary/5 shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src="/image/摄影1.jpg"
                alt="摄影"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" aria-hidden />
              <div className="relative z-10 flex items-center gap-2 p-5 text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                  <Camera className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">摄影 Photography</p>
                  <p className="mt-0.5 text-xs text-white/90">
                    用镜头捕捉秩序，对光影与留白极度敏感。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 右侧：视觉长廊 */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 22 }}
            className="min-h-[320px] md:min-h-[380px]"
          >
            <VerticalScroll />
          </motion.div>
        </div>
      </section>
    </>
  );
}
