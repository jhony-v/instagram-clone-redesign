import { styled } from "styletron-react";

export default styled("span", (props) => ({
  fontWeight: props.$weight && "bold",
  fontSize: {
    small: ".8rem",
    default: "14px",
    medium: "1.3rem",
    big: "1.6rem",
  }[props.$fontSize || "default"],
}));
