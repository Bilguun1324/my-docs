import { Box, Link } from "@mui/material";
import { MediumWidth, ModuleType, SmallWidth, colors } from "../utils";
import { useQuery } from "@apollo/client";
import { GET_ALL_MODULES } from "../graphql";
import { Loading, ToggleButton } from ".";
import { useContext, useEffect, useState } from "react";
import { ModuleContext } from "../providers/modules-provider";

export const Navigation = () => {
  const { data, loading } = useQuery(GET_ALL_MODULES);
  const { setModules } = useContext(ModuleContext);
  const [navigationWidth, setNavigationWidth] = useState(MediumWidth);

  useEffect(() => {
    if (data) {
      setModules(data.getModules);
    }
  }, [data]);

  if (loading) {
    return (
      <Box width={300} height="100%" bgcolor={colors.primary}>
        <Loading />
      </Box>
    );
  }

  return (
    <Box
      height="100vh"
      borderRight={`1px solid ${colors.secondary}`}
      borderColor={colors.secondary}
      display="flex"
      flexDirection="column"
      alignItems="flex-end"
      sx={{
        width: navigationWidth,
        animation: "0.5s ease-in-out",
      }}
    >
      <ToggleButton
        onClose={() => setNavigationWidth(SmallWidth)}
        onOpen={() => setNavigationWidth(MediumWidth)}
      />
      <Box display="flex" flexDirection="column" width="100%">
        {data.getModules.map((module: ModuleType) => {
          return (
            <Link
              key={module.id}
              underline="hover"
              href={`/modules/${module.id}`}
              color={colors.text}
              sx={{ padding: 2 }}
            >
              {module.name}
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};
