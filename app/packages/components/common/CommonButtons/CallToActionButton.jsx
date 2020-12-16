import { styled } from "styletron-react";

export default styled("button", ({ $underline }) => ({
    backgroundColor: "var(--itg-app-button-call-to-action-background)",
    color: "white",
    borderRadius: "10px",
    padding: "10px",
    display: "flex",
    fontWeight: "bold",
    cursor: "pointer",
    ...$underline && {
        color: "var(--itg-app-button-call-to-action-background)",
        background: "none",
    }
}));