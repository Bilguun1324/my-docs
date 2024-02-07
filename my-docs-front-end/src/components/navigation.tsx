"use client";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { ModuleType, extraSmallWidth, largeWidth, smallWidth } from "@/utils";
import Link from "next/link";
import { ModuleContext } from "@/providers/modules-provider";
import { useQuery } from "@apollo/client";
import { GET_ALL_MODULES } from "@/graphql";
import { MenuBar } from "./menu-bar";

export const Navigation = ({
  modulesFromSSR,
}: {
  modulesFromSSR: ModuleType[];
}) => {
  const { setModules, modules } = useContext(ModuleContext);
  const { data } = useQuery(GET_ALL_MODULES);
  const [fullWidth, setFullWidth] = useState(true);

  useEffect(() => {
    setModules(modulesFromSSR);

    if (!data) return;

    setModules(data.getModules);
  }, [data, modules, modulesFromSSR, setModules]);

  return (
    <motion.div
      className={`${
        fullWidth ? "p-6" : "p-3 pt-6"
      } flex flex-col justify-start items-end overflow-auto h-screen border-r-slate-400 border-r`}
      animate={{ width: fullWidth ? largeWidth : smallWidth }}
    >
      <MenuBar open={fullWidth} setOpen={() => setFullWidth(!fullWidth)} />
      {modules?.map((module: ModuleType) => (
        <motion.span
          animate={{ opacity: fullWidth ? 1 : 0 }}
          whileHover={{ x: extraSmallWidth }}
          whileTap={{ scale: 1.1 }}
          key={module.id}
          className="w-full text-zinc-300 cursor-pointer mb-4 hover:text-zinc-100 active:text-zinc-100"
        >
          <Link href={module.id}>{module.name}</Link>
        </motion.span>
      ))}
    </motion.div>
  );
};
9990;
