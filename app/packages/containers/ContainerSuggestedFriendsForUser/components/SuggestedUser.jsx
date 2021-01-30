import React from 'react'
import FlexWrapper from '@components/common/Wrappers/FlexWrapper'
import Wrapper from '@components/common/Wrappers/Wrapper'
import Avatar from '@components/common/Avatar'
import Link from 'next/link'
import { NeutralTextDescription, UsernameTextBold } from '@components/globals/SuggestedUserInFeeds'
import CallToActionButton from '@components/common/CommonButtons/CallToActionButton'
import Text from '@components/common/Text'

const SuggestedUser = ({ avatar, username, description,subtitle, userId }) => {
   return (
      <Wrapper $p="6px 0">
         <FlexWrapper $alignCenter>
            <Avatar image={avatar} />
            <Wrapper $m="0 0 0 10px" $w="100%">
               <UsernameTextBold fluid>{username}</UsernameTextBold>
               <NeutralTextDescription fluid>{description}</NeutralTextDescription>
               <NeutralTextDescription fluid $style={{marginTop:"5px"}}>{subtitle}</NeutralTextDescription>
            </Wrapper>
            <Wrapper>
               <Link href="/">
                  <CallToActionButton $as="a" $flat $style={{padding:"0px"}}>
                     <Text $color="inherit">Follow</Text>
                  </CallToActionButton>
               </Link>
            </Wrapper>
         </FlexWrapper>
      </Wrapper>
   )
}

export default SuggestedUser
