import React from 'react'
import Text from '@components/common/Text';
import UserStoryAvatar from '@components/common/UserStoryAvatar';
import Wrapper from '@components/common/Wrappers/Wrapper';
import { styled } from 'styletron-react'
import FlexWrapper from '@components/common/Wrappers/FlexWrapper';


const TextOptionComment = styled("span", {
    marginRight: "10px",
    color: "var(--itg-app-text-default-color-alpha-45)",
    fontWeight: "bold",
    padding: 0,
    fontSize: ".8rem",
    lineHeight: "1em"
})



export default function UserGlobalComment({ image, username, comment, children, totalLikes, onReply, date }) {
    return (
       <Wrapper>
          <FlexWrapper>
             <Wrapper $m="0 10px 0 0">
                <UserStoryAvatar image={image} dimension="40px" />
             </Wrapper>
             <Wrapper>
                <Wrapper $m="0 0 12px 0">
                   <Text $weight>{username}</Text>
                   <Text >{comment}</Text>
                </Wrapper>
                <FlexWrapper>
                   <TextOptionComment>{date}</TextOptionComment>
                   <TextOptionComment $as="button">{totalLikes} likes</TextOptionComment>
                   <TextOptionComment $as="button" onClick={onReply}>Reply</TextOptionComment>
                </FlexWrapper>
             </Wrapper>
          </FlexWrapper>
          {children && <Wrapper>{children}</Wrapper>}
       </Wrapper>
    )
}
