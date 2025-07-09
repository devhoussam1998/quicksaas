"use client";

import { Github } from "@/components/icons/github";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Percent, Rocket, Star, Telescope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const avatars = [
  {
    id: 1,
    src: "https://github.com/shadcn.png",
    fallback: "CN",
    alt: "User CN",
  },
  {
    id: 2,
    src: "https://github.com/shadcn.png",
    fallback: "CN",
    alt: "User CN",
  },
  {
    id: 3,
    src: "https://github.com/shadcn.png",
    fallback: "CN",
    alt: "User CN",
  },
  {
    id: 4,
    src: "https://github.com/shadcn.png",
    fallback: "CN",
    alt: "User CN",
  },
  {
    id: 5,
    src: "https://github.com/shadcn.png",
    fallback: "CN",
    alt: "User CN",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-background border-border relative w-full border-b py-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-y-12 px-4">
        <div className="flex flex-col items-center gap-y-4 text-center">
          <Badge
            variant="secondary"
            className="gap-2 rounded-full px-4 py-1.5 text-sm"
          >
            <Rocket className="!size-4" />
            <span>Launch fast, Earn faster</span>
          </Badge>
          <h1 className="text-4xl font-extrabold text-balance md:text-5xl lg:text-6xl">
            <span className="text-primary">Launch Your SaaS Quickly </span> with
            a Robust Codebase
          </h1>
          <p className="text-muted-foreground max-w-xl text-base font-medium text-pretty md:text-lg lg:text-xl">
            The ultimate SaaS boilerplate packed with everything you need to
            launch quickly and start making money online.
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-4 text-center">
          <div className="flex items-center gap-4">
            <Button size="lg" asChild>
              <Link href="/">
                <Github className="size-4" />
                <span>Get Access</span>
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/">
                <Telescope className="size-4" />
                <span>View Live Demo</span>
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Percent className="text-primary size-4 shrink-0" />
            <span className="text-muted-foreground text-base font-medium">
              <span className="text-primary font-semibold">$100 OFF</span> for
              the first 500 customers (10 left)
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="*:data-[slot=avatar]:ring-background flex items-center -space-x-4 *:data-[slot=avatar]:ring-2">
              {avatars.map((avatar) => (
                <Avatar key={avatar.id} className="size-10">
                  <AvatarImage src={avatar.src} alt={avatar.alt} />
                  <AvatarFallback className="font-medium">
                    {avatar.fallback}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center gap-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-yellow-500 shrink-0" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm font-medium">
                <span className="text-primary font-semibold">400+</span> Happy
                Founders & Creators
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/hero-image.png"
            alt="SaaS Boilerplate"
            loading="lazy"
            width={800}
            height={400}
            className="rounded-xl object-cover mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
