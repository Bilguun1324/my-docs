import { gql } from "@apollo/client";

export const GET_ALL_MODULES = gql`
  query Query {
  getModules {
    code
    descriptions {
      code
      description
      image
      title
    }
    image
    name
    id
    description
  }
}
`;
