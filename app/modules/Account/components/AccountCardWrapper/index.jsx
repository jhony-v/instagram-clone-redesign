import React from 'react'
import { styled } from 'styletron-react'

export const AccountCardWrapper = styled("div",{
    backgroundColor : "var(--itg-card-color)",
    border: "1px solid var(--itg-root-dark-alpha-color-40)",
    margin: "5em 0",
    display: "flex",
});


export const AccountCardWrapperSidebar = styled("div",{
    borderRight: "1px solid var(--itg-root-dark-alpha-color-40)",
    display:"flex",
    flexDirection: "column",
    width: "250px",
    flex: "none"
});

export const AccountCardWrapperMain = styled("div",{
    padding: "20px 50px",
    flex: "1"
});