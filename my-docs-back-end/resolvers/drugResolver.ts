import { DrugModel } from "../schemas";

const addDrug = async (_: any, params: any) => {
  const drug = new DrugModel(params);

  try {
    await drug.save();
    return drug;
  } catch (error) {
    return error;
  }
};

const getDrug = async (_: any, params: any) => {
  try {
    const drug = await DrugModel.findOne(params);

    return drug;
  } catch (err) {
    return err;
  }
};

export { addDrug, getDrug };
