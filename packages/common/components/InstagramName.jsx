import { styled } from "styletron-react";

const InstagramWrapper = styled("div", ({ $fixed }) => ({
  ...($fixed && {
    position: "fixed",
    top:0,
    left:"50px",
    display:"flex",
    alignItems: "center",
    height: "var(--itg-navigator-height)",  
  }),
}));

export default function InstagramName({ fixed }) {
  return (
    <InstagramWrapper $fixed={fixed}>
      <img src="/images/instagram.png" />
    </InstagramWrapper>
  );
}
