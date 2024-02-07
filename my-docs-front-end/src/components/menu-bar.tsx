import { motion } from "framer-motion";

type MenuBarType = {
  open?: boolean;
  setOpen?: () => void;
};

export const MenuBar = (props: MenuBarType) => {
  const { open = false, setOpen } = props;

  return (
    <div
      className={`h-9 w-9 flex ${
        open ? "justify-center items-center" : "flex-col justify-evenly"
      } cursor-pointer relative`}
      onClick={setOpen}
    >
      <motion.div
        animate={{ rotate: open ? 45 : 0 }}
        className={`bg-white h-1 w-8 ${open && "absolute"} rounded`}
      ></motion.div>
      <motion.div
        animate={{ rotate: open ? -45 : 0 }}
        className={`bg-white h-1 w-8 ${open && "absolute"} rounded`}
      ></motion.div>
    </div>
  );
};
