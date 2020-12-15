import React from 'react'
import MediaOverlayResourceCard from '@components/globals/MediaOverlayResourceCard'
import faker from "faker";
import ListGridMassonryItems from '@components/globals/ListGridMassonryItems';
import Wrapper from '@components/common/Wrappers/Wrapper';

const PostsSections = () => {
    return (
       <Wrapper $m="40px 0">
          <ListGridMassonryItems repeat={3}>
             {[...Array(10)].map((_, index) => (
                <MediaOverlayResourceCard image={faker.random.image()} key={index} totalComments={325} totalLikes={325} w="100%" />
                ))}
          </ListGridMassonryItems>
       </Wrapper>
    )
}

export default PostsSections
