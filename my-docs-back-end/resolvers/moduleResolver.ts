import { ModuleModel } from "../schemas";

const addModule = async (_: any, params: any) => {
  const module = new ModuleModel(params);

  try {
    await module.save();
    return module;
  } catch (err) {
    return err;
  }
};

const updateModule = async (_: any, params: any) => {
    const module = new ModuleModel(params);
  
    try {
      await module.updateOne({ _id: params.id }, params);
      return module;
    } catch (err) {
      return err;
    }
  };

const getModule = async (_: any, params: any) => {
  try {
    const module = await ModuleModel.findOne(params);

    return module;
  } catch (err) {
    return err;
  }
};

const getModules = async (_: any, params: any) => {
  try {
    const module = await ModuleModel.find(params);

    return module;
  } catch (err) {
    return err;
  }
};

export { addModule, getModule, getModules, updateModule };
