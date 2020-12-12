import FixedWrapper from "@components/common/Wrappers/FixedWrapper";
import { mediaQueries } from "packages/common/breakpoints";
import { withStyleDeep } from "styletron-react";

const S = {};
S.AccountButtonFixedWrapper = withStyleDeep(FixedWrapper, {
   top: 0,
   right: "50px",
   display: "flex",
   alignItems: "center",
   height: "var(--itg-navigator-height)",
   [mediaQueries.tabletMedium]: {
      right: "10px",
   },
});
export default S;
