import { mediumWidth, ModuleType } from "@/utils";
import Link from "next/link";

type NavigationProps = {
  modules: ModuleType[];
};

export const Navigation = (props: NavigationProps) => {
  const { modules } = props;

  return (
    <div className={`w-64 grid gap-4 p-6`}>
      {modules.map((module: ModuleType) => (
        <Link
          key={module.id}
          className={`text-zinc-300 cursor-pointer w-fit`}
          href={module.id}
        >
          {module.name}
        </Link>
      ))}
    </div>
  );
};
9990;
