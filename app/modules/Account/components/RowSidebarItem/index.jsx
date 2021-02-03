import React from "react"
import { styled } from 'styletron-react'
import TitleTextWeight from "../TitleTextWeight"

const S = {
    Flex: styled("div", {
        display: "flex",
        marginBottom: "20px",
    }),
    Aside: styled("aside", {
        width: "230px",
        display: "flex",
        justifyContent: "flex-end",
        padding: "13px 30px",
        textAlign: "right"
    }),
    Content: styled("div", {
        width:"100%",
    }),
    InnerContent: styled("div", {
        width: "78%"
    })
}

const RowSidebarItem = ({ sidebar, content }) => (
   <S.Flex>
      <S.Aside>
         <TitleTextWeight>{sidebar}</TitleTextWeight>
      </S.Aside>
      <S.Content>
         <S.InnerContent>
            {content}
         </S.InnerContent>
      </S.Content>
   </S.Flex>
)

export default RowSidebarItem;