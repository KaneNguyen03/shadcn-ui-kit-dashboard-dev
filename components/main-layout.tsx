"use client";

import NextTopLoader from "nextjs-toploader";
import Header from "./layout/header";
import Sidebar from "./layout/sidebar";
import ThemeCustomizer from "./theme-customizer";
import useThemeSettingsStore from "@/store/themeSettingsStore";
import { cn } from "@/lib/utils";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const themeSettings = useThemeSettingsStore();

  return (
    <>
      <NextTopLoader color="hsl(var(--primary))" showSpinner={false} height={2} shadow="none" />
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Header />
          <main
            className={cn("min-h-full p-4", {
              "lg:container lg:pt-10": themeSettings.contentLayout === "centered"
            })}>
            {children}
          </main>
        </div>
        <ThemeCustomizer />
      </div>
    </>
  );
}
