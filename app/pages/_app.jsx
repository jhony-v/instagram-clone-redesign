import "@styles/theme-variables.css";
import "@styles/reset.css";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron, debug } from "../styletron";
import { ApolloProvider } from "@apollo/client";
import clientGraphQL from "config/apollo/clientGraphQL";
import GlobalErrorBoundary from "packages/common/components/GlobalErrorBoundary";
import Router from "next/router";
import NProgress from "nprogress";

NProgress.configure({showSpinner:false})
Router.events.on("routeChangeStart",  () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

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
