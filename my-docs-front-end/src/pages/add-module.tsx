import { useState } from "react";
import { Box, Input, TextField, Typography } from "@mui/material";
import { Button, Loading } from "../components";
import { useMutation } from "@apollo/client";
import { ADD_MODULE, GET_ALL_MODULES } from "../graphql";
import { useStorage } from "../firebase";
import { InputWidth } from "../utils";

type AddModuleType = {
  name: string;
  image: File | undefined;
  description: string;
  code: string;
  passkey: string;
};

export const AddModule = () => {
  const { uploadImage } = useStorage();
  const [addModule, { error, loading }] = useMutation(ADD_MODULE, {
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

    const urls = addingModule.image
      ? await uploadImage(
          addingModule.image as File | File[],
          "modules",
          "test"
        )
      : undefined;

    const variables = urls
      ? {
          name: name,
          description: description,
          image: urls[0],
          code: code,
          passkey: passkey,
        }
      : {
          name: name,
          description: description,
          code: code,
          passkey: passkey,
        };

    await addModule({
      variables: variables,
    });
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Typography>{error.message}</Typography>;
  }

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
        sx={{ width: InputWidth }}
        onChange={(e) => handleInput("name", e.target.value)}
      />
      <TextField
        label="Module description"
        value={addingModule.description}
        multiline
        rows={4}
        sx={{ width: InputWidth }}
        onChange={(e) => handleInput("description", e.target.value)}
      />
      <input type="file" onChange={handleFileChange} />
      <TextField
        multiline
        rows={6}
        label="Module Code"
        value={addingModule.code}
        sx={{ width: InputWidth }}
        onChange={(e) => handleInput("code", e.target.value)}
      />
      <TextField
        label="Passkey"
        value={addingModule.passkey}
        type="password"
        sx={{ width: InputWidth }}
        onChange={(e) => handleInput("passkey", e.target.value)}
      />
      <Button onClick={() => handleAddModule()}>Add Module</Button>
    </Box>
  );
};
