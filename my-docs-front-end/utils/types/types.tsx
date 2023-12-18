type ModuleDescription = {
    id?: String
    title?: String
    description?: String
    image?: String
    code?: String
}

export type ModuleType = {
  id?: String
  name?: String
  image?: String
  descriptions?: [ModuleDescription]
  code?: String
};
