import { addModule, getModule, getModules } from "./moduleResolver";

export default {
  Query: {
    getModule,
    getModules,
  },
  Mutation: {
    addModule,
  },
};
