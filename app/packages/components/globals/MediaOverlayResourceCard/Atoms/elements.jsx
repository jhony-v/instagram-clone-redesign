import { styled } from "styletron-react";

export const MediaOverlayWrapperCard = styled("div", ({ $w, $h }) => ({
    width: $w,
    height: $h,
    backgroundColor: "var(--itg-card-color)",
    overflow: "hidden",
    overflow: "hidden",
    borderRadius: "10px",
    display: "flex",
    cursor:"pointer",
    position: "relative",
}));

export const OverlayBody = styled("div", {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "var(--itg-overlay-background)",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});

export const ResourceImage = styled("img", {
    width: "100%",
    height: "100%",
    objectFit: "cover"
})