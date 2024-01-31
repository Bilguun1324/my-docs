import { FC } from "react";

type ModulePageProps = {
  params: {
    module: string;
  };
};

const ModulePage: FC<ModulePageProps> = ({ params }) => {
  return (
    <div>
      <h1 className="bg-white">Module Page {params.module}</h1>
    </div>
  );
};

export default ModulePage;
