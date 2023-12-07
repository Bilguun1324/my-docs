import { addUser, getUser, addDrugToUser } from "./userResolver";
import { addDrug, getDrug } from "./drugResolver";
import { addRecord } from "./recordResolver";

export default {
  Query: {
    getUser,
    getDrug,
  },
  Mutation: {
    addUser,
    addDrug,
    addRecord,
    addDrugToUser,
  },
};
