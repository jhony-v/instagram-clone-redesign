import "@styles/reset.css";
import "@styles/theme-variables.css";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron, debug } from "../styletron";
import { ApolloProvider } from "@apollo/client";
import clientGraphQL from "config/clientGraphQL";
import GlobalErrorBoundary from "packages/common/components/GlobalErrorBoundary";

export default function App({ Component, pageProps }) {
   return (
      <ApolloProvider client={clientGraphQL}>
         <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
            <GlobalErrorBoundary>
               <Component {...pageProps} />
            </GlobalErrorBoundary>
         </StyletronProvider>
      </ApolloProvider>
   );
}
