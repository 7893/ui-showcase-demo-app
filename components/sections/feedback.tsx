"use client";
import { SectionWrapper, ShowcaseCard } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "sonner";
import { AlertCircle, CheckCircle2, Info, TriangleAlert, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

export default function FeedbackSection() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setProgress((p) => (p >= 100 ? 0 : p + 1)), 60);
    return () => clearInterval(t);
  }, []);

  return (
    <SectionWrapper id="feedback" title="反馈 & 提示" description="Alert, Toast, Progress, Skeleton, and notification patterns.">

      <ShowcaseCard title="Alert 提示条">
        <div className="space-y-3">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>默认提示</AlertTitle>
            <AlertDescription>系统正在后台执行任务，这通常不超过几秒钟。</AlertDescription>
          </Alert>
          <Alert className="border-blue-500/50 text-blue-600 [&>svg]:text-blue-600 bg-blue-500/5">
            <Info className="h-4 w-4" />
            <AlertTitle>信息提示</AlertTitle>
            <AlertDescription>您有 3 条新消息，点击右上角铃铛查看详情。</AlertDescription>
          </Alert>
          <Alert className="border-green-500/50 text-green-600 [&>svg]:text-green-600 bg-green-500/5">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>操作成功</AlertTitle>
            <AlertDescription>文件已成功上传，处理结果将在 5 分钟内发送到您的邮箱。</AlertDescription>
          </Alert>
          <Alert className="border-yellow-500/50 text-yellow-600 [&>svg]:text-yellow-600 bg-yellow-500/5">
            <TriangleAlert className="h-4 w-4" />
            <AlertTitle>注意</AlertTitle>
            <AlertDescription>您的账户存储空间已使用 87%，建议清理不必要的文件。</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>错误</AlertTitle>
            <AlertDescription>无法连接到服务器，请检查网络后重试，或联系管理员。</AlertDescription>
          </Alert>
        </div>
      </ShowcaseCard>

      <div className="grid gap-6 md:grid-cols-2">
        <ShowcaseCard title="Toast 通知" description="点击触发不同类型通知">
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" onClick={() => toast("这是一条普通消息通知。")}>默认</Button>
            <Button variant="outline" className="text-green-600" onClick={() => toast.success("文件上传成功，已保存到云端。")}>成功</Button>
            <Button variant="outline" className="text-yellow-600" onClick={() => toast.warning("存储空间不足，请及时清理。")}>警告</Button>
            <Button variant="destructive" onClick={() => toast.error("网络请求超时，请稍后重试。")}>错误</Button>
            <Button variant="outline" onClick={() => toast("后台任务已加入队列。", { action: { label: "查看", onClick: () => {} } })}>带操作</Button>
          </div>
        </ShowcaseCard>

        <ShowcaseCard title="进度条 Progress">
          <div className="space-y-5">
            <div className="space-y-1.5">
              <div className="flex justify-between text-sm"><span>上传进度</span><span className="text-muted-foreground font-mono">{progress}%</span></div>
              <Progress value={progress} className="h-2" />
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-sm"><span>磁盘使用率</span><span className="text-muted-foreground">87%</span></div>
              <Progress value={87} className="h-2 [&>div]:bg-yellow-500" />
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-sm"><span>任务完成度</span><span className="text-muted-foreground">42%</span></div>
              <Progress value={42} className="h-2 [&>div]:bg-blue-500" />
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-sm"><span>目标达成率</span><span className="text-muted-foreground text-green-500">94%</span></div>
              <Progress value={94} className="h-2 [&>div]:bg-green-500" />
            </div>
          </div>
        </ShowcaseCard>
      </div>

      <ShowcaseCard title="Skeleton 骨架屏" description="内容加载时的占位动画">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-5 space-y-4">
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-1.5 flex-1">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-4/5" />
            <Skeleton className="h-3 w-3/5" />
            <Skeleton className="h-8 w-24" />
          </div>
          <div className="space-y-2">
            <div className="flex gap-3">
              <Skeleton className="h-4 w-8" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-16 ml-auto" />
            </div>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex gap-3 items-center">
                <Skeleton className="h-4 w-8" />
                <Skeleton className="h-4" style={{ width: `${60 + i * 15}px` }} />
                <Skeleton className="h-4 w-12 ml-auto" />
              </div>
            ))}
          </div>
        </div>
      </ShowcaseCard>
    </SectionWrapper>
  );
}
