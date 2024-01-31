import { mediumWidth, ModuleType } from "@/utils";

type NavigationProps = {
  modules: ModuleType[];
};

export const Navigation = (props: NavigationProps) => {
  const { modules } = props;

  return (
    <div className={`w-${mediumWidth}`}>
      {modules.map((module: ModuleType) => (
        <div key={module.id} className={`bg-white`}>
          {module.name}
        </div>
      ))}
    </div>
  );
};
