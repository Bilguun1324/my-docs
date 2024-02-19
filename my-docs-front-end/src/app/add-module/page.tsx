"use client";
import { Input } from "@/components";
import { ADD_MODULE, GET_ALL_MODULES } from "@/graphql";
import { AddModuleType, textAreaHeight } from "@/utils";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import MarkDown from "react-markdown";

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
    const variables =
      video !== "" ? moduleDetails : { ...moduleDetails, video: null };

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
    <div className="flex flex-col gap-4 w-full p-12 text-zinc-300">
      <div>Module Description</div>
      <div className="flex gap-4">
        <textarea
          value={text}
          onChange={(e) => handleInput("text", e.target.value)}
          className={`h-${textAreaHeight} w-full p-2 rounded text-black`}
        />
        <MarkDown
          className={`min-h-${textAreaHeight} w-full bg-default-gray p-2 h-fit text-zinc-300 rounded`}
        >
          {text}
        </MarkDown>
      </div>
      <div>Write your code here: </div>
      <textarea
        value={code}
        className={`h-${textAreaHeight} w-full p-2 text-black`}
        onChange={(e) => handleInput("code", e.target.value)}
      />
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <div className="flex items-center">Write your passkey: </div>
          <Input
            value={passkey}
            type="password"
            onChange={(val) => handleInput("passkey", val)}
          />
        </div>
        <div className="flex gap-4">
          <div className="flex items-center">Write your video link here: </div>
          <Input value={video} onChange={(val) => handleInput("video", val)} />
        </div>
      </div>
      <div onClick={() => createModule()} className="bg-white text-black">
        AddModule
      </div>
    </div>
  );
};

export default AddModule;
