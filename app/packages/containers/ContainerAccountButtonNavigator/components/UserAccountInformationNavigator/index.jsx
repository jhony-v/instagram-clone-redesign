import React from 'react'
import FlexWrapper from '@components/common/Wrappers/FlexWrapper';
import Wrapper from '@components/common/Wrappers/Wrapper';
import Avatar from '@components/common/Avatar';

const UserAccountInformationNavigator = ({ username, avatar }) => {
    return (
       <FlexWrapper $alignCenter>
          <Wrapper $m="0 10px 0 0">
             <Text $weight>{username}</Text>
          </Wrapper>
          <Avatar image={avatar} dimension="35px" />
       </FlexWrapper>
    )
}

export default UserAccountInformationNavigator
