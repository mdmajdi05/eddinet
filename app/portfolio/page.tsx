import type { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio - Websites, Software & Digital Projects | Eddinet",
  description:
    "Explore Eddinet's portfolio of websites, eCommerce stores, software, SaaS, AI, mobile apps, SEO and digital growth projects.",
  alternates: {
    canonical: "https://eddinet.com/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <main className="pt-[125px] pb-[100px]">

      <div className="w-full max-w-[var(--container-max)] mx-auto px-5">

        <PortfolioGrid />

      </div>

    </main>
  );
}