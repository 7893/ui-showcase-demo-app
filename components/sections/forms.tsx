"use client";
import { SectionWrapper, ShowcaseCard } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Search, Eye, EyeOff, User, Mail } from "lucide-react";
import { faker } from "@faker-js/faker/locale/zh_CN";

faker.seed(789);

const CHECKBOX_OPTIONS = Array.from({ length: 4 }).map(() => faker.commerce.department());
const RADIO_OPTIONS = Array.from({ length: 3 }).map(() => ({ value: faker.string.uuid(), label: faker.company.name() }));
const SELECT_OPTIONS = Array.from({ length: 4 }).map(() => ({ value: faker.string.uuid(), label: faker.location.city() + "分公司" }));
const SWITCH_OPTIONS = Array.from({ length: 4 }).map(() => ({ label: `开启 ${faker.commerce.productMaterial()} 同步`, defaultChecked: faker.datatype.boolean() }));

export default function FormsSection() {
  const [show, setShow] = useState(false);
  const [slider, setSlider] = useState<number[]>([60]);

  return (
    <SectionWrapper id="forms" title="表单控件" description="Input, Select, Checkbox, Radio, Switch, Slider and more.">

      <div className="grid gap-6 md:grid-cols-2">
        <ShowcaseCard title="输入框 Input">
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label>普通输入框</Label>
              <Input placeholder="请输入内容…" />
            </div>
            <div className="space-y-1.5">
              <Label>带图标（前缀）</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input className="pl-9" placeholder="搜索…" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>带图标（用户）</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input className="pl-9" placeholder="用户名" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>密码</Label>
              <div className="relative">
                <Input type={show ? "text" : "password"} placeholder="请输入密码" className="pr-10" />
                <button onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>错误状态</Label>
              <Input className="border-destructive focus-visible:ring-destructive/20" defaultValue="错误的输入内容" />
              <p className="text-xs text-destructive">请输入有效的内容</p>
            </div>
            <div className="space-y-1.5">
              <Label>禁用状态</Label>
              <Input disabled placeholder="已禁用" />
            </div>
          </div>
        </ShowcaseCard>

        <ShowcaseCard title="多行文本 & 选择">
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label>多行文本</Label>
              <Textarea placeholder="请输入多行文本内容…" rows={3} />
            </div>
            <div className="space-y-1.5">
              <Label>下拉选择</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="请选择一项" />
                </SelectTrigger>
                <SelectContent>
                  {SELECT_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>邮箱</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input type="email" className="pl-9" placeholder="name@example.com" />
              </div>
            </div>
          </div>
        </ShowcaseCard>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <ShowcaseCard title="复选框 Checkbox">
          <div className="space-y-3">
            {CHECKBOX_OPTIONS.map((item, i) => (
              <div key={item} className="flex items-center gap-2.5">
                <Checkbox id={`cb-${i}`} defaultChecked={i < 2} />
                <Label htmlFor={`cb-${i}`} className="font-normal cursor-pointer">{item}</Label>
              </div>
            ))}
            <div className="flex items-center gap-2.5">
              <Checkbox disabled />
              <Label className="font-normal text-muted-foreground">已禁用</Label>
            </div>
          </div>
        </ShowcaseCard>

        <ShowcaseCard title="单选框 Radio">
          <RadioGroup defaultValue={RADIO_OPTIONS[0].value}>
            {RADIO_OPTIONS.map((opt) => (
              <div key={opt.value} className="flex items-center gap-2.5">
                <RadioGroupItem value={opt.value} id={`r-${opt.value}`} />
                <Label htmlFor={`r-${opt.value}`} className="font-normal cursor-pointer">{opt.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </ShowcaseCard>

        <ShowcaseCard title="开关 Switch">
          <div className="space-y-4">
            {SWITCH_OPTIONS.map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <Label className="font-normal">{item.label}</Label>
                <Switch defaultChecked={item.defaultChecked} />
              </div>
            ))}
          </div>
        </ShowcaseCard>
      </div>

      <ShowcaseCard title="滑块 Slider" description="可拖拽的范围选择器">
        <div className="space-y-6 max-w-md">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <Label>使用率目标</Label>
              <span className="text-muted-foreground font-mono">{slider[0]}%</span>
            </div>
            <Slider value={slider} onValueChange={(v) => setSlider(v as number[])} max={100} step={1} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <Label>预算上限</Label>
              <span className="text-muted-foreground font-mono">¥ 50,000</span>
            </div>
            <Slider defaultValue={[50000]} max={100000} step={1000} />
          </div>
        </div>
      </ShowcaseCard>

      {/* Login form demo */}
      <ShowcaseCard title="完整表单示例" description="登录表单">
        <form className="max-w-sm space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1.5">
            <Label htmlFor="email">邮箱</Label>
            <Input id="email" type="email" placeholder="name@example.com" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="password">密码</Label>
            <Input id="password" type="password" placeholder="请输入密码" />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="font-normal cursor-pointer text-sm">记住我</Label>
          </div>
          <Button type="submit" className="w-full">登录</Button>
          <p className="text-center text-sm text-muted-foreground">
            还没有账号？<a href="#" className="text-primary underline-offset-4 hover:underline">注册</a>
          </p>
        </form>
      </ShowcaseCard>

    </SectionWrapper>
  );
}
