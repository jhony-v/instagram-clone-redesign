import React from 'react'
import { styled } from 'styletron-react'


const Wrapper = styled("div",{
    width: "90%",
    margin:"20px auto",
    fontWeight: "bold",
    color: "var(--itg-app-text-default-color)"
})

export default function TitleActivity() {
    return (
       <Wrapper>
          Where You're Logged in
       </Wrapper>
    )
}
