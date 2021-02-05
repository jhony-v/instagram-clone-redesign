import React from 'react'
import { GridArea, neutralBorder } from '@containers/PreviewCurrentUserPublication/components/PreviewLayout'
import UserGlobalComment from '@components/globals/UserGlobalComment'
import faker from "faker"
import Wrapper from '@components/common/Wrappers/Wrapper'

export default function SidebarDescriptionComments() {
    return (
       <GridArea $area="sidebar-comments" $style={{ borderBottom: neutralBorder,padding:"16px" }}>
          <Wrapper>
             <UserGlobalComment
             image={faker.random.image()} 
             username="jhony vega" 
             comment="This is a simple comment to see how I am writing"
             date="2d"
             totalLikes={235}
             />
             <UserGlobalComment
             image={faker.random.image()} 
             username="jhony vega" 
             comment="This is a simple comment to see how I am writing"
             date="2d"
             totalLikes={235}
             />
          </Wrapper>
       </GridArea>
    )
}
