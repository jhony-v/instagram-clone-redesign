import React from 'react'
import { GridWrapper } from './components/PreviewLayout'
import PreviewMediaResource from './sections/PreviewMediaResource'
import SidebarDescriptionComments from './sections/SidebarDescriptionComments'
import SidebarHeaderAccountUser from './sections/SidebarHeaderAccountUser'
import SidebarOptionsPublication from './sections/SidebarOptionsPublication'

export default function PreviewCurrentUserPublication() {
    return (
       <GridWrapper>
          <PreviewMediaResource/>
          <SidebarHeaderAccountUser/>
          <SidebarDescriptionComments/>
          <SidebarOptionsPublication/>
       </GridWrapper>
    )
}
