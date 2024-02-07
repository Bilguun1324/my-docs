import { motion } from "framer-motion";

type MenuBarType = {
  open?: boolean;
  setOpen?: (open: boolean) => void;
};

export const MenuBar = (props: MenuBarType) => {
  const { open = true, setOpen } = props;

  return (
    <div
      className={`h-12 w-12 flex ${
        open ? "justify-center items-center" : "flex-col justify-evenly"
      } cursor-pointer relative`}
      onClick={() => setOpen}
    >
      <motion.div
        animate={{ rotate: open ? 45 : 0 }}
        className="bg-white h-1 w-8 absolute"
      ></motion.div>
      <motion.div
        animate={{ rotate: open ? -45 : 0 }}
        className="bg-white h-1 w-8 absolute"
      ></motion.div>
    </div>
  );
};
