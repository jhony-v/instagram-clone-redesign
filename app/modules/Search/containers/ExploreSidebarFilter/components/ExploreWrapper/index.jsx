import Wrapper from '@components/common/Wrappers/Wrapper'
import React from 'react'

export default function ExploreWrapper({children}) {
    return (
       <Wrapper $p="20px 20px">
          {children}
       </Wrapper>
    )
}
