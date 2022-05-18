import { ApolloClient, InMemoryCache } from "@apollo/client";
const cache = new InMemoryCache()
const client = new ApolloClient({
    uri: "https://techloset-trainings-server.herokuapp.com/graphql",
    cache: cache
});

export default client;