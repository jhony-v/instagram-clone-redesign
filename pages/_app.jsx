import { Provider as StyletronProvider } from "styletron-react";
import "@styles/reset.css";
import "@styles/theme-variables.css";
import { styletron, debug } from "../styletron";

export default function App({ Component, pageProps }) {
  return (
    <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
      <Component {...pageProps} />
    </StyletronProvider>
  );
}
