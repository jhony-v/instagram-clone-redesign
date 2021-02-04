import React from 'react'
import { FiLoader } from "react-icons/fi"
import { useStyletron } from 'styletron-react'

export default function SpinnerDashed() {
    const [css] = useStyletron();
    return (
       <div className={css({
            display: "inline-block"
        })}>
          <FiLoader size={30} className={css({
                color: "var(--itg-loading-color)",
                display: "inline-block",
                animationDuration: "1.5s",
                animationIterationCount: "infinite",
                animationTimingFunction: "linear",
                animationName: {
                    from: {
                        transform: "rotate(-360deg)",
                    },
                }
            })} />
       </div>
    )
}
