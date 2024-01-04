import { Box, List, ListItemButton } from "@mui/material";
import { ModuleType, colors } from "../utils";
import { useQuery } from "@apollo/client";
import { GET_ALL_MODULES } from "../graphql";
import { Loading } from ".";

export const Navigation = () => {
  const { data, loading } = useQuery(GET_ALL_MODULES);
  console.log(data?.getModules[0]);

  return (
    <Box width={300} height="100%" bgcolor={colors.primary}>
      {loading ? (
        <Loading />
      ) : (
        <List>
          {data.getModules.map((module: ModuleType) => {
            return (
              <ListItemButton key={module.id}>
                <a href={`/modules/${module.id}`}>{module.name}</a>
              </ListItemButton>
            );
          })}
        </List>
      )}
    </Box>
  );
};
