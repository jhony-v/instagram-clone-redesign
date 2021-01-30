import React from "react";
import Text from '@components/common/Text'
import { forwardRef } from "react";
import Link from "next/link";


export const UsernameTextBold = forwardRef(({ href, children, fluid }, ref) => {
    const style = {
        cursor : "pointer",
        lineHeight: "25px"
    }
    if (href) {
        return (
           <Link href={href}>
              <Text $weight $fluid={fluid} $style={style} ref={ref}>{children}</Text>
           </Link>
        )
    }
    return <Text $weight $fluid={fluid} $style={style} ref={ref}>{children}</Text>
});

export const NeutralTextDescription = forwardRef(({ children,fluid,$style }, ref) => {
    return (
       <Text $style={$style} $fontSize="small" $fluid={fluid} $color="var(--itg-root-dark-alpha-color-50)" ref={ref}>{children}</Text>
    )
})