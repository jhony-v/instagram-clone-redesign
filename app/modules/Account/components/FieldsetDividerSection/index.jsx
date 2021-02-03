import React from 'react'
import Wrapper from '@components/common/Wrappers/Wrapper'
import BorderBottomDivider from '../BorderBottomDivider'
import TitleTextDescription from '../TitleTextDescription'
import Text from '@components/common/Text'

export default function FieldsetDividerSection({ title, children,$pv }) {
    return (
       <BorderBottomDivider $normalizeLast $style={{ width: "86%", margin: "auto" }} $pv={$pv}>
          {title && (
          <TitleTextDescription>{title}</TitleTextDescription>
            )}
          <Wrapper $m={title && "20px 0 0"}>
             <Text $color="var(--itg-app-text-default-color-alpha-45)" >{children}</Text>
          </Wrapper>
       </BorderBottomDivider>
    )
}
