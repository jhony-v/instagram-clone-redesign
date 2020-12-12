import { styled } from "styletron-react";

export default styled("span", (props) => ({
   ...(props.$weight && {
      fontWeight: "bold",
   }),
   ...(props.$fluid && {
      display: "block",
   }),
   color: props.$color || "var(--itg-app-text-default-color)",
   fontSize: {
      small: ".8rem",
      default: "14px",
      medium: "1.3rem",
      big: "1.6rem",
   }[props.$fontSize || "default"],
   textAlign: props.$center && "center",
}));
