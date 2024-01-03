import { Button } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_ALL_MODULES } from "../graphql";

export const Home = () => {
  const { data } = useQuery(GET_ALL_MODULES);
  console.log(data);

  return (
    <div>
      <Button variant="contained">Hello World</Button>
    </div>
  );
};
