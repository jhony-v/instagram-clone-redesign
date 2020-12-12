import { styled } from "styletron-react";

export default styled("div", ({ $w, $h, $m, $p, $centerContent }) => ({
   width: $w,
   hegiht: $h,
   margin: $m,
   padding: $p,
   textAlign: $centerContent && "center",
}));
