import React from 'react'
import { Spring, config } from 'react-spring/renderprops.cjs'
import { styled } from 'styletron-react'

export const Line = styled("div", {
    height: "1px",
    backgroundColor: "var(--itg-app-text-default-color)",
})

const TopLineAnimatable = ({ fromX, toX }) => (
   <Spring
        config={config.gentle}
        from={{
            x: fromX,
        }}
        to={{
            x: toX
        }}
    >
      {({ x }) =>
         <div style={{
                position: "absolute",
                width: "150px",
                top: "-1px",
                left: x
            }}>
            <Line />
         </div>

        }
   </Spring>
);

export default TopLineAnimatable
