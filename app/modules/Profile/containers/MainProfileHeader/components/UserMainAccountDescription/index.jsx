import React from 'react'
import CallToActionButton from '@components/common/CommonButtons/CallToActionButton'
import Text from '@components/common/Text'
import FlexWrapper from '@components/common/Wrappers/FlexWrapper'
import Wrapper from '@components/common/Wrappers/Wrapper'

const UserMainAccountDescription = ({ username, location, isFollowing }) => {
    return (
       <FlexWrapper>
          <Wrapper>
             <Text $weight $fluid $fontSize="big">{username}</Text>
             <Wrapper $m="10px 0 0">
                <Text $color="var(--itg-root-dark-alpha-color-50)" $weight>{location}</Text>
             </Wrapper>
          </Wrapper>
          <Wrapper $m="0 0 0 60px">
             <CallToActionButton>{
                    isFollowing ? "Follow" : "Unfollow"
                }</CallToActionButton>
          </Wrapper>
       </FlexWrapper>
    )
}

export default UserMainAccountDescription
