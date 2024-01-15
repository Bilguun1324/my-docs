import { Box } from "@mui/material";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box width="100%" height="100%">
      {children}
    </Box>
  );
};
