import React, { useState } from 'react'
import { MediaOverlayWrapperCard, OverlayBody, ResourceImage } from './Atoms/elements'
import { useHover } from 'react-use-gesture';
import DetailOptionsMedia from './Molecules/DetailOptionsMedia';

const MediaOverlayResourceCard = ({ w, h, image, contentType, totalComments, totalLikes, totalPLaybacks, onClick }) => {
    const [active, setActive] = useState(false);
    const bindHover= useHover((e) => {
        setActive(e.active);
    });
    return (
       <MediaOverlayWrapperCard {...bindHover()} $w={w} $h={h} onClick={onClick} role="button">
          <ResourceImage src={image} />
          {active && (
          <OverlayBody>
             <DetailOptionsMedia likes={totalLikes} comments={totalComments} playbacks={totalPLaybacks} />
          </OverlayBody>
            )}
       </MediaOverlayWrapperCard>
    )
}

export default MediaOverlayResourceCard
