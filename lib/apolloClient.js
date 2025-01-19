import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://77.222.32.144/graphql', // URL GraphQL API
    cache: new InMemoryCache(),
});

export default client;