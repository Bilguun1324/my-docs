import { useParams } from "react-router-dom";

export const Module = () => {
  const { moduleId } = useParams();
  return <div>{moduleId}</div>;
};
