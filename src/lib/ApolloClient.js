import { ApolloClient, InMemoryCache } from "@apollo/client";
const cache = new InMemoryCache()
const client = new ApolloClient({
    uri: "http://localhost:3000/graphql",
    cache: cache
});

export default client;