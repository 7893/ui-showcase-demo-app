"use client";
import OverviewSection from "@/components/sections/overview";
import ButtonsSection from "@/components/sections/buttons";
import FormsSection from "@/components/sections/forms";
import FeedbackSection from "@/components/sections/feedback";
import DataSection from "@/components/sections/data";
import ChartsSection from "@/components/sections/charts";
import OverlaysSection from "@/components/sections/overlays";
import TemplatesSection from "@/components/sections/templates";
import TypographySection from "@/components/sections/typography";

export default function Home() {
  return (
    <>
      <OverviewSection />
      <ButtonsSection />
      <FormsSection />
      <FeedbackSection />
      <DataSection />
      <ChartsSection />
      <OverlaysSection />
      <TemplatesSection />
      <TypographySection />
    </>
  );
}
