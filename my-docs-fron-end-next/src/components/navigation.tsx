"use client";
import { ModuleType } from "@/utils";
import Link from "next/link";
import { useContext } from "react";
import { ModuleContext } from "@/providers/modules-provider";

type NavigationProps = {
  modules: ModuleType[];
};

export const Navigation = (props: NavigationProps) => {
  const { setModules } = useContext(ModuleContext);
  const { modules } = props;

  setModules(modules);

  return (
    <div
      className={`w-64 p-6 flex flex-col justify-start overflow-auto h-full border-r-slate-400 border-r`}
    >
      {modules.map((module: ModuleType) => (
        <Link
          key={module.id}
          className={`text-zinc-300 cursor-pointer w-fit mb-4 hover:text-zinc-100`}
          href={module.id}
        >
          {module.name}
        </Link>
      ))}
    </div>
  );
};
9990;
