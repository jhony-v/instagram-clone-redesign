import React, { forwardRef } from 'react'
import { styled } from 'styletron-react'
import Wrapper from '@components/common/Wrappers/Wrapper';
import Text from '@components/common/Text';

const Input = styled("input", {
    border: "1px solid var(--itg-root-dark-alpha-color-30)",
    padding: "13px",
    borderRadius: "10px",
    display: "block",
    width: "100%",
});

export default forwardRef(({ detail, placeholder, ...restProps }, ref) => {
    return (
       <Wrapper>
          <Input placeholder={placeholder} ref={ref} {...restProps} />
          {detail && (
          <Wrapper $m="10px 0">
             <Text $fontSize="small" $color="var(--itg-app-text-default-color-alpha-45)" >{detail}</Text>
          </Wrapper>
            )}
       </Wrapper>
    )
})
