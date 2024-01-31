import { createContext, useState, Dispatch, SetStateAction } from "react";
import { ModuleType } from "../utils";

export const ModuleContext = createContext<{
    modules: ModuleType[];
    setModules: Dispatch<SetStateAction<ModuleType[]>>;
}>({
    modules: [],
    setModules: () => {},
});

export const ModuleProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    let [modules, setModules] = useState<ModuleType[]>([]);

    return (
    <ModuleContext.Provider value={{ modules, setModules }}>
      {children}
    </ModuleContext.Provider>
  );
};
