import React from 'react'
import FlexWrapper from '@components/common/Wrappers/FlexWrapper'
import { withStyleDeep } from 'styletron-react'

const Wrapper = withStyleDeep(FlexWrapper, {
    display: "flex",
    justifyContent:"center",
    borderTop: "1px solid var(--itg-root-dark-alpha-color-20)",
    marginTop: "40px"
});

const TabsWrapperNavigation = ({ children }) => {
    return (
       <Wrapper>
          {children}
       </Wrapper>
    )
}

export default TabsWrapperNavigation
