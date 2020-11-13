import StylesReset from "packages/common/styles/StylesReset";
import StylesThemeVariables from "packages/common/styles/StylesThemeVariables";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron, debug } from "../styletron";

export default function App({ Component, pageProps }) {
  return (
    <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
      <StylesThemeVariables/>
      <StylesReset/>
      <Component {...pageProps} />
    </StyletronProvider>
  );
}
