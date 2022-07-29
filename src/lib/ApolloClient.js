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
            "organizationKey": '1314a8b6f240f6d5d0689f878a7e672370611fd8f81e7162ce9447ca2246dab7'
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});;

export default client;