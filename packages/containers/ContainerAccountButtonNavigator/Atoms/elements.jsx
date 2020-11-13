import FixedWrapper from "@components/common/Wrappers/FixedWrapper";
import { withStyleDeep } from "styletron-react";

const S = {};
S.AccountButtonFixedWrapper = withStyleDeep(FixedWrapper, {
  top: 0,
  right: "50px",
  display:"flex",
  alignItems: "center",
  height: "var(--itg-navigator-height)",
});
export default S;
