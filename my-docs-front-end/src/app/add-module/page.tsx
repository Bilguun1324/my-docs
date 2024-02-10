"use client";
import { Input } from "@/components";
import { ADD_MODULE, GET_ALL_MODULES } from "@/graphql";
import { AddModuleType } from "@/utils";
import { useMutation } from "@apollo/client";
import { useState } from "react";

const AddModule = () => {
  const [addModule, { error, loading }] = useMutation(ADD_MODULE, {
    refetchQueries: [
      {
        query: GET_ALL_MODULES,
      },
    ],
  });

  const [moduleDetails, setModuleDetails] = useState<AddModuleType>({
    video: "",
    text: "",
    code: "",
    passkey: "",
  });

  const { code, video, text, passkey } = moduleDetails;

  const handleInput = (field: string, value: string) => {
    setModuleDetails((prevModule) => ({
      ...prevModule,
      [field]: value,
    }));
  };

  const createModule = async () => {
    const variables = video !== "" ? moduleDetails : { ...moduleDetails, video: null };

    await addModule({
      variables: variables,
    });
  };

  if (error) {
    return <div className="text-white">{error.message}</div>;
  }

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-2">
      <Input
        value={text}
        onChange={(val) => handleInput("text", val)}
      />
      <Input value={code} onChange={(val) => handleInput("code", val)} />
      <Input value={passkey} onChange={(val) => handleInput("passkey", val)} />
      <Input
        value={video}
        onChange={(val) => handleInput("video", val)}
      />

      <div onClick={() => createModule()} className="bg-white">
        AddModule
      </div>
    </div>
  );
};

export default AddModule;
