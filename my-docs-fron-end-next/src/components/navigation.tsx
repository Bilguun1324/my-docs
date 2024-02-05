"use client";
import { useContext, useEffect } from "react";
import { ModuleType } from "@/utils";
import Link from "next/link";
import { ModuleContext } from "@/providers/modules-provider";
import { useQuery } from "@apollo/client";
import { GET_ALL_MODULES } from "@/graphql";

export const Navigation = ({ modulesFromSSR }: { modulesFromSSR: ModuleType[]}) => {
  const { setModules, modules } = useContext(ModuleContext);
  const { data } = useQuery(GET_ALL_MODULES);

  useEffect(() => {
    setModules(modulesFromSSR);

    if (!data) return;

    setModules(data.getModules);
  }, [data, modules, modulesFromSSR, setModules]);
  

  return (
    <div
      className={`w-1/5 p-6 flex flex-col justify-start overflow-auto h-screen border-r-slate-400 border-r`}
    >
      {modules?.map((module: ModuleType) => (
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
