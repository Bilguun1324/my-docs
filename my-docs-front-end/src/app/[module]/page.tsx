"use client";
import { FC, useContext } from "react";
import { ModuleContext } from "@/providers/modules-provider";
import ReactPlayer from "react-player/youtube";
import MarkDown from "react-markdown";

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

  const { text, code, video } = currentModule;
  const title = text.split("\n")[0];

  const markDownCode = "```javascript\n" + code + "\n```";

  return (
    <div className="flex flex-col overflow-auto items-center mt-8 w-2/3">
      <h1 className="text-3xl text-zinc-300 mb-8">{title}</h1>
      <div className="text-zinc-300 mb-8 w-full">
        <MarkDown>{text}</MarkDown>
      </div>
      {video && <ReactPlayer url={video} controls />}
      <div className="text-zinc-300 mb-8 w-full bg-default-gray p-4 rounded-lg relative">
        <div
          className="text-zinc-300 absolute right-6 cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(code);
          }}
        >
          Copy
        </div>
        <MarkDown>{markDownCode}</MarkDown>
      </div>
    </div>
  );
};

export default ModulePage;
