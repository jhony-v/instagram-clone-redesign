import Text from '@components/common/Text'
import Wrapper from '@components/common/Wrappers/Wrapper'
import React from 'react'

const PublicationViewsDate = () => {
    return (
       <Wrapper>
          <Text $weight $fluid>55 views</Text>
          <Text $fontSize="small" $color="var(--itg-app-text-default-color-alpha-50)">December 34, 2020</Text>
       </Wrapper>
    )
}

export default PublicationViewsDate
