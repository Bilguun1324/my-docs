import { Box, List, ListItemButton, Link } from "@mui/material";
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
  }, [data])

  return (
    <Box width={300} height="100%" bgcolor={colors.primary}>
      {loading ? (
        <Loading />
      ) : (
        <List>
          {data.getModules.map((module: ModuleType) => {
            return (
              <ListItemButton key={module.id}>
                <Link underline="hover" href={`/modules/${module.id}`} color="black">
                  {module.name}
                </Link>
              </ListItemButton>
            );
          })}
        </List>
      )}
    </Box>
  );
};