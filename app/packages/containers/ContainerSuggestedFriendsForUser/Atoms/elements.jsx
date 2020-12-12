import { styled } from "styletron-react";

export const WrapperFixed = styled("div",{
    position : "fixed",
    width:"300px",
    top: "calc(var(--itg-navigator-height) + 60px)",
    marginLeft: "50px",
})