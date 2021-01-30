import { styled } from "styletron-react";

export default {
    Root: styled("div", {
        display: "flex",
        width:"100%",
    }),
    Sidebar: styled("div", {
        width: "340px",
        position: "fixed",
        left: "0",
        backgroundColor : "var(--itg-card-color)",
        height:"100%"
    }),
    SidebarOverlay : styled("div", {
        width: "300px",
        flex: "none",
    }),
    Main: styled("div", {
        width: "100%",
    })
}