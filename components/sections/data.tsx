"use client";
import { SectionWrapper, ShowcaseCard } from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { faker } from "@faker-js/faker/locale/zh_CN";

faker.seed(123);

const STATS = [
  { label: "月活用户", value: faker.number.int({ min: 10000, max: 999999 }).toLocaleString(), change: `+${faker.number.float({ min: 1, max: 20, fractionDigits: 1 })}%`, up: true },
  { label: "转化率",   value: `${faker.number.float({ min: 1, max: 10, fractionDigits: 2 })}%`,   change: `+${faker.number.float({ min: 0.1, max: 2, fractionDigits: 1 })}%`,  up: true },
  { label: "平均会话", value: `${faker.number.int({ min: 1, max: 10 })}m ${faker.number.int({ min: 1, max: 59 })}s`,  change: `-${faker.number.int({ min: 1, max: 30 })}s`,    up: false },
  { label: "跳出率",   value: `${faker.number.float({ min: 20, max: 60, fractionDigits: 1 })}%`,   change: "0%",     up: null },
];

const PRODUCTS = Array.from({ length: 15 }).map((_, i) => ({
  rank: i + 1,
  name: faker.commerce.productName(),
  sales: faker.number.int({ min: 100, max: 10000 }),
  revenue: faker.number.int({ min: 10000, max: 1000000 }),
  rate: faker.number.int({ min: 10, max: 98 }),
  status: faker.helpers.arrayElement(["热销", "良好", "一般", "较低", "低迷"])
}));

const TEAM_COLORS = ["bg-violet-500", "bg-blue-500", "bg-green-500", "bg-orange-500", "bg-pink-500", "bg-cyan-500", "bg-yellow-500", "bg-red-500"];
const TEAM = Array.from({ length: 8 }).map((_, i) => ({
  name: faker.person.fullName(),
  role: faker.person.jobTitle(),
  tasks: faker.number.int({ min: 5, max: 50 }),
  color: TEAM_COLORS[i % TEAM_COLORS.length]
}));

const TIMELINE = Array.from({ length: 5 }).map((_, i) => ({
  date: faker.date.recent({ days: 300 }).toISOString().split('T')[0],
  label: faker.company.catchPhrase(),
  desc: faker.lorem.sentence(),
  color: i === 4 ? "bg-primary" : faker.helpers.arrayElement(["bg-green-500", "bg-blue-500"])
})).sort((a, b) => a.date.localeCompare(b.date));

const statusCls: Record<string, string> = {
  "热销": "bg-green-500/15 text-green-600 border-green-500/30",
  "良好": "bg-blue-500/15 text-blue-600 border-blue-500/30",
  "一般": "bg-yellow-500/15 text-yellow-600 border-yellow-500/30",
  "较低": "bg-orange-500/15 text-orange-600 border-orange-500/30",
  "低迷": "bg-red-500/15 text-red-600 border-red-500/30",
};

export default function DataSection() {
  return (
    <SectionWrapper id="data" title="数据展示" description="Stats, Table, Tabs, Timeline, Avatar, and data patterns.">

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-xl border bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{s.label}</p>
            <p className="mt-2 text-3xl font-bold tracking-tight">{s.value}</p>
            <div className="mt-1 flex items-center gap-1 text-sm">
              {s.up === true  && <><TrendingUp   className="h-3.5 w-3.5 text-green-500" /><span className="text-green-500">{s.change}</span></>}
              {s.up === false && <><TrendingDown className="h-3.5 w-3.5 text-red-500"   /><span className="text-red-500">{s.change}</span></>}
              {s.up === null  && <><Minus        className="h-3.5 w-3.5 text-muted-foreground" /><span className="text-muted-foreground">持平</span></>}
            </div>
          </div>
        ))}
      </div>

      <ShowcaseCard title="数据表格 Table">
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">全部 ({PRODUCTS.length})</TabsTrigger>
            <TabsTrigger value="good">热销</TabsTrigger>
            <TabsTrigger value="bad">待优化</TabsTrigger>
          </TabsList>
          {(["all","good","bad"] as const).map((tab) => (
            <TabsContent key={tab} value={tab}>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">#</TableHead>
                    <TableHead>产品名称</TableHead>
                    <TableHead className="text-right">销售量</TableHead>
                    <TableHead className="text-right">收入 (¥)</TableHead>
                    <TableHead>转化率</TableHead>
                    <TableHead>状态</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {PRODUCTS
                    .filter(r => tab === "all" ? true : tab === "good" ? r.rate >= 75 : r.rate < 45)
                    .map((row) => (
                      <TableRow key={row.rank}>
                        <TableCell className="font-mono text-muted-foreground">{row.rank}</TableCell>
                        <TableCell className="font-medium">{row.name}</TableCell>
                        <TableCell className="text-right font-mono">{row.sales.toLocaleString()}</TableCell>
                        <TableCell className="text-right font-mono">{row.revenue.toLocaleString()}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2 min-w-[120px]">
                            <Progress value={row.rate} className={`h-1.5 w-20 ${row.rate>=75?"[&>div]:bg-green-500":row.rate>=45?"[&>div]:bg-yellow-500":"[&>div]:bg-red-500"}`} />
                            <span className="text-sm tabular-nums">{row.rate}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className={statusCls[row.status]}>{row.status}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TabsContent>
          ))}
        </Tabs>
      </ShowcaseCard>

      <div className="grid gap-6 md:grid-cols-2">
        <ShowcaseCard title="时间线 Timeline">
          <div className="relative space-y-0">
            {TIMELINE.map((item, i) => (
              <div key={i} className="flex gap-4 pb-6 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className={`mt-1 h-3 w-3 rounded-full flex-shrink-0 ${item.color} ${i===TIMELINE.length-1?"animate-pulse":""}`} />
                  {i < TIMELINE.length - 1 && <div className="mt-1 w-px flex-1 bg-border" />}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono">{item.date}</p>
                  <p className="font-medium">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ShowcaseCard>

        <ShowcaseCard title="团队成员 Avatar + ScrollArea">
          <ScrollArea className="h-64">
            <div className="space-y-1 pr-4">
              {TEAM.map((member) => (
                <div key={member.name} className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-muted/50 transition-colors">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className={`${member.color} text-white text-xs`}>
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                  <span className="text-sm tabular-nums text-muted-foreground">{member.tasks} 任务</span>
                </div>
              ))}
            </div>
          </ScrollArea>
        </ShowcaseCard>
      </div>
    </SectionWrapper>
  );
}
