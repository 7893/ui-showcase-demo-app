"use client";
import { SectionWrapper, ShowcaseCard } from "@/components/section-wrapper";
import {
  LineChart, Line, BarChart, Bar, AreaChart, Area,
  PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import { faker } from "@faker-js/faker/locale/zh_CN";

faker.seed(456);

const LINE_DATA = Array.from({ length: 6 }).map((_, i) => ({
  month: `${i + 1}月`,
  访客: faker.number.int({ min: 10000, max: 30000 }),
  注册: faker.number.int({ min: 2000, max: 8000 }),
  付费: faker.number.int({ min: 500, max: 3000 }),
}));

const BAR_DATA = ["设计", "开发", "测试", "运营", "产品"].map(name => ({
  name,
  完成: faker.number.int({ min: 20, max: 80 }),
  进行中: faker.number.int({ min: 5, max: 30 }),
  待开始: faker.number.int({ min: 0, max: 20 }),
}));

const AREA_DATA = Array.from({ length: 6 }).map((_, i) => ({
  week: `W${i + 1}`,
  免费: faker.number.int({ min: 5000, max: 15000 }),
  Pro: faker.number.int({ min: 1000, max: 5000 }),
  企业: faker.number.int({ min: 100, max: 1000 }),
}));

const PIE_COLORS = ["var(--color-chart-1)", "var(--color-chart-2)", "var(--color-chart-3)", "var(--color-chart-4)", "var(--color-chart-5)"];
const PIE_DATA = ["自然搜索", "直接访问", "社交媒体", "邮件营销", "付费广告"].map((name, i) => ({
  name,
  value: faker.number.int({ min: 5, max: 40 }),
  color: PIE_COLORS[i]
}));

const RADAR_DATA = ["性能", "可用性", "安全性", "可维护", "扩展性", "文档"].map(subject => ({
  subject,
  A: faker.number.int({ min: 60, max: 100 }),
  fullMark: 100
}));

const TIP_STYLE = {
  backgroundColor: "var(--color-popover)",
  border: "1px solid var(--color-border)",
  borderRadius: "8px",
  color: "var(--color-foreground)",
  fontSize: 12,
};

export default function ChartsSection() {
  return (
    <SectionWrapper id="charts" title="图表" description="Line, Bar, Area, Pie, Radar charts powered by Recharts.">

      <div className="grid gap-6 md:grid-cols-2">
        <ShowcaseCard title="折线图 — 月度用户增长">
          <div className="h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={LINE_DATA} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }} />
                <YAxis tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }} />
                <Tooltip contentStyle={TIP_STYLE} />
                <Legend />
                <Line type="monotone" dataKey="访客" stroke="var(--color-chart-1)" strokeWidth={2.5} dot={{ r: 3 }} activeDot={{ r: 5 }} />
                <Line type="monotone" dataKey="注册" stroke="var(--color-chart-2)" strokeWidth={2.5} dot={{ r: 3 }} activeDot={{ r: 5 }} />
                <Line type="monotone" dataKey="付费" stroke="var(--color-chart-3)" strokeWidth={2.5} dot={{ r: 3 }} activeDot={{ r: 5 }} strokeDasharray="4 2" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ShowcaseCard>

        <ShowcaseCard title="柱状图 — 部门任务状态">
          <div className="h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={BAR_DATA} margin={{ top: 5, right: 10, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="name" tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }} />
                <YAxis tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }} />
                <Tooltip contentStyle={TIP_STYLE} />
                <Legend />
                <Bar dataKey="完成"   fill="var(--color-chart-2)" radius={[3,3,0,0]} stackId="a" />
                <Bar dataKey="进行中" fill="var(--color-chart-1)" radius={[0,0,0,0]} stackId="a" />
                <Bar dataKey="待开始" fill="var(--color-chart-4)" radius={[3,3,0,0]} stackId="a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ShowcaseCard>
      </div>

      <ShowcaseCard title="面积图 — 周度活跃用户分层">
        <div className="h-[240px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={AREA_DATA} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <defs>
                {["chart-1","chart-2","chart-3"].map((c, i) => (
                  <linearGradient key={c} id={`ag${i}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor={`var(--color-${c})`} stopOpacity={0.35} />
                    <stop offset="95%" stopColor={`var(--color-${c})`} stopOpacity={0.02} />
                  </linearGradient>
                ))}
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="week" tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }} />
              <YAxis tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }} />
              <Tooltip contentStyle={TIP_STYLE} />
              <Legend />
              <Area type="monotone" dataKey="免费" stroke="var(--color-chart-1)" fill="url(#ag0)" strokeWidth={2} />
              <Area type="monotone" dataKey="Pro"  stroke="var(--color-chart-2)" fill="url(#ag1)" strokeWidth={2} />
              <Area type="monotone" dataKey="企业" stroke="var(--color-chart-3)" fill="url(#ag2)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </ShowcaseCard>

      <div className="grid gap-6 md:grid-cols-2">
        <ShowcaseCard title="饼图 — 流量来源分布">
          <div className="flex items-center gap-6">
            <div className="h-[200px] w-[200px] shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={PIE_DATA} cx="50%" cy="50%" innerRadius={52} outerRadius={82} paddingAngle={3} dataKey="value">
                    {PIE_DATA.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                  <Tooltip contentStyle={TIP_STYLE} formatter={(v) => [`${v}%`]} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2.5 flex-1">
              {PIE_DATA.map((d) => (
                <div key={d.name} className="flex items-center gap-2.5">
                  <div className="h-2.5 w-2.5 rounded-full flex-shrink-0" style={{ background: d.color }} />
                  <span className="text-sm flex-1">{d.name}</span>
                  <span className="text-sm font-mono font-medium">{d.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </ShowcaseCard>

        <ShowcaseCard title="雷达图 — 系统健康评估">
          <div className="h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={RADAR_DATA}>
                <PolarGrid stroke="var(--color-border)" />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }} />
                <Radar name="当前评分" dataKey="A" stroke="var(--color-chart-1)" fill="var(--color-chart-1)" fillOpacity={0.2} strokeWidth={2} dot={{ r: 3 }} />
                <Tooltip contentStyle={TIP_STYLE} formatter={(v) => [`${v} 分`]} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </ShowcaseCard>
      </div>
    </SectionWrapper>
  );
}
