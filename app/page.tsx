"use client";

import dynamic from "next/dynamic";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { Magnetic } from "../components/Magnetic";
import { AppNav } from "../components/AppNav";
import { RevealOnView } from "../components/RevealOnView";
import { InternshipAndProjects } from "../components/InternshipAndProjects";
const CustomCursor = dynamic(() => import("../components/CustomCursor").then((m) => ({ default: m.CustomCursor })), {
  ssr: false,
});

const BeyondTheScreen = dynamic(
  () => import("../components/BeyondTheScreen").then((m) => ({ default: m.BeyondTheScreen })),
  { ssr: false }
);

const revealSpring = { type: "spring" as const, stiffness: 100, damping: 20 };

function Hero() {
  return (
    <section id="top" className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-4 pt-24 pb-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={revealSpring}
        className="text-center"
      >
        <p className="text-sm tracking-wide text-apple-secondary">
          AI 产品经理
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-apple-primary sm:text-5xl lg:text-6xl">
          吴雨桐
        </h1>
        <p className="mt-4 text-lg text-apple-primary">
          把 AI 能力变成可交付的产品
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-base leading-relaxed text-apple-primary font-medium">
          从问题定义、系统设计到迭代闭环——用判断驱动决策，用结果验证判断。
        </p>
        <p className="mt-4 text-sm leading-relaxed text-apple-secondary">
          关注不确定性收敛与可复用的产品逻辑，而非单点技术实现。
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...revealSpring, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Magnetic>
            <motion.a
              href="#projects"
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center rounded-lg bg-apple-primary px-5 py-3 text-sm font-semibold text-white"
            >
              查看项目
            </motion.a>
          </Magnetic>
          <Magnetic>
            <motion.a
              href="#contact"
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center rounded-lg border border-apple-primary/30 bg-transparent px-5 py-3 text-sm font-semibold text-apple-primary"
            >
              联系我
            </motion.a>
          </Magnetic>
          <Magnetic>
            <motion.a
              href="/file/yutongWu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              className="text-sm font-medium text-apple-secondary underline underline-offset-2 hover:text-apple-primary"
            >
              下载简历（PDF）
            </motion.a>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center"
      >
        <span className="text-xs text-apple-secondary">
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="inline-block"
          >
            Scroll to explore
          </motion.span>
        </span>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <RevealOnView>
      <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-apple-primary sm:text-3xl">
          能力主张
        </h2>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-apple-secondary">
          我能做的三件事：
        </p>
        <ol className="mt-6 list-decimal list-inside space-y-4 text-sm leading-relaxed text-apple-primary">
          <li>
            <span className="font-semibold">问题框定</span>
            <span className="text-apple-secondary">：识别影响体验的关键变量与可量化标准，避免「做了再说」。</span>
          </li>
          <li>
            <span className="font-semibold">不确定性收敛</span>
            <span className="text-apple-secondary">：用闭环（评测、归因、反馈）把 AI 输出从不可控变为可预期。</span>
          </li>
          <li>
            <span className="font-semibold">系统迭代逻辑</span>
            <span className="text-apple-secondary">：用数据与归因驱动「下一步改什么」，而不是堆功能。</span>
          </li>
        </ol>
      </section>
    </RevealOnView>
  );
}

function ProductThinking() {
  const stages = [
    { stage: "MVP", zh: "最短链路跑通核心价值（可用）", why: "先验证「做对」再谈「做大」；避免在错误方向上堆资源。" },
    { stage: "V1", zh: "自动评测上线（可量化）", why: "没有可观测的指标，迭代就是盲调；评测是可控的前提。" },
    { stage: "V2", zh: "引入归因维度（可定位）", why: "知道「错在哪一类」才能定向修，否则只能试错。" },
    { stage: "V3", zh: "多角色协作（可扩展）", why: "单点能力有上限；拆成可编排的子系统才能应对复杂场景。" },
    { stage: "V4", zh: "方法论与框架沉淀（可复制）", why: "把经验固化成可复用的逻辑，下次从 V2 起步而非从零开始。" },
  ];
  return (
    <RevealOnView>
      <section id="thinking" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-apple-primary sm:text-3xl">
          从 MVP 到可扩展系统
        </h2>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-apple-secondary">
          每个阶段存在的原因：让下一步决策有依据，而不是堆功能。
        </p>
        <ol className="mt-8 relative border-l border-apple-primary/20 pl-6 space-y-6">
          {stages.map((item) => (
            <li key={item.stage} className="relative">
              <span className="absolute -left-6 top-0.5 h-2.5 w-2.5 rounded-full bg-apple-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-apple-secondary">
                {item.stage}
              </span>
              <p className="mt-1 text-sm text-apple-primary">
                {item.zh}
              </p>
              <p className="mt-0.5 text-xs text-apple-secondary">
                {item.why}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </RevealOnView>
  );
}

const EDUCATION_CARDS = [
  {
    school: "Southwest Petroleum University",
    subtitle: "西南石油大学 · 数据科学与大数据技术",
    watermark: "/image/swpu.JPG",
    courses: "深度学习、机器学习、数据可视化、人工智能、大数据获取与预处理、大数据平台技术",
    achievements: [
      "泰迪杯全国二等奖",
      "数学建模省一等奖",
      "华为ICT省级一等奖",
      "优秀学生奖学金（6次）",
      "软件著作权：垃圾分类系统",
    ],
  },
  {
    school: "UNSW Sydney",
    subtitle: "人工智能硕士（2024–2026）",
    watermark: "/image/unsw1.JPG",
    focus: "深度学习、机器学习与数据挖掘、基于图的数据分析、工程管理、数据库系统",
    research: ["Multi-Agent系统", "LLM评测体系", "AI系统可靠性"],
  },
];

function AcademicsAndSkills() {
  const capabilityGroups = [
    {
      title: "产品判断",
      items: [
        { label: "问题框定与指标定义", value: 0.92 },
        { label: "需求预测与优先级", value: 0.88 },
        { label: "权衡决策（精度/成本/体验）", value: 0.9 },
      ],
    },
    {
      title: "系统架构",
      items: [
        { label: "闭环与评测设计", value: 0.9 },
        { label: "多角色 / 工作流编排", value: 0.86 },
        { label: "可复用方法论沉淀", value: 0.85 },
      ],
    },
    {
      title: "技术理解",
      items: [
        { label: "Python · 建模与脚本", value: 0.9 },
        { label: "PyTorch / TensorFlow", value: 0.85 },
        { label: "SQL 与数据建模", value: 0.86 },
      ],
    },
  ];
  return (
    <RevealOnView>
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-apple-surface">
            <GraduationCap className="h-5 w-5 text-apple-primary" />
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-apple-primary sm:text-3xl">
            Education
          </h2>
        </div>

        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {EDUCATION_CARDS.map((card, i) => (
            <motion.div
              key={card.school}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={revealSpring}
              whileHover={{ y: -2 }}
              className="relative flex h-full flex-col overflow-hidden rounded-xl border border-apple-primary/5 bg-apple-surface p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              {"watermark" in card && (
                <div
                  className="pointer-events-none absolute inset-0 opacity-10"
                  style={{ backgroundImage: `url(${card.watermark})`, backgroundSize: "cover", backgroundPosition: "center" }}
                  aria-hidden
                />
              )}
              <div className="relative z-10 flex flex-1 flex-col">
              <p className="text-lg font-semibold tracking-tight text-apple-primary">
                {card.school}
              </p>
              <p className="mt-1 text-sm text-apple-secondary">
                {card.subtitle}
              </p>
              <div className="mt-5 flex-1 space-y-4 text-sm text-apple-secondary">
                {"courses" in card && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-apple-primary">
                      核心课程
                    </p>
                    <p className="mt-1 leading-relaxed">{card.courses}</p>
                  </div>
                )}
                {"focus" in card && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-apple-primary">
                      核心方向
                    </p>
                    <p className="mt-1 leading-relaxed">{card.focus}</p>
                  </div>
                )}
                {"achievements" in card && Array.isArray(card.achievements) && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-apple-primary">
                      成果与荣誉
                    </p>
                    <ul className="mt-1 list-inside list-disc space-y-0.5 text-xs leading-relaxed">
                      {card.achievements.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {"research" in card && Array.isArray(card.research) && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-apple-primary">
                      研究重点
                    </p>
                    <ul className="mt-1 space-y-0.5 text-xs leading-relaxed">
                      {card.research.map((r) => (
                        <li key={r}>· {r}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto w-full max-w-5xl rounded-xl border border-apple-primary/5 bg-apple-surface p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-apple-secondary">
            Capability Stack
          </p>
          <div className="mt-6 grid gap-8 sm:grid-cols-3">
            {capabilityGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <p className="text-sm font-semibold text-apple-primary">
                  {group.title}
                </p>
                {group.items.map((skill) => (
                  <div key={skill.label}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-apple-primary">{skill.label}</span>
                      <span className="text-apple-secondary">
                        {(skill.value * 100)}
                      </span>
                    </div>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-apple-bg">
                      <motion.div
                        className="h-full rounded-full bg-apple-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value * 100}%` }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={revealSpring}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </RevealOnView>
  );
}

function ContactSection() {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] border-t border-neutral-200/20">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={revealSpring}
        className="flex flex-col items-center justify-center gap-4 bg-apple-surface/95 py-8 px-4 sm:px-6"
      >
        <p className="text-center text-base font-semibold text-apple-primary sm:text-lg">
          下一步，让我们把 AI 变成可交付的产品
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-apple-secondary">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-apple-primary/10 shadow-sm">
              <img
                src="/image/linkedln_photo.PNG"
                alt="吴雨桐"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-sm font-medium text-apple-primary">alinawu567@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Magnetic>
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={revealSpring}
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.location.href = "mailto:alinawu567@gmail.com";
                  }
                }}
                className="rounded-xl bg-apple-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-shadow hover:shadow-md"
              >
                发送邮件
              </motion.button>
            </Magnetic>
            <Magnetic>
              <motion.a
                href="https://www.linkedin.com/in/%E9%9B%A8%E6%A1%90-%E5%90%B4-14352b363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={revealSpring}
                className="rounded-xl border border-apple-primary/30 bg-transparent px-5 py-2.5 text-sm font-semibold text-apple-primary transition-shadow hover:shadow-md"
              >
                查看 LinkedIn
              </motion.a>
            </Magnetic>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative bg-apple-bg">
      <CustomCursor />
      <AppNav />

      <Hero />
      <About />
      <div id="projects">
        <RevealOnView>
          <InternshipAndProjects />
        </RevealOnView>
      </div>
      <ProductThinking />
      <RevealOnView>
        <BeyondTheScreen />
      </RevealOnView>
      <AcademicsAndSkills />
      <div id="contact">
        <RevealOnView>
          <ContactSection />
        </RevealOnView>
      </div>
    </main>
  );
}
