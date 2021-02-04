import React from 'react'
import FlexWrapper from '@components/common/Wrappers/FlexWrapper'
import Wrapper from '@components/common/Wrappers/Wrapper'
import { GridArea } from '@containers/PreviewCurrentUserPublication/components/PreviewLayout'
import {  withStyleDeep } from 'styletron-react'
import PublicationViewsDate from './containers/PublicationViewsDate'
import PublicationActions from './containers/PublicationActions'
import PublicationComment from './containers/PublicationComment'

const DetailOptionsWrapper = withStyleDeep(Wrapper, {
    height: "100%",
    padding: "16px"
})

export default function SidebarOptionsPublication() {
    return (
       <GridArea $area="sidebar-options" $style={{ flexDirection: "column" }}>
          <DetailOptionsWrapper>
             <PublicationActions />
             <PublicationViewsDate />
          </DetailOptionsWrapper>
          <PublicationComment />
       </GridArea>
    )
}
