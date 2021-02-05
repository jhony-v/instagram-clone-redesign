import { styled } from "styletron-react";

export const neutralBorder = "1px solid var(--itg-root-dark-alpha-color-40)";

export const GridWrapper = styled("div", {
    border: neutralBorder,
    display: "grid",
    backgroundColor:"var(--itg-card-color)",
    height: "550px",
    flex: "none",
    gridTemplateColumns: "1fr 340px",
    gridTemplateRows: "70px 1fr 200px",
    gridTemplateAreas: `
        'image sidebar-header'
        'image sidebar-comments'
        'image sidebar-options'
    `,
});

export const GridArea = styled("section", ({ $area }) => ({
    gridArea: $area,
    display:"flex",
}))