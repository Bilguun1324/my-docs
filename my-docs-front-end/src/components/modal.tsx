import { Dispatch, SetStateAction, ReactNode } from "react";
import { Box } from "@mui/material";

type ModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};

export const Modal = (props: ModalProps) => {
  const { open, setOpen, children } = props;

  if (open === false) {
    return <Box></Box>;
  }

  return (
    <Box
      position="absolute"
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="100%"
        height="100%"
        position="absolute"
        onClick={() => setOpen(false)}
      />
      {children}
    </Box>
  );
};
