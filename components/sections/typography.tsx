import { SectionWrapper, ShowcaseCard } from "@/components/section-wrapper";
import { Separator } from "@/components/ui/separator";

export default function TypographySection() {
  return (
    <SectionWrapper id="typography" title="排版 Typography" description="Type scale, prose, code blocks, and text utilities.">

      <div className="grid gap-6 md:grid-cols-2">
        <ShowcaseCard title="字体层级 Scale">
          <div className="space-y-3">
            <p className="text-4xl font-extrabold tracking-tight">Display / 36px</p>
            <Separator />
            <p className="text-3xl font-bold tracking-tight">Heading 1 / 30px</p>
            <p className="text-2xl font-semibold tracking-tight">Heading 2 / 24px</p>
            <p className="text-xl font-semibold">Heading 3 / 20px</p>
            <p className="text-lg font-medium">Heading 4 / 18px</p>
            <Separator />
            <p className="text-base">正文 Base — The quick brown fox jumps over the lazy dog.</p>
            <p className="text-sm text-muted-foreground">辅助文字 Small — 次要信息、说明文字、时间戳</p>
            <p className="text-xs text-muted-foreground">说明 XSmall — 版权信息、标注、数据来源</p>
          </div>
        </ShowcaseCard>

        <ShowcaseCard title="文字样式 Styles">
          <div className="space-y-3 text-sm">
            <p className="font-bold">加粗文字 font-bold — Bold 700</p>
            <p className="font-semibold">半粗体 font-semibold — Semibold 600</p>
            <p className="font-medium">中等粗细 font-medium — Medium 500</p>
            <p className="font-normal">普通字重 font-normal — Regular 400</p>
            <p className="font-light text-muted-foreground">细体 font-light — Light 300</p>
            <Separator />
            <p className="italic">斜体 italic — The quick brown fox</p>
            <p className="underline underline-offset-4">下划线 underline</p>
            <p className="line-through text-muted-foreground">删除线 line-through</p>
            <p className="uppercase tracking-widest text-xs text-muted-foreground">uppercase tracking-widest</p>
            <p className="font-mono text-xs bg-muted rounded px-1.5 py-0.5 inline-block">monospace font</p>
          </div>
        </ShowcaseCard>
      </div>

      <ShowcaseCard title="文章排版 Prose">
        <article className="prose prose-sm dark:prose-invert max-w-none">
          <h3 className="text-lg font-semibold mt-0">shadcn/ui 设计理念</h3>
          <p className="text-muted-foreground leading-relaxed">
            shadcn/ui 不是一个传统意义上的组件库，它更像是一套<strong>设计系统的参考实现</strong>。
            每个组件都以源代码的形式直接进入你的项目，完全可定制，没有黑盒，没有版本锁定。
            底层基于 <strong className="text-primary">Radix UI</strong> 的无头组件，保证了完整的无障碍访问支持。
          </p>
          <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">
            &ldquo;Accessible. Customizable. Open Source. Copy and paste the components you need into your apps. Works with your favorite frameworks.&rdquo;
          </blockquote>
          <p className="text-muted-foreground leading-relaxed">
            配合 <code className="text-xs bg-muted rounded px-1 py-0.5">Tailwind CSS v4</code>，
            通过 CSS 变量驱动的主题系统，只需修改几个变量就能切换整个应用的视觉风格，
            暗色模式、品牌色、圆角半径都可以一键调整。
          </p>
        </article>
      </ShowcaseCard>

      <ShowcaseCard title="代码块 Code">
        <div className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground mb-2">Inline Code</p>
            <p className="text-sm">
              使用 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">npx shadcn@latest add button</code> 安装组件，
              代码会直接写入 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">components/ui/button.tsx</code>。
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Code Block</p>
            <pre className="rounded-lg bg-muted p-4 overflow-x-auto">
              <code className="font-mono text-xs leading-relaxed">{`import { Button } from "@/components/ui/button"

export function Demo() {
  return (
    <div className="flex gap-2">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  )
}`}</code>
            </pre>
          </div>
        </div>
      </ShowcaseCard>

    </SectionWrapper>
  );
}
