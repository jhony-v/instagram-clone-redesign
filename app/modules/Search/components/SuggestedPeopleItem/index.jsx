import React from 'react'
import FlexWrapper from '@components/common/Wrappers/FlexWrapper'
import Wrapper from '@components/common/Wrappers/Wrapper'
import Avatar from '@components/common/Avatar'
import { NeutralTextDescription, UsernameTextBold } from '@components/globals/SuggestedUserInFeeds'
import CallToActionButton from '@components/common/CommonButtons/CallToActionButton'

const SuggestedPeopleItem = ({ avatar, username, description,subtitle, userId }) => {
   return (
      <Wrapper $p="6px 0" $m="0 0 20px">
         <FlexWrapper $alignCenter>
            <Avatar image={avatar} dimension="50px" />
            <Wrapper $m="0 0 0 10px" $w="100%">
               <UsernameTextBold fluid>{username}</UsernameTextBold>
               <NeutralTextDescription fluid>{description}</NeutralTextDescription>
               <NeutralTextDescription fluid $style={{marginTop:"5px"}}>{subtitle}</NeutralTextDescription>
            </Wrapper>
            <Wrapper>
               <CallToActionButton>
                  Follow
               </CallToActionButton>
            </Wrapper>
         </FlexWrapper>
      </Wrapper>
   )
}

export default SuggestedPeopleItem
