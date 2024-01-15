import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://my-docs-lime.vercel.app/",
  cache: new InMemoryCache(),
});
