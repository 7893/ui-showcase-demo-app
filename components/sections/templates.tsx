"use client";
import { SectionWrapper, ShowcaseCard } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function TemplatesSection() {
  return (
    <SectionWrapper id="templates" title="复合业务模板" description="将多个基础组件组合成复杂的业务区块，比如认证表单、支付卡片等。">
      <div className="grid gap-6 md:grid-cols-2">
        
        <ShowcaseCard title="支付方式卡片" description="包含输入框、下拉框和按钮的组合">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>支付方式</CardTitle>
              <CardDescription>为您接下来的账单添加新的付款方式。</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <Button variant="outline" className="flex flex-col gap-2 h-auto py-4 border-2 border-primary bg-primary/5">
                  <div className="text-xl">💳</div>
                  银行卡
                </Button>
                <Button variant="outline" className="flex flex-col gap-2 h-auto py-4">
                  <div className="text-xl">🅿️</div>
                  PayPal
                </Button>
                <Button variant="outline" className="flex flex-col gap-2 h-auto py-4">
                  <div className="text-xl">🍎</div>
                  Apple
                </Button>
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">持卡人姓名</Label>
                <Input id="name" placeholder="请输入姓名" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="number">卡号</Label>
                <Input id="number" placeholder="**** **** **** ****" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>到期月份</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="月" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1月</SelectItem>
                      <SelectItem value="2">2月</SelectItem>
                      <SelectItem value="3">3月</SelectItem>
                      <SelectItem value="12">12月</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>到期年份</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="年" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2026">2026</SelectItem>
                      <SelectItem value="2027">2027</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="CVC" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">保存支付方式</Button>
            </CardFooter>
          </Card>
        </ShowcaseCard>

        <ShowcaseCard title="团队成员管理" description="列表、头像、权限下拉菜单组合">
          <Card>
            <CardHeader>
              <CardTitle>团队成员</CardTitle>
              <CardDescription>邀请新成员加入你的工作空间，或管理现有成员的权限。</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback className="bg-violet-500 text-white">JD</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-sm text-muted-foreground">m@example.com</p>
                </div>
                <Select defaultValue="owner">
                  <SelectTrigger className="w-[110px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="owner">所有者</SelectItem>
                    <SelectItem value="admin">管理员</SelectItem>
                    <SelectItem value="viewer">查看者</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Alice Smith</p>
                  <p className="text-sm text-muted-foreground">alice@example.com</p>
                </div>
                <Select defaultValue="viewer">
                  <SelectTrigger className="w-[110px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="owner">所有者</SelectItem>
                    <SelectItem value="admin">管理员</SelectItem>
                    <SelectItem value="viewer">查看者</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>B</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Bob Wang</p>
                  <p className="text-sm text-muted-foreground">bob@example.com</p>
                </div>
                <Select defaultValue="viewer">
                  <SelectTrigger className="w-[110px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="owner">所有者</SelectItem>
                    <SelectItem value="admin">管理员</SelectItem>
                    <SelectItem value="viewer">查看者</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </ShowcaseCard>

      </div>
    </SectionWrapper>
  );
}
