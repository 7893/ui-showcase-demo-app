"use client";
import { useState } from "react";
import { SectionWrapper, ShowcaseCard } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Toggle } from "@/components/ui/toggle";
import { Loader2, Download, Trash2, Check, Plus, Mail, GitFork, Globe } from "lucide-react";

export default function ButtonsSection() {
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <SectionWrapper id="buttons" title="按钮 & 操作" description="Button variants, sizes, states, and icon combinations.">

      <ShowcaseCard title="变体 Variants">
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </ShowcaseCard>

      <div className="grid gap-6 md:grid-cols-2">
        <ShowcaseCard title="尺寸 Sizes">
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon"><Plus className="h-4 w-4" /></Button>
          </div>
        </ShowcaseCard>

        <ShowcaseCard title="图标 With Icons">
          <div className="flex flex-wrap gap-3">
            <Button className="gap-2"><Download className="h-4 w-4" />下载</Button>
            <Button variant="outline" className="gap-2"><Mail className="h-4 w-4" />发送邮件</Button>
            <Button variant="destructive" className="gap-2"><Trash2 className="h-4 w-4" />删除</Button>
            <Button variant="outline" className="gap-2"><GitFork className="h-4 w-4" />GitHub</Button>
            <Button variant="outline" className="gap-2"><Globe className="h-4 w-4" />Google 登录</Button>
          </div>
        </ShowcaseCard>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <ShowcaseCard title="状态 Loading">
          <div className="flex flex-col gap-3">
            <Button onClick={handleLoad} disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {loading ? "处理中…" : "点击触发"}
            </Button>
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 持续加载
            </Button>
          </div>
        </ShowcaseCard>

        <ShowcaseCard title="状态 Saved">
          <div className="flex flex-col gap-3">
            <Button onClick={handleSave} variant={saved ? "outline" : "default"} className="gap-2 transition-all">
              {saved ? <><Check className="h-4 w-4 text-green-500" />已保存</> : "保存更改"}
            </Button>
            <Button disabled>禁用状态</Button>
          </div>
        </ShowcaseCard>

        <ShowcaseCard title="Toggle">
          <div className="flex flex-wrap gap-3">
            <Toggle>粗体</Toggle>
            <Toggle>斜体</Toggle>
            <Toggle defaultPressed>下划线</Toggle>
          </div>
        </ShowcaseCard>
      </div>

      <ShowcaseCard title="Badge 徽标">
        <div className="flex flex-wrap items-center gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge className="bg-green-500/15 text-green-600 border-green-500/30">成功</Badge>
          <Badge className="bg-yellow-500/15 text-yellow-600 border-yellow-500/30">警告</Badge>
          <Badge className="bg-blue-500/15 text-blue-600 border-blue-500/30">信息</Badge>
          <Badge className="bg-purple-500/15 text-purple-600 border-purple-500/30">特殊</Badge>
        </div>
      </ShowcaseCard>

    </SectionWrapper>
  );
}
