import { styled } from "styletron-react";

const S = {};
S.GridMassonry = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "20px",
  justifyItems:"center"
});

export default S;
