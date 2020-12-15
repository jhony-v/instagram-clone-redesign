import React from 'react'
import FlexWrapper from '@components/common/Wrappers/FlexWrapper'
import Icons from '@icons/Icons'
import DetailMediaItem from '../Atoms/DetailMediaItem'

const DetailOptionsMedia = ({ comments, likes, playbacks }) => {
    return (
       <FlexWrapper $alignCenter>
          {comments && (
          <DetailMediaItem icon={Icons.Heart.Active} total={comments} />
            )}
          {likes && (
          <DetailMediaItem icon={Icons.Comment.Active} total={likes} />
            )}
       </FlexWrapper>
    )
}

export default DetailOptionsMedia
