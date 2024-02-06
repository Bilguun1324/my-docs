type ModuleDescription = {
  id: string;
  title: string;
  description: string;
  image: string;
  code: string;
};

export type ModuleType = {
  id: string;
  name: string;
  image: string;
  video: string;
  description: string;
  descriptions: [ModuleDescription];
  code: string;
};

export type AddModuleType = {
  name: string;
  description: string;
  code: string;
  video: string;
  passkey: string;
};
