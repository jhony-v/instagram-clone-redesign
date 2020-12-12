import React from 'react'
import Text from '@components/common/Text'
import Wrapper from '@components/common/Wrappers/Wrapper'

const UserDescription = ({ fullName, description }) => {
    return (
       <Wrapper $m="20px 0">
          <Text $weight >{fullName}</Text>
          <Wrapper $m="10px 0">
             <Text $color="var(--itg-root-dark-alpha-color-50)">
                {description}
             </Text>
          </Wrapper>
       </Wrapper>
    )
}

export default UserDescription
