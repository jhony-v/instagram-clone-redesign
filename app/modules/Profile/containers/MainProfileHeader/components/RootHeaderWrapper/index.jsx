import React from 'react'
import FlexWrapper from '@components/common/Wrappers/FlexWrapper';
import { withStyleDeep } from 'styletron-react'

const Wrapper = withStyleDeep(FlexWrapper, {
    paddingTop: "40px",
    paddingBottom: "40px",
});

const RootHeaderWrapper = ({ children }) => {
    return (
       <Wrapper>
          {children}
       </Wrapper>
    )
}

export default RootHeaderWrapper
