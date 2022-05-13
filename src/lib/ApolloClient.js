import { ApolloClient, InMemoryCache,createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
const httpLink = createHttpLink({
    uri: 'https://techloset-trainings-server.herokuapp.com/graphql',
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization:  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjUzZDllYTY2OWEyMDBiOWMwMWYzOSIsInJvbGUiOiJPV05FUiIsImVtYWlsIjoiaG90aW9mZmljaWFsOTkxQGdtYWlsLmNvbSIsIm5hbWUiOiJIb3RpIiwiaWF0IjoxNjUyMjQxMjM1LCJleHAiOjE2NTIzMjc2MzV9.vCmlJgPrth0Ds8GpVB42S2NPZY6o_J3oBlVPaaywZUM",
            "organizationKey": '85c2019f55a5ad758a3fe6ea07d29a962cea72f1e408a107586e9dde1ece7c58'
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});;

export default client;