import Text from '@components/common/Text'
import FlexWrapper from '@components/common/Wrappers/FlexWrapper'
import Wrapper from '@components/common/Wrappers/Wrapper'
import Link from 'next/link'
import React from 'react'

const HeaderTitle = () => {
    return (
       <Wrapper $m="0 0 20px">
          <FlexWrapper $spaceBetween>
             <Text $weight $color="var(--itg-root-dark-alpha-color-50)">Suggestions For You</Text>
             <Link href="/search/people">
                <Text $weight $fontSize="small" $style={{cursor:"pointer"}} $as="a">View all</Text>
             </Link>
          </FlexWrapper>
       </Wrapper>
    )
}

export default HeaderTitle
