"use client";
import { SectionWrapper, ShowcaseCard } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ChevronDown, Settings, User, LogOut, PanelRight, Search, Info, CreditCard, LifeBuoy } from "lucide-react";

const COMMANDS = ["Dashboard", "Analytics", "Projects", "Team Settings", "Billing", "API Keys", "Webhooks", "Audit Log"];

export default function OverlaysSection() {
  return (
    <TooltipProvider>
    <SectionWrapper id="overlays" title="弹层 & 覆盖" description="Dialog, Sheet, Dropdown, Popover, Command, Tooltip.">

      <ShowcaseCard title="对话框 Dialog">
        <div className="flex flex-wrap gap-3">
          <Dialog>
            <DialogTrigger><Button>标准对话框</Button></DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>编辑个人信息</DialogTitle>
                <DialogDescription>修改您的个人资料，完成后点击保存。</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-2">
                <div className="space-y-1.5"><Label>用户名</Label><Input defaultValue="alice_chen" /></div>
                <div className="space-y-1.5"><Label>邮箱</Label><Input type="email" defaultValue="alice@example.com" /></div>
              </div>
              <DialogFooter>
                <Button variant="outline">取消</Button>
                <Button>保存更改</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger><Button variant="destructive">确认对话框</Button></DialogTrigger>
            <DialogContent className="max-w-sm">
              <DialogHeader>
                <DialogTitle>删除账户</DialogTitle>
                <DialogDescription>此操作不可撤销。您的所有数据将被永久删除。</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline">取消</Button>
                <Button variant="destructive">确认删除</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </ShowcaseCard>

      <div className="grid gap-6 md:grid-cols-2">
        <ShowcaseCard title="侧边抽屉 Sheet">
          <Sheet>
            <SheetTrigger>
              <Button variant="outline" className="gap-2"><PanelRight className="h-4 w-4" />打开抽屉</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>通知设置</SheetTitle>
                <SheetDescription>管理您希望接收的通知类型</SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                {[
                  ["邮件通知", "接收每周摘要和重要更新"],
                  ["推送通知", "浏览器桌面推送通知"],
                  ["短信提醒", "仅用于安全验证和账单"],
                  ["产品动态", "新功能发布和版本更新"],
                  ["团队活动", "成员加入、评论和提及"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b pb-3 last:border-0">
                    <div>
                      <p className="text-sm font-medium">{k}</p>
                      <p className="text-xs text-muted-foreground">{v}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </ShowcaseCard>

        <ShowcaseCard title="下拉菜单 Dropdown">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline" className="gap-2">账户菜单 <ChevronDown className="h-4 w-4" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuLabel>alice@example.com</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2"><User className="h-4 w-4" />个人设置</DropdownMenuItem>
              <DropdownMenuItem className="gap-2"><CreditCard className="h-4 w-4" />账单管理</DropdownMenuItem>
              <DropdownMenuItem className="gap-2"><Settings className="h-4 w-4" />系统配置</DropdownMenuItem>
              <DropdownMenuItem className="gap-2"><LifeBuoy className="h-4 w-4" />帮助文档</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2 text-destructive focus:text-destructive"><LogOut className="h-4 w-4" />退出登录</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ShowcaseCard>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ShowcaseCard title="气泡卡片 Popover">
          <Popover>
            <PopoverTrigger>
              <Button variant="outline" className="gap-2"><Info className="h-4 w-4" />查看使用量</Button>
            </PopoverTrigger>
            <PopoverContent className="w-72">
              <div className="space-y-3">
                <p className="font-semibold text-sm">当月使用量</p>
                <p className="text-xs text-muted-foreground">Pro 计划 · 重置于 8月1日</p>
                <div className="space-y-2">
                  {[["API 调用","8,240 / 10,000"],["存储空间","4.2 GB / 10 GB"],["团队成员","6 / 10 人"],["自定义域名","2 / 5 个"]].map(([k,v])=>(
                    <div key={k} className="flex justify-between text-xs">
                      <span className="text-muted-foreground">{k}</span>
                      <span className="font-medium">{v}</span>
                    </div>
                  ))}
                </div>
                <Button size="sm" className="w-full">升级计划</Button>
              </div>
            </PopoverContent>
          </Popover>
        </ShowcaseCard>

        <ShowcaseCard title="Tooltip 工具提示">
          <div className="flex flex-wrap gap-4">
            {(["top","bottom","left","right"] as const).map((side) => (
              <Tooltip key={side}>
                <TooltipTrigger>
                  <Button variant="outline" size="sm">{side}</Button>
                </TooltipTrigger>
                <TooltipContent side={side}>
                  <p>{side} 方向的提示内容</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </ShowcaseCard>
      </div>

      <ShowcaseCard title="命令面板 Command" description="类 VS Code ⌘K 的快捷搜索入口">
        <div className="border rounded-lg overflow-hidden max-w-md">
          <Command>
            <CommandInput autoFocus={false} placeholder="搜索功能、页面、操作…" />
            <CommandList>
              <CommandEmpty>没有找到相关结果</CommandEmpty>
              <CommandGroup heading="页面">
                {COMMANDS.slice(0, 4).map((cmd) => (
                  <CommandItem key={cmd} className="gap-2">
                    <Search className="h-4 w-4 text-muted-foreground" />{cmd}
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandGroup heading="设置">
                {COMMANDS.slice(4).map((cmd) => (
                  <CommandItem key={cmd} className="gap-2">
                    <Settings className="h-4 w-4 text-muted-foreground" />{cmd}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </ShowcaseCard>

    </SectionWrapper>
    </TooltipProvider>
  );
}
