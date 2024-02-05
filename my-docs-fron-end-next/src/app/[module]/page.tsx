"use client";
import { FC, useContext } from "react";
import { ModuleContext } from "@/providers/modules-provider";
import Image from "next/image";
import { CodeBlock, dracula } from "react-code-blocks";

type ModulePageProps = {
  params: {
    module: string;
  };
};

const ModulePage: FC<ModulePageProps> = ({ params }) => {
  const { modules } = useContext(ModuleContext);
  const module = modules?.find((module) => module.id === params.module);

  if (!module) {
    return <div>loading</div>;
  }

  const { name, code, image, description } = module;

  return (
    <div className="flex flex-col overflow-auto items-center mt-8 w-2/3">
      <div className="text-zinc-300 text-3xl mb-8 w-full">{name}</div>
      <div className="text-zinc-300 mb-8 w-full">{description}</div>
      {image && (
        <Image alt="Module Picture" src={image} width={500} height={500} />
      )}
      <div className="w-full">
        <CodeBlock text={code} language="javascript" theme={dracula} />
      </div>
    </div>
  );
};

export default ModulePage;
