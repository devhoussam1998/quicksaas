"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, CalendarClock } from "lucide-react";
import Link from "next/link";

const tasks = [
  {
    id: 1,
    hours: "~6 hrs",
    name: "Authentication",
  },
  {
    id: 2,
    hours: "~5 hrs",
    name: "Authorization",
  },
  {
    id: 3,
    hours: "~10 hrs",
    name: "Payments",
  },
  {
    id: 4,
    hours: "~16 hrs",
    name: "User & Admin Panel",
  },
  {
    id: 5,
    hours: "~2 hrs",
    name: "User Impersonation",
  },
  {
    id: 6,
    hours: "~4 hrs",
    name: "Security",
  },
  {
    id: 7,
    hours: "~10 hrs",
    name: "Blog (MDX)",
  },
  {
    id: 8,
    hours: "~8 hrs",
    name: "Docs (MDX)",
  },
  {
    id: 9,
    hours: "~1 hr",
    name: "Legal Pages (MDX)",
  },
  {
    id: 10,
    hours: "~6 hrs",
    name: "Landing Page",
  },
  {
    id: 11,
    hours: "~4 hrs",
    name: "UI Components",
  },
  {
    id: 12,
    hours: "~2 hrs",
    name: "Database Setup",
  },
  {
    id: 13,
    hours: "~2 hrs",
    name: "Lint & Git Hooks",
  },
  {
    id: 14,
    hours: "~1 hr",
    name: "Light & Dark Mode",
  },
  {
    id: 15,
    hours: "~3 hrs",
    name: "Email Templates",
  },
  {
    id: 16,
    hours: "~5 hrs",
    name: "Onboarding Flow",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="bg-background border-border relative w-full border-b py-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-y-12 px-4">
        <div className="flex flex-col items-center gap-y-4 text-center">
          <Badge
            variant="secondary"
            className="gap-2 rounded-full px-4 py-1.5 text-sm"
          >
            <CalendarClock className="!size-4" />
            <span>The Time Sink Reality</span>
          </Badge>
          <h1 className="text-4xl font-extrabold text-balance md:text-5xl lg:text-6xl">
            Stop Wasting Time on
            <span className="text-primary block">Repetitive Setup</span>
          </h1>
          <p className="text-muted-foreground max-w-xl text-base font-medium text-pretty md:text-lg lg:text-xl">
            Every developer knows the pain — great SaaS ideas delayed by weeks
            of boilerplate and setup hell.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tasks.map((task) => (
            <Card key={task.id}>
              <CardContent className="flex flex-col gap-y-2 text-center">
                <CardTitle className="text-primary text-xl leading-none">
                  {task.hours}
                </CardTitle>
                <CardDescription className="text-sm font-medium leading-none">
                  {task.name}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="max-w-2xl mx-auto w-full">
          <CardContent className="flex flex-col gap-y-6 text-center">
            <div className="flex flex-col gap-y-2">
              <CardTitle className="text-xl leading-none">
                <span className="text-primary">= ~86-90 hours</span> of
                headaches
              </CardTitle>
              <CardDescription className="text-base font-medium leading-none">
                That's{" "}
                <span className="text-primary font-semibold">~2 weeks</span> of
                full-time work
              </CardDescription>
            </div>
            <Button size="lg" className="w-fit mx-auto" asChild>
              <Link href="/">
                <span>Skip The Struggle</span>
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
