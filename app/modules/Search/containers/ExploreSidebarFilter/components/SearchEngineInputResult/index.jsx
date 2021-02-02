import React from 'react'
import { styled } from 'styletron-react'

const Input = styled("input",{
    padding:"15px",
    borderRadius:"10px",
    margin:"20px 0",
    backgroundColor :"var(--itg-root-dark-alpha-color-10)",
    width:"100%",
    fontWeight: "bold"
});

export default function SearchEngineInputResult() {
    return (
       <Input placeholder="Search in Instagram..." />
    )
}
