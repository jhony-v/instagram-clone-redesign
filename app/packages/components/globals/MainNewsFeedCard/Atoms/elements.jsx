import { styled } from "styletron-react";

const S = {};
S.CardWrapper = styled("article", {
   display: "flex",
   flexDirection: "column",
});

S.FeedImagePreview = styled("img", {
   borderRadius: "10px",
   width: "100%",
   height: "250px",
   boxShadow: "0 10px 25px rgba(0,0,0,.1)",
});

export default S;
