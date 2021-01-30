import FlexWrapper from "@components/common/Wrappers/FlexWrapper";
import { mediaQueries } from "packages/common/breakpoints";
import { withStyleDeep } from "styletron-react";

export default withStyleDeep(FlexWrapper, {
    alignItems: "center",
    justifyContent: "space-around",
    [mediaQueries.tabletMedium]: {
       width: "100%",
       position: "fixed",
       bottom: 0,
       left: 0,
       height: "var(--itg-navigator-height)",
       backgroundColor: "var(--itg-navigator-background)",
    },
 });