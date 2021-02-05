import React, { useState } from 'react'
import LikeIcon from '@components/common/ReactionsIcons/LikeIcon'
import { styled } from 'styletron-react';


const ReactiveIcon = styled("div", {
    transition: "transform .3s",
    display: "inline-block",
    ":active": {
        transform: "scale(1.3)"
    }
})

export default function LikePublication({size,liked}) {
    const [like, setLike] = useState(liked);
    return (
       <ReactiveIcon onClick={() => setLike(state => !state)}>
          <LikeIcon active={like} size={size} />
       </ReactiveIcon>
    )
}
