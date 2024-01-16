type ModuleDescription = {
    id: string
    title: string
    description: string
    image: string
    code: string
}

export type ModuleType = {
  id: string;
  name: string;
  image: string;
  description: string;
  descriptions: [ModuleDescription];
  code: string;
};
