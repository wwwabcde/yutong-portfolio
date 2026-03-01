"use client";

import { useState } from "react";
import { Bot, Database, LineChart } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Magnetic } from "./Magnetic";
import { TiltCard } from "./TiltCard";
import { NL2SQLSparkline } from "./NL2SQLSparkline";
import { RevealOnView } from "./RevealOnView";
import { springConfig } from "./constants";

type ExperienceId = "bytedance" | "euler";

export function InternshipAndProjects() {
  const [active, setActive] = useState<ExperienceId | null>(null);

  return (
    <section className="mx-auto mt-16 flex w-full max-w-6xl flex-col gap-12 px-4 pb-24 pt-4 sm:px-6 lg:px-8">
      <RevealOnView className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-apple-primary sm:text-3xl">
          核心项目
        </h2>
        <p className="max-w-md text-sm text-apple-secondary">
          Problem → Judgment → Decision → System → Outcome
        </p>
      </RevealOnView>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* 1. ByteDance · Meego NL2SQL */}
        <RevealOnView>
          <Magnetic onClick={() => setActive("bytedance")} className="group cursor-pointer">
            <TiltCard>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", ...springConfig }}
                layoutId="exp-bytedance"
                className="flex h-full flex-col justify-between rounded-3xl bg-apple-surface p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-apple-bg">
                      <Bot className="h-5 w-5 text-apple-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-apple-secondary">
                      ByteDance
                    </p>
                    <p className="mt-1 text-sm font-semibold text-apple-primary">
                      Meego NL2SQL
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-apple-secondary">
                  Product Judgment
                </p>
                <p className="text-sm leading-relaxed text-apple-secondary">
                  问题本质：NL2SQL 在真实场景中不可控，是因为「对错」没有可复现的判定标准；优化只能靠感觉。判断：先建立可观测的评测闭环，再谈模型与 Prompt；否则迭代无依据。因此选择把评测做成产品能力，用归因把「错在哪一类」显性化。
                </p>
                <p className="text-sm leading-relaxed text-apple-primary font-medium">
                  决策：端到端机评 + 错误归因先行 → 准确率 58% → 95%+；架构从单轮生成演进为多角色协同。
                </p>

                <div className="mt-2 rounded-2xl bg-apple-bg/80 p-4">
                  <div className="flex items-center justify-between text-xs text-apple-secondary">
                    <span>NL2SQL 准确率</span>
                    <span className="font-semibold text-apple-primary">58% → 95%+</span>
                  </div>
                  <div className="mt-2">
                    <NL2SQLSparkline />
                  </div>
                </div>
              </div>
            </motion.article>
          </TiltCard>
        </Magnetic>
        </RevealOnView>

        {/* 2. Euler AI · 金融年报 RAG */}
        <RevealOnView>
          <Magnetic onClick={() => setActive("euler")} className="group cursor-pointer">
            <TiltCard>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", ...springConfig }}
                layoutId="exp-euler"
                className="flex h-full flex-col justify-between rounded-3xl bg-apple-surface p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-apple-bg">
                      <Database className="h-5 w-5 text-apple-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-apple-secondary">
                        Euler AI · Sydney
                      </p>
                    <p className="mt-1 text-sm font-semibold text-apple-primary">
                      Financial Report AI
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-apple-secondary">
                  Product Judgment
                </p>
                <p className="text-sm leading-relaxed text-apple-secondary">
                  问题本质：分析师在大量年报里找相似竞品，依赖人工检索，效率与一致性都不可控。判断：模型选型若「先定再证」会陷入自证；必须先有统一口径的对比，再在精度、延迟、可溯源之间做产品化权衡。因此选 FinGPT + Fin-R1 组合，兼顾检索质量与可解释性。
                </p>
                <p className="text-sm leading-relaxed text-apple-primary font-medium">
                  决策：baseline 库 + 四类路径对比 → 0→1 验证；核心场景准确率 &gt; 80%。
                </p>

                  <div className="mt-2 rounded-2xl bg-apple-bg/80 p-4">
                    <div className="flex items-center justify-between text-xs text-apple-secondary">
                      <span>关键场景问答准确率</span>
                      <span className="font-semibold text-apple-primary">&gt; 80%</span>
                    </div>
                    <div className="mt-3 flex items-center gap-3 text-xs text-apple-secondary">
                    <LineChart className="h-4 w-4" />
                    <span>基于 FinGPT embedding 的向量检索 + Fin-R1 推理闭环。</span>
                  </div>
                </div>
              </div>
            </motion.article>
          </TiltCard>
        </Magnetic>
        </RevealOnView>

        {/* 3. 科研与奖项 */}
        <RevealOnView className="lg:col-span-2">
          <Magnetic className="group cursor-pointer">
            <TiltCard>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", ...springConfig }}
                className="flex flex-col justify-between gap-6 rounded-3xl bg-apple-surface p-8 md:flex-row"
              >
                <div className="flex-1 space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-apple-secondary">
                    Research & Awards
                  </p>
                  <h3 className="text-lg font-semibold text-apple-primary">
                    从指标到可讲述的决策
                  </h3>
                  <div className="space-y-3 text-sm leading-relaxed text-apple-secondary">
                    <p>
                      手语识别：定义「可比较的评测口径」后选轻量 CNN，94.03% 准确率 + 国际会议一作。
                    </p>
                    <p>
                      泰迪杯二等奖：供应链需求预测——从特征工程、模型选型到可视化，形成可复用的分析叙事。
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 text-xs text-apple-secondary md:max-w-xs">
                  <div className="rounded-2xl bg-apple-bg/80 p-3">
                    <p className="font-semibold text-apple-primary">Product Judgment</p>
                    <p className="mt-1">
                      指标是否对准业务问题；选型是否有统一对比而非先定后证。
                    </p>
                  </div>
                  <div className="rounded-2xl bg-apple-bg/80 p-3">
                    <p className="font-semibold text-apple-primary">System</p>
                    <p className="mt-1">
                      可验证的技术路径：CNN / 时序 / 特征工程拆解为可观测的中间结果。
                    </p>
                  </div>
                  <div className="rounded-2xl bg-apple-bg/80 p-3">
                    <p className="font-semibold text-apple-primary">Outcome</p>
                    <p className="mt-1">
                      用「为什么做、做成了什么、下一步如何放大」形成可复用的故事线。
                    </p>
                  </div>
                </div>
              </motion.article>
            </TiltCard>
          </Magnetic>
        </RevealOnView>
      </div>

      {/* LayoutID 全屏展开详情 */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center bg-apple-bg/60 px-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-full max-w-4xl">
              <motion.article
                layoutId={active === "bytedance" ? "exp-bytedance" : "exp-euler"}
                className="max-h-[80vh] overflow-y-auto rounded-[32px] bg-apple-surface p-8 shadow-2xl"
                transition={{ type: "spring", ...springConfig }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-apple-bg">
                      {active === "bytedance" ? (
                        <Bot className="h-5 w-5 text-apple-primary" />
                      ) : (
                        <Database className="h-5 w-5 text-apple-primary" />
                      )}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-apple-secondary">
                        {active === "bytedance"
                          ? "ByteDance · Meego NL2SQL"
                          : "Euler AI · Financial RAG"}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-apple-primary">
                        {active === "bytedance"
                          ? "Multi-Agent 自动化评测 · 58% → 95%+"
                          : "FinGPT + Fin-R1 · 金融年报 RAG 系统"}
                      </p>
                    </div>
                  </div>

                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActive(null)}
                    className="rounded-full bg-apple-bg/80 px-3 py-1 text-xs text-apple-secondary hover:text-apple-primary"
                  >
                    关闭
                  </motion.button>
                </div>

                <div className="mt-6 grid gap-8 text-sm text-apple-secondary md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                  <div className="space-y-4">
                    {active === "bytedance" ? (
                      <>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-apple-secondary">
                            Problem
                          </p>
                          <p className="mt-2">
                            NL2SQL 在真实场景中不可控，因「对错」无复现标准；优化只能靠感觉。
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-apple-secondary">
                            Product Judgment
                          </p>
                          <p className="mt-2">
                            先有可观测的评测闭环，再谈模型与 Prompt；否则迭代无依据。选型：把评测做成产品能力，用归因显性化「错在哪一类」。
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-apple-secondary">
                            System
                          </p>
                          <p className="mt-2">
                            单轮生成 → 多角色协同；链路：query 生成 → 报告生成 → 机评 → 错误归因。
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-apple-secondary">
                            Outcome
                          </p>
                          <p className="mt-2">
                            机评准确率 58% → 95%+；可迁移的迭代方法论。
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-apple-secondary">
                            Problem
                          </p>
                          <p className="mt-2">
                            分析师在大量年报中找相似竞品，依赖人工检索，效率与一致性不可控。
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-apple-secondary">
                            Product Judgment
                          </p>
                          <p className="mt-2">
                            先有统一口径的对比再选型，避免「先定再证」。在精度、延迟、可溯源之间做产品化权衡；选 FinGPT + Fin-R1 兼顾检索与可解释性。
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-apple-secondary">
                            System
                          </p>
                          <p className="mt-2">
                            FinGPT embedding + Fin-R1；数据管道、分块与任务拆解。
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-apple-secondary">
                            Outcome
                          </p>
                          <p className="mt-2">
                            0→1 验证；核心场景准确率 &gt; 80%。
                          </p>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="rounded-2xl bg-apple-bg/80 p-4">
                    {active === "bytedance" ? (
                      <>
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-apple-secondary">
                          NL2SQL · Multi-Agent Blueprint
                        </p>
                        <div className="mt-4 grid gap-3 text-xs text-apple-secondary md:grid-cols-2">
                          {[
                            {
                              title: "Query Agent",
                              desc: "理解意图与约束，清洗用户自然语言。",
                            },
                            {
                              title: "Planner Agent",
                              desc: "拆解多表关联，给出 SQL 结构草图。",
                            },
                            {
                              title: "SQL Agent",
                              desc: "生成并修正 SQL，保证语法与 schema 合法。",
                            },
                            {
                              title: "Eval Agent",
                              desc: "自动对齐结果与期望答案，产出评测报告。",
                            },
                          ].map((b) => (
                            <div
                              key={b.title}
                              className="rounded-2xl bg-apple-surface p-3"
                            >
                              <p className="text-[11px] font-semibold text-apple-primary">
                                {b.title}
                              </p>
                              <p className="mt-1 text-[11px] text-apple-secondary">
                                {b.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-apple-secondary">
                          Financial RAG · System Sketch
                        </p>
                        <div className="mt-4 grid gap-3 text-xs text-apple-secondary md:grid-cols-2">
                          {[
                            {
                              title: "数据管道",
                              desc: "标准化财报解析、分块与指标抽取。",
                            },
                            {
                              title: "FinGPT Embedding",
                              desc: "利用金融语料 embedding 构建向量索引。",
                            },
                            {
                              title: "低成本 LoRA",
                              desc: "针对私域场景增量微调，控制推理成本。",
                            },
                            {
                              title: "任务拆解 & Fin-R1",
                              desc: "将复杂问答拆解为可解释子任务，由 Fin-R1 完成推理。",
                            },
                          ].map((b) => (
                            <div
                              key={b.title}
                              className="rounded-2xl bg-apple-surface p-3"
                            >
                              <p className="text-[11px] font-semibold text-apple-primary">
                                {b.title}
                              </p>
                              <p className="mt-1 text-[11px] text-apple-secondary">
                                {b.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </motion.article>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
