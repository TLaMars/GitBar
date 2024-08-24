import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  uri: (operation) => operation.getContext().uri ?? "",
  cache: new InMemoryCache(),
  queryDeduplication: false,
});

export default client;
