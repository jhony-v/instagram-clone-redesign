import React from 'react'
import PreviewCurrentUserPublication from '@containers/PreviewCurrentUserPublication'
import Wrapper from '@components/common/Wrappers/Wrapper'

const PreviewPublicationApp = () => {
    return (
       <div>
          <Wrapper $p="40px 0">
             <PreviewCurrentUserPublication/>
          </Wrapper>
       </div>
    )
}

export default PreviewPublicationApp
