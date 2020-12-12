import Text from "@components/common/Text";
import { styled, withStyleDeep } from "styletron-react";




export const Wrapper = styled("div", ({ $selected }) => ({
    display: "flex",
    alignItems: "center",
    margin: "0 20px",
    padding: "10px",
    cursor: "pointer",
    position: "relative",
    ...!$selected && {
        color: "var(--itg-root-dark-alpha-color-50)",
    },
}))


export const TopBar = styled("div",{
    height: "1px",
    width: "100%",
    backgroundColor: "var(--itg-app-text-default-color)",
    position:"absolute",
    top:"-1px",
    left:"0px"
})


export const TabText = withStyleDeep(Text, ({ $selected }) => ({
    textTransform: "uppercase",
    ...!$selected && {
        color: "var(--itg-root-dark-alpha-color-50)",
    }
}))