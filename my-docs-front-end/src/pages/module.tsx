import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ModuleContext } from "../providers/modules-provider";
import { ModuleType, colors } from "../utils";
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
      <Box display="flex" flexDirection="column" padding={4} gap={2}>
        {/* Header */}
        <Typography variant="h2" color={colors.text}>
          {module.name}
        </Typography>

        {/* Description */}
        <Typography variant="body1" color={colors.text}>
          {module.description}
        </Typography>

        {/* Image */}
        {module.image && (
          <Box
            component="img"
            src={module.image}
            maxHeight="50vh"
            width="50vw"
            sx={{
              objectFit: "cover",
            }}
          />
        )}

        {/* Codes */}
        <CopyBlock text={module.code} language="javascript" theme={dracula} />
      </Box>
    </Box>
  );
};
