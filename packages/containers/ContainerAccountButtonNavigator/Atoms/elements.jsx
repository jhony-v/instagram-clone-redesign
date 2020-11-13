import FixedWrapper from "@components/common/Wrappers/FixedWrapper";
import { withStyleDeep } from "styletron-react";

const S = {};
S.AccountButtonFixedWrapper = withStyleDeep(FixedWrapper, {
  right: "0",
  top: "0",
  transform: "translateX(-50px)",
  display:"flex",
  alignItems: "center",
  height: "var(--itg-navigator-height)",
});
export default S;
