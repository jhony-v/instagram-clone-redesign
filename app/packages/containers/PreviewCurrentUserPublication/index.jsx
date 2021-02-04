import React from 'react'
import { GridArea, GridWrapper, neutralBorder } from './components/PreviewLayout'
import SidebarDescriptionComments from './sections/SidebarDescriptionComments'
import SidebarHeaderAccountUser from './sections/SidebarHeaderAccountUser'
import SidebarOptionsPublication from './sections/SidebarOptionsPublication'


export default function PreviewCurrentUserPublication() {
    return (
       <GridWrapper>
          <GridArea $area="image" $style={{ borderRight: neutralBorder }}>
          </GridArea>
          <SidebarHeaderAccountUser/>
          <SidebarDescriptionComments/>
          <SidebarOptionsPublication/>
       </GridWrapper>
    )
}
