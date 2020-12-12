import React from 'react'
import FlexWrapper from '@components/common/Wrappers/FlexWrapper'
import { withStyleDeep } from 'styletron-react'

const Wrapper = withStyleDeep(FlexWrapper, {
    display: "flex",
    justifyContent: "center",
    borderTop: "1px solid var(--itg-root-dark-alpha-color-20)",
    marginTop: "40px",
});

const InsideWrapper = withStyleDeep(FlexWrapper, {
    position: "relative",
});

const TabsWrapperNavigation = ({ children }) => {
    return (
       <Wrapper>
          <InsideWrapper>
             {children}
          </InsideWrapper>
       </Wrapper>
    )
}

export default TabsWrapperNavigation
