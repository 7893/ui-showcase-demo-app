"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { Moon, Sun, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CmdKMenu } from "@/components/cmd-k";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

const NAV = [
  { id: "overview",   label: "概览" },
  { id: "buttons",    label: "按钮" },
  { id: "forms",      label: "表单" },
  { id: "feedback",   label: "反馈" },
  { id: "data",       label: "数据展示" },
  { id: "charts",     label: "图表" },
  { id: "overlays",   label: "弹层" },
  { id: "templates",  label: "复合模板" },
  { id: "typography", label: "排版" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("overview");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // 初始化：从 URL hash 恢复位置
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setActive(hash); // eslint-disable-line
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "instant", block: "start" });
      }, 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // IntersectionObserver：滚动时自动更新高亮并同步 hash
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id);
            history.replaceState(null, "", `#${e.target.id}`);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-56px 0px -40% 0px" }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    window.location.hash = id; // eslint-disable-line
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <title>UI Showcase — shadcn/ui Components</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        {/* Top bar */}
        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
          <div className="mx-auto flex h-14 max-w-screen-xl items-center justify-between px-6">
            <div className="flex items-center gap-2.5">
              <Layers className="h-5 w-5 text-primary" />
              <span className="font-semibold tracking-tight">UI Showcase</span>
              <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">shadcn/ui</span>
            </div>
            <nav className="hidden md:flex items-center gap-0.5">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    active === n.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {n.label}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <CmdKMenu />
              <Button variant="ghost" size="icon" onClick={() => setDark(!dark)}>
                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-screen-xl px-6 py-12 space-y-24">
          {children}
        </main>
        <Toaster richColors position="bottom-right" />

        <footer className="border-t mt-24 py-8 text-center text-sm text-muted-foreground">
          Built with shadcn/ui · Deployed on Vercel
        </footer>
      </body>
    </html>
  );
}
