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
  passkey: string;
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
    passkey: "",
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

  const handleAddModule = async () => {
    let { name, description, code, passkey } = addingModule;
    let urls = undefined;
    if (addingModule.image) {
      urls = await uploadImage(
        addingModule.image as File | File[],
        "modules",
        "test"
      );
    }
    addModule({
      variables: {
        name: name,
        image: urls ? urls[0] : undefined,
        description: description,
        code: code,
        passkey: passkey,
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
        label="Passkey"
        value={addingModule.passkey}
        onChange={(e) => handleInput("passkey", e.target.value)}
      />
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
