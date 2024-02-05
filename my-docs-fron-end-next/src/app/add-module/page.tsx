"use client"
import { ADD_MODULE, GET_ALL_MODULES } from "@/graphql";
import { useMutation } from "@apollo/client";

const AddModule = () => {
  const [addModule, { error, loading }] = useMutation(ADD_MODULE, {
    refetchQueries: [
      {
        query: GET_ALL_MODULES,
      },
    ],
  });

  const createModule = async () => {
    const variables = {
      name: "name",
      description: "description",
      code: "code",
      passkey: "Tsombo0516!",
    };

    await addModule({
      variables: variables,
    });
  };

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <div onClick={() => createModule()} className="bg-white">AddModule</div>
    </div>
  );
};

export default AddModule;
