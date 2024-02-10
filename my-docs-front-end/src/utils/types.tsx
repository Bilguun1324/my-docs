type ModuleDescription = {
  id: string;
  text: string;
  video: string;
  code: string;
};

export type ModuleType = {
  id: string;
  text: string;
  video: string;
  descriptions: [ModuleDescription];
  code: string;
};

export type AddModuleType = {
  text: string;
  video: string;
  code: string;
  passkey: string;
};
