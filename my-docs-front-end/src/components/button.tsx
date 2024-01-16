import { ReactNode } from "react";
import { Box } from "@mui/material";
import { colors } from "../utils";

type ButtonProps = {
  children: ReactNode;
  onClick: Function;
};

export const Button = (props: ButtonProps) => {
  const { children, onClick } = props;

  return (
    <Box
      bgcolor={colors.primary}
      height={24}
      width={120}
      color="white"
      display="flex"
      padding={1}
      borderRadius={2}
      justifyContent="center"
      sx={{ cursor: "pointer", ":hover": { opacity: 0.8 } }}
      onClick={() => onClick()}
    >
      {children}
    </Box>
  );
};
