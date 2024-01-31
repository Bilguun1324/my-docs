import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://my-docs-lime.vercel.app/",
  cache: new InMemoryCache(),
});
