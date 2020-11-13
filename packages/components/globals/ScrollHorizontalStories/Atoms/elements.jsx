const { styled } = require("styletron-react");

const S = {};
S.WrapperHorizontalScrolling = styled("div", {
  display: "flex",
  margin:"auto",
  overflowX : "auto",
  "::-webkit-scrollbar": {
    display :"none"
  },
  "> *": {
    flex: "none",
  },
});

export default S;
