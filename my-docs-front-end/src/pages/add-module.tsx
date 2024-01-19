import { useState } from "react";
import { Box, TextField } from "@mui/material";
import { Button } from "../components";
import { useMutation } from "@apollo/client";
import { ADD_MODULE, GET_ALL_MODULES } from "../graphql";
import { useStorage } from "../firebase";

type AddModuleType = {
  name: string;
  image: File | undefined;
  description: string;
  code: string;
};

export const AddModule = () => {
  const { uploadImage } = useStorage();
  const [addModule] = useMutation(ADD_MODULE, {
    refetchQueries: [
      {
        query: GET_ALL_MODULES,
      },
    ],
  });
  const [addingModule, setAddingModule] = useState<AddModuleType>({
    name: "",
    image: undefined,
    description: "",
    code: "",
  });

  const handleInput = (field: string, value: string) => {
    setAddingModule((prevModule) => ({
      ...prevModule,
      [field]: value,
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setAddingModule((prevModule) => ({
        ...prevModule,
        image: event && event.target.files ? event.target.files[0] : undefined,
      }));
    }
  };
  console.log("this is env file: ", process.env.PROJECT_ID)

  const handleAddModule = async () => {
    console.log(addingModule);
    let urls = await uploadImage(
      addingModule.image as File | File[],
      "modules",
      "test"
    );
    let { name, description, code } = addingModule;
    addModule({
      variables: {
        name: name,
        image: urls[0],
        description: description,
        code: code,
      },
    });
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
      <input type="file" onChange={handleFileChange} />
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
