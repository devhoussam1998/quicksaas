import {
  CTA,
  Demo,
  FAQ,
  Features,
  Hero,
  Newsletter,
  Pricing,
  Problem,
  Testimonials,
} from "@/components/sections/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Features />
      <Demo />
      <Pricing />
      <FAQ />
      <Testimonials />
      <Newsletter />
      <CTA />
    </>
  );
}
