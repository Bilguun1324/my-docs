import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ModuleContext } from "../providers/modules-provider";
import { ModuleType } from "../utils";
import { Box, Container } from "@mui/material";
import { CopyBlock, dracula } from "react-code-blocks";

export const Module = () => {
  const { moduleId } = useParams();
  const { modules } = useContext(ModuleContext);
  const [module, setModule] = useState<ModuleType | undefined>();

  useEffect(() => {
    if (modules.length > 0) {
      let foundModule = modules.find((module) => module.id === moduleId);
      setModule(foundModule);
      if (!foundModule) {
        window.location.href = "/404";
      }
    }
  }, [modules]);

  return (
    <Container>
      {/* Header */}
      <Box>{module?.name}</Box>

      {/* Image */}
      <img src={module?.image} />

      {/* Codes */}
      <CopyBlock text={module ? module.code : ""} language="javascript" theme={dracula}/>
    </Container>
  );
};
