import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "吴雨桐 | AI 产品 & 算法工程师",
  description: "专注于 Multi-Agent 系统与金融大模型落地的个人品牌门户网站。",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-apple-bg text-apple-primary antialiased tracking-tight">
        {children}
      </body>
    </html>
  );
}


