import React from 'react'
import { Link } from "@reach/router"
import { useStyletron } from 'styletron-react';

export default function LinkItemAccount({ children, to }) {
    const [css] = useStyletron();

    return (
       <Link to={to} getProps={({ isCurrent }) => ({
            className: css({
                borderLeft: `2px solid ${isCurrent ? "black" : "transparent"}`,
                fontWeight: isCurrent ? "bold" : "normal",
                color: isCurrent ? "black" : "gray",
                padding: "20px 16%",
            })
        })}>{children}</Link>
    )
}
