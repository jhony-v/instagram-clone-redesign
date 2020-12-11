import { mediaQueries } from "packages/common/breakpoints";
import { styled } from "styletron-react";

const size = "50px";

export default styled("div", {
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "100%",
  backgroundColor: "var(--itg-app-primary-color)",
  width: size,
  height: size,
  right: 0,
  bottom: 0,
  zIndex: 1,
  fontSize: "14px",
  margin: "40px",
  color: "var(--itg-root-dark-alpha-color-00)",
  boxShadow: "0 10px 25px rgba(0,0,0,.3)",
  [mediaQueries.tabletMedium]: {
      left:0,
      margin:"auto",
      bottom:"40px"
  },
});
