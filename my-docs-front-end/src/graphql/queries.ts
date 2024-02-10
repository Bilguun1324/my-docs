import { gql } from "@apollo/client";

export const GET_ALL_MODULES = gql`
  query GetModules {
  getModules {
    code
    descriptions {
      code
      id
      text
      video
    }
    id
    text
    video
  }
}
`;
