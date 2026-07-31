"use client";

import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const SECTIONS = [
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

export function CmdKMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div 
        className="hidden md:flex items-center text-sm text-muted-foreground mr-2 px-3 py-1.5 rounded-md bg-muted/50 cursor-pointer hover:bg-muted transition-colors border" 
        onClick={() => setOpen(true)}
      >
        <span className="mr-3">搜索组件...</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput autoFocus placeholder="输入你想找的组件模块 (例如：按钮)..." />
        <CommandList>
          <CommandEmpty>未找到相关结果。</CommandEmpty>
          <CommandGroup heading="展示板块跳转">
            {SECTIONS.map((s) => (
              <CommandItem
                key={s.id}
                value={s.label}
                onSelect={() => runCommand(s.id)}
                className="cursor-pointer"
              >
                {s.label}板块
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
