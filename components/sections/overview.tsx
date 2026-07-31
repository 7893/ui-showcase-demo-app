import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Box, Palette, Zap, ExternalLink } from "lucide-react";

const STATS = [
  { label: "组件数量", value: "50+", desc: "开箱即用" },
  { label: "构建工具", value: "Next.js", desc: "App Router" },
  { label: "样式方案", value: "Tailwind", desc: "CSS v4" },
  { label: "部署平台", value: "Cloudflare", desc: "Workers" },
];

const FEATURES = [
  { icon: Box, title: "无头组件", desc: "基于 Radix UI，完全可访问，语义化 HTML，键盘导航全覆盖。" },
  { icon: Palette, title: "完全可定制", desc: "组件代码直接进入项目，CSS 变量驱动主题，暗色模式开箱即用。" },
  { icon: Zap, title: "边缘部署", desc: "部署在 Cloudflare 全球边缘网络，延迟低，无冷启动，全球加速。" },
];

export default function OverviewSection() {
  return (
    <section id="overview" className="scroll-mt-20">
      <div className="mb-16 text-center">
        <Badge variant="outline" className="mb-4">shadcn/ui · Tailwind CSS v4 · Cloudflare Workers</Badge>
        <h1 className="text-5xl font-bold tracking-tight">
          UI Component
          <span className="text-muted-foreground"> Showcase</span>
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
          精选现代 Web 组件，涵盖表单、反馈、数据展示、图表等全场景，开箱即用。
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button size="lg" className="gap-2">
            浏览组件 <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <ExternalLink className="h-4 w-4" /> shadcn/ui 文档
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-8">
        {STATS.map((s) => (
          <Card key={s.label}>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{s.value}</div>
              <div className="text-sm font-medium">{s.label}</div>
              <div className="text-xs text-muted-foreground">{s.desc}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {FEATURES.map((f) => (
          <Card key={f.title}>
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-base">{f.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
