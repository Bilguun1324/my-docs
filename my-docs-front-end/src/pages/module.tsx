import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ModuleContext } from "../providers/modules-provider";
import { ModuleType } from "../utils";
import { Box, Typography } from "@mui/material";
import { CopyBlock, dracula } from "react-code-blocks";
import { Loading } from "../components";

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

  if (!module) {
    return <Loading />;
  }

  return (
    <Box width="100%" height="100vh" overflow="auto">
      <Box display="flex" flexDirection="column" padding={2} gap={2}>
        {/* Header */}
        <Typography variant="h2">{module.name}</Typography>

        {/* Header */}
        <Typography variant="body1">{module.description}</Typography>

        {/* Image */}
        <Box
          component="img"
          src={module.image}
          maxHeight="50vh"
          width="50vw"
          sx={{
            objectFit: "cover",
          }}
        ></Box>

        {/* Codes */}
        <CopyBlock text={module.code} language="javascript" theme={dracula} />
      </Box>
    </Box>
  );
};
