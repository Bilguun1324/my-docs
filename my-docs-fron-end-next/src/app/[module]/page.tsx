"use client";
import { FC, useContext } from "react";
import { ModuleContext } from "@/providers/modules-provider";
import Image from "next/image";
import { CopyBlock, dracula } from "react-code-blocks";

type ModulePageProps = {
  params: {
    module: string;
  };
};

const ModulePage: FC<ModulePageProps> = ({ params }) => {
  const { modules } = useContext(ModuleContext);
  const module = modules.find((module) => module.id === params.module);

  if (!module) {
    return <div>loading</div>;
  }

  const { name, code, image, description } = module;

  return (
    <div className="p-8 grid gap-8 overflow-auto">
      <div className="text-zinc-300 text-3xl">{name}</div>
      <div className="text-zinc-300">{description}</div>
      {image && (
        <Image alt="Module Picture" src={image} width={500} height={500} />
      )}
      <CopyBlock
        text={code}
        language="javascript"
        theme={dracula}
      />
    </div>
  );
};

export default ModulePage;
