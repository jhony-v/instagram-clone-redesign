import React from 'react'
import FlexWrapper from '@components/common/Wrappers/FlexWrapper'
import Wrapper from '@components/common/Wrappers/Wrapper'
import Avatar from '@components/common/Avatar'
import Text from '@components/common/Text'
import Link from 'next/link'

const SuggestedUser = ({ avatar, username, description, userId }) => {
    return (
       <Wrapper $p="6px 0">
          <FlexWrapper $alignCenter>
             <Avatar image={avatar} />
             <Wrapper $m="0 0 0 10px" $w="100%">
                <Text $weight $fluid>{username}</Text>
                <Text $fontSize="small" $color="var(--itg-root-dark-alpha-color-50)">{description}</Text>
             </Wrapper>
             <Wrapper>
                <Link href="/">
                   <Text $weight $fontSize="small" $as="a" $color="var(--itg-app-text-call-to-action-color)">Follow</Text>
                </Link>
             </Wrapper>
          </FlexWrapper>
       </Wrapper>
    )
}

export default SuggestedUser
