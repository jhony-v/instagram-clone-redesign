import CallToActionButton from '@components/common/CommonButtons/CallToActionButton'
import FlexWrapper from '@components/common/Wrappers/FlexWrapper'
import { neutralBorder } from '@containers/PreviewCurrentUserPublication/components/PreviewLayout'
import React from 'react'
import { styled, withStyleDeep } from 'styletron-react'

const Input = styled("input", {
    width: "100%",
    height: "100%",
})


const CommentWrapper = withStyleDeep(FlexWrapper, {
    alignItems: "center",
    height: "60px",
    padding: "16px",
    borderTop: neutralBorder,
})

const PublicationComment = () => {
    return (
       <CommentWrapper>
          <Input placeholder="Add a comment..." />
          <CallToActionButton $flat>Post</CallToActionButton>
       </CommentWrapper>
    )
}

export default PublicationComment
