import ListGridMassonryItems from '@components/globals/ListGridMassonryItems'
import React from 'react'
import { styled } from 'styletron-react'

const Wrapper = styled("div", {
    borderRadius: "5px",
    padding: "10px",
    margin: "20px 0",
    backgroundColor : "var(--itg-root-dark-alpha-color-10)"
})

export default function CardRoundedGrid({ repeat, children }) {
    return (
       <Wrapper>
          <ListGridMassonryItems repeat={repeat} gap="10px">
             {children}
          </ListGridMassonryItems>
       </Wrapper>
    )
}
