import { mediaQueries } from "packages/common/breakpoints";
import { styled } from "styletron-react";

const S = {};
S.GridMassonry = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "20px",
  justifyItems: "center",
  [mediaQueries.tabletMedium]: {
    gridTemplateColumns: "1fr",
    padding: "0 10px",
  },
});

export default S;
