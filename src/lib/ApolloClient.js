import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
const httpLink = createHttpLink({
    // uri: 'http://localhost:3000/graphql',
    uri: 'https://training-portal-backend.herokuapp.com/graphql'
});

const authLink = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists
    // return the headers to the context so httpLink can read them
    const token = await localStorage.getItem('token')
    return {
        headers: {
            ...headers,
            authorization: token,
            "organizationKey": '5d84d7320f41d5f9e8394f02e4d9e32cdb86a94ebd1e13c45aa2c30f946e4fe7'
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});;

export default client;