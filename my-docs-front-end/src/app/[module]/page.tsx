"use client";
import { FC, useContext } from "react";
import { ModuleContext } from "@/providers/modules-provider";
import { CodeBlock, dracula } from "react-code-blocks";
import ReactPlayer from "react-player/youtube";

type ModulePageProps = {
  params: {
    module: string;
  };
};

const ModulePage: FC<ModulePageProps> = ({ params }) => {
  const { modules } = useContext(ModuleContext);
  const currentModule = modules?.find((module) => module.id === params.module);

  if (!currentModule) {
    return <div>loading</div>;
  }

  const { name, code, image, description, video } = currentModule;

  return (
    <div className="flex flex-col overflow-auto items-center mt-8 w-2/3">
      <div className="text-zinc-300 text-3xl mb-8 w-full">{name}</div>
      <div className="text-zinc-300 mb-8 w-full">{description}</div>
      {video && (
        <ReactPlayer
          url={video}
          controls
        />
      )}
      <div className="w-full mt-12">
        <CodeBlock text={code} language="javascript" theme={dracula} />
      </div>
    </div>
  );
};

export default ModulePage;
