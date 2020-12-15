import { styled } from "styletron-react";

export default styled("div", ({ $w, $h, $m, $p, $centerContent }) => ({
   width: $w,
   height: $h,
   margin: $m,
   padding: $p,
   textAlign: $centerContent && "center",
}));
