import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ModuleContext } from "../providers/modules-provider";
import { ModuleType } from "../utils";

export const Module = () => {
  const { moduleId } = useParams();
  const { modules } = useContext(ModuleContext);
  let module = {} as ModuleType | undefined;

  useEffect(() => {
    if (modules.length > 0) {
      module = modules.find((module) => module.id === moduleId);
      console.log(module);
      if (!module) {
        window.location.href = "/404";
      }
    }
  }, [modules]);

  return <div>{module?.name}</div>;
};
