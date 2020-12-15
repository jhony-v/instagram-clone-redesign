import React from 'react'
import Text from '@components/common/Text'
import Wrapper from '@components/common/Wrappers/Wrapper'
import FlexWrapper from '@components/common/Wrappers/FlexWrapper'


const DetailMediaItem = ({ icon: IconComponent, total }) => {
    const color = "white";
    return (
       <FlexWrapper $style={{ margin: "0 10px" }}>
          <Wrapper $style={{ color }}>
             <IconComponent />
          </Wrapper>
          <Wrapper $m="0 0 0 10px">
             <Text $weight $fontSize="small" $color={color}>{total}</Text>
          </Wrapper>
       </FlexWrapper>
    )
}

export default DetailMediaItem
