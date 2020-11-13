import App from "next/app";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron, debug } from "../styletron";

export default function App({ Component, pageProps }) {
  return (
    <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
      <Component {...pageProps} />
    </StyletronProvider>
  );
}
