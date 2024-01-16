import { useState } from "react";
import { Box, TextField } from "@mui/material";
import { Button } from "../components";
import { useMutation } from "@apollo/client";
import { ADD_MODULE, GET_ALL_MODULES } from "../graphql";

type AddModuleType = {
  name: string;
  image: string;
  description: string;
  code: string;
};

export const AddModule = () => {
  const [addModule, { loading, data, error }] = useMutation(ADD_MODULE, {
    refetchQueries: [
      {
        query: GET_ALL_MODULES,
      },
    ],
  });
  const [addingModule, setAddingModule] = useState<AddModuleType>({
    name: "",
    image: "",
    description: "",
    code: "",
  });

  const handleInput = (field: string, value: string) => {
    setAddingModule((prevModule) => ({
      ...prevModule,
      [field]: value,
    }));
  };

  const handleAddModule = () => {
    console.log(addingModule);
    let { name, image, description, code } = addingModule;
    addModule({
      variables: {
        name: name,
        image: image,
        description: description,
        code: code,
      },
    });
    console.log(error);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      gap={1}
    >
      <TextField
        label="Module Name"
        value={addingModule.name}
        onChange={(e) => handleInput("name", e.target.value)}
      />
      <TextField
        label="Module description"
        value={addingModule.description}
        onChange={(e) => handleInput("description", e.target.value)}
      />
      <TextField
        label="Module Image"
        value={addingModule.image}
        onChange={(e) => handleInput("image", e.target.value)}
      />
      <TextField
        multiline
        rows={6}
        label="Module Code"
        value={addingModule.code}
        onChange={(e) => handleInput("code", e.target.value)}
      />
      <Button onClick={() => handleAddModule()}>Add Module</Button>
    </Box>
  );
};
