"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Brush,
  CircleEllipsis,
  CreditCard,
  Database,
  Globe,
  ListTodo,
  Mail,
  ShieldUser,
  UserLock,
} from "lucide-react";

export default function Features() {
  return (
    <section
      id="features"
      className="bg-background border-border relative w-full border-b py-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-y-12 px-4">
        <div className="flex flex-col items-center gap-y-4 text-center">
          <Badge
            variant="secondary"
            className="gap-2 rounded-full px-4 py-1.5 text-sm"
          >
            <ListTodo className="!size-4" />
            <span>All-in-One Starter</span>
          </Badge>
          <h1 className="text-4xl font-extrabold text-balance md:text-5xl lg:text-6xl">
            Everything You Need to
            <span className="text-primary block">Launch SaaS</span>
          </h1>
          <p className="text-muted-foreground max-w-xl text-base font-medium text-pretty md:text-lg lg:text-xl">
            Our boilerplate includes all the essential features and integrations
            to build, launch, and scale your SaaS.
          </p>
        </div>
        <div className="flex w-full flex-col gap-y-6">
          <Tabs defaultValue="authentication">
            <TabsList className="mx-auto p-2 gap-2 h-fit">
              <TabsTrigger value="authentication" className="gap-2 px-4 py-2">
                <UserLock className="size-4 shrink-0" />
                <span>Authentication</span>
              </TabsTrigger>
              <TabsTrigger value="authorization" className="gap-2 px-4 py-2">
                <ShieldUser className="size-4 shrink-0" />
                <span>Authorization</span>
              </TabsTrigger>
              <TabsTrigger value="database" className="gap-2 px-4 py-2">
                <Database className="size-4 shrink-0" />
                <span>Database</span>
              </TabsTrigger>
              <TabsTrigger value="emails" className="gap-2 px-4 py-2">
                <Mail className="size-4 shrink-0" />
                <span>Emails</span>
              </TabsTrigger>
              <TabsTrigger value="payments" className="gap-2 px-4 py-2">
                <CreditCard className="size-4 shrink-0" />
                <span>Payments</span>
              </TabsTrigger>
              <TabsTrigger value="seo" className="gap-2 px-4 py-2">
                <Globe className="size-4 shrink-0" />
                <span>SEO</span>
              </TabsTrigger>
              <TabsTrigger value="styles" className="gap-2 px-4 py-2">
                <Brush className="size-4 shrink-0" />
                <span>Styles</span>
              </TabsTrigger>
              <TabsTrigger value="more" className="gap-2 px-4 py-2">
                <CircleEllipsis className="size-4 shrink-0" />
                <span>More</span>
              </TabsTrigger>
            </TabsList>
            <div className="max-w-2xl mx-auto w-full">
              <TabsContent value="authentication">
                <Card>
                  <CardHeader className="flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-lg shadow-sm bg-primary text-white">
                      <UserLock className="size-6 shrink-0" />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <CardTitle className="text-primary text-xl leading-none">
                        Authentication
                      </CardTitle>
                      <CardDescription className="text-sm font-medium">
                        Allow users to sign in via password, magic link, or
                        OAuth.
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2">
                    <ul className="flex flex-col gap-y-2">
                      <li className="flex items-center gap-2">
                        <span className="size-2 bg-primary rounded-full"></span>
                        <span className="text-sm font-medium">
                          Own and control user data
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-2 bg-primary rounded-full"></span>
                        <span className="text-sm font-medium">
                          Sign in with password or magic link
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-2 bg-primary rounded-full"></span>
                        <span className="text-sm font-medium">
                          Two-factor authentication (2FA)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-2 bg-primary rounded-full"></span>
                        <span className="text-sm font-medium">
                          Social login via OAuth
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-2 bg-primary rounded-full"></span>
                        <span className="text-sm font-medium">
                          Forgot and reset password flow
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-2 bg-primary rounded-full"></span>
                        <span className="text-sm font-medium">
                          Prebuilt auth components
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-2 bg-primary rounded-full"></span>
                        <span className="text-sm font-medium">
                          Smooth onboarding experience
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-2 bg-primary rounded-full"></span>
                        <span className="text-sm font-medium">
                          Role-based access control (RBAC)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-2 bg-primary rounded-full"></span>
                        <span className="text-sm font-medium">
                          Super admin tools & user impersonation
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="authorization">
                <Card>
                  <CardContent>Authorization</CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="database">
                <Card>
                  <CardContent>Database</CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="emails">
                <Card>
                  <CardContent>Emails</CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="payments">
                <Card>
                  <CardContent>Payments</CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="seo">
                <Card>
                  <CardContent>SEO</CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="styles">
                <Card>
                  <CardContent>Styles</CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="more">
                <Card>
                  <CardContent>More</CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
