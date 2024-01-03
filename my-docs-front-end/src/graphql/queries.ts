import { gql } from "@apollo/client";

export const GET_ALL_MODULES = gql`
  query GetModules {
    getModules {
      code
      descriptions {
        id
        description
        code
        image
        title
      }
      id
      image
      name
    }
  }
`;
