import { styled } from "styletron-react";

export default styled("div", (props) => ({
   display: "flex",
   ...(props.$center && {
      justifyItems: "center",
      alignItems: "center",
   }),
   alignItems: props.$alignCenter && "center",
   flexDirection: props.$column && "column",
   justifyContent: props.$spaceBetween && "space-between",
}));
