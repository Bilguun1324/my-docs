import { gql } from "@apollo/client";

export const ADD_MODULE = gql`
  mutation Mutation(
    $text: String!
    $passkey: String!
    $code: String
    $video: String
    $descriptions: [ModuleDescriptionInput]
  ) {
    addModule(
      text: $text
      passkey: $passkey
      code: $code
      video: $video
      descriptions: $descriptions
    ) {
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
