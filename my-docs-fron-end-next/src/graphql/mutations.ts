import { gql } from "@apollo/client";

export const ADD_MODULE = gql`
  mutation Mutation(
    $name: String!
    $description: String
    $descriptions: [ModuleDescriptionInput]
    $image: String
    $code: String!
    $passkey: String!
  ) {
    addModule(
      name: $name
      description: $description
      descriptions: $descriptions
      image: $image
      code: $code
      passkey: $passkey
    ) {
      code
      descriptions {
        code
        description
        image
        title
      }
      image
      name
    }
  }
`;
