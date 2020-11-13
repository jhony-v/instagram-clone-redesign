import { styled } from "styletron-react";

export default styled("div", ({ $w, $h, $m }) => ({
  width: $w,
  heght: $h,
  margin: $m,
}));
