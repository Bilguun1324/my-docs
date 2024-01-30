import { Box } from "@mui/material";
import { colors } from "../utils";
import { useState } from "react";

type ToggleButtonProps = {
  onClose: () => void;
  onOpen: () => void;
};

export const ToggleButton = (props: ToggleButtonProps) => {
  const { onClose, onOpen } = props;
  const [open, setOpen] = useState(false);

  const toggle = () => {
    if (open) {
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      padding={2}
      gap={1}
      sx={{ cursor: "pointer" }}
      onClick={() => toggle()}
    >
      <Box width="20px" height="2px" bgcolor={colors.white} />
      <Box width="20px" height="2px" bgcolor={colors.white} />
    </Box>
  );
};
