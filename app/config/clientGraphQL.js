import { ApolloClient, InMemoryCache } from "@apollo/client";

const clientGraphQL = new ApolloClient({
   uri: "http://localhost:1337/graphql",
   cache: new InMemoryCache(),
});

export default clientGraphQL;
