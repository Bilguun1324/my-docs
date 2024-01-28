import { Box, Link } from "@mui/material";
import { ModuleType, colors } from "../utils";
import { useQuery } from "@apollo/client";
import { GET_ALL_MODULES } from "../graphql";
import { Loading } from ".";
import { useContext, useEffect } from "react";
import { ModuleContext } from "../providers/modules-provider";

export const Navigation = () => {
  const { data, loading } = useQuery(GET_ALL_MODULES);
  const { setModules } = useContext(ModuleContext);

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
    <Box width={300} height="100%" bgcolor={colors.primary}>
      <Box display="flex" flexDirection="column">
        {data.getModules.map((module: ModuleType) => {
          return (
            <Link
              key={module.id}
              underline="hover"
              href={`/modules/${module.id}`}
              color="black"
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
