import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Cookies from "js-cookie";


const httpLink = createHttpLink({
   uri :  "http://localhost:1337/graphql",
})

const contextAuth = setContext((_,{headers}) => {
   const token = Cookies.get("token");
   return {
      ...headers,
      authorization : token ? `Bearer ${token}` : "",
   }
})

const clientGraphQL = new ApolloClient({
   cache: new InMemoryCache(),
   link : contextAuth.concat(httpLink)
});

export default clientGraphQL;
