import React from 'react'
import { RiMore2Fill, RiMoreFill } from 'react-icons/ri'

export default function OptionPointsIcon({ direction, color, size, onClick }) {
    const propsIcon = {
        color,
        size,
        onClick
    }
    return (
       <span>
          {direction === "vertical" && <RiMore2Fill {...propsIcon} />}
          {direction === "horizontal" && <RiMoreFill {...propsIcon} />}
       </span>
    )
}

OptionPointsIcon.defaultProps = {
    direction: "vertical",
    size:20
}