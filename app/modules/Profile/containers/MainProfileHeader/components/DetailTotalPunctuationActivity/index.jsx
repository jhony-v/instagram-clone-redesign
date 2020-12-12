import React from 'react'
import Text from '@components/common/Text'
import Wrapper from '@components/common/Wrappers/Wrapper'

const DetailTotalPunctuation = ({ total, text }) => {
    return (
       <Wrapper $m="0 20px 0 0">
          <Text $weight $style={{ marginRight: "5px" }}>{total}</Text>
          <Text >{text}</Text>
       </Wrapper>
    )
}

export default DetailTotalPunctuation
