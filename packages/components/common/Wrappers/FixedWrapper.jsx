import { styled } from "styletron-react";

export default styled("div", ({ $position }) => ({
  position: "fixed",
  ...$position,
}));
