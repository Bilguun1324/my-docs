"use client";
import { ReactNode } from "react";
import type { ModuleType } from "@/utils";
import { Navigation } from "@/components";
import { ModuleProvider } from "@/providers/modules-provider";

type RootLayoutProps = {
  children: ReactNode;
  modules: ModuleType[];
};

export const RootLayout = (props: RootLayoutProps) => {
  const { children, modules } = props;
  return (
    <div className="flex h-full w-full">
      <ModuleProvider>
        <Navigation modules={modules} />
        <div className={`flex flex-col flex-grow`}>{children}</div>
      </ModuleProvider>
    </div>
  );
};
