import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
const httpLink = createHttpLink({
    uri: 'http://localhost:3000/graphql',
    // uri: 'https://training-portal-backend.herokuapp.com/graphql'
});



const authLink = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists
    // return the headers to the context so httpLink can read them
    const token = await localStorage.getItem('token')
    return {
        headers: {
            ...headers,
            authorization: token,
            "organizationKey": '8fc5f830d63a81d70923888b6d14185bd45a138dd1b333694edaef4a65e6b988'
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});;

export default client;