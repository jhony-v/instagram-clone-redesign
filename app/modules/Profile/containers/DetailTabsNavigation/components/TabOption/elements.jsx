import Text from "@components/common/Text";
import { styled, withStyleDeep } from "styletron-react";

export const Wrapper = styled("div", ({ $selected }) => ({
    display: "flex",
    alignItems: "center",
    padding: "10px",
    cursor: "pointer",
    position: "relative",
    width: "150px",
    justifyContent: "center",
    transition: "color .3s",
    ...!$selected && {
        color: "var(--itg-root-dark-alpha-color-50)",
    },
}))


export const TabText = withStyleDeep(Text, ({ $selected }) => ({
    textTransform: "uppercase",
    ...!$selected && {
        color: "var(--itg-root-dark-alpha-color-50)",
    }
}))