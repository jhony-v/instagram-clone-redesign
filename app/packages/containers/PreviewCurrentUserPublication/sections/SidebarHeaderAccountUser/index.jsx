import React from 'react'
import { GridArea, neutralBorder } from '@containers/PreviewCurrentUserPublication/components/PreviewLayout'
import faker from "faker"
import UserStoryAvatar from '@components/common/UserStoryAvatar'
import Text from '@components/common/Text'
import Wrapper from '@components/common/Wrappers/Wrapper'
import FlexWrapper from '@components/common/Wrappers/FlexWrapper'
import OptionPointsIcon from '@components/common/OptionPointsIcon'

export default function SidebarHeaderAccountUser() {
    return (
       <GridArea $area="sidebar-header" $style={{ borderBottom: neutralBorder, alignItems: "center", padding: "0 15px" }}>
          <Wrapper>
             <FlexWrapper $alignCenter>
                <UserStoryAvatar showRing image={faker.random.image()} dimension="40px" />
                <Wrapper $m="0 0 0 5px">
                   <Text $weight>Elon Musk Following</Text>
                </Wrapper>
             </FlexWrapper>
          </Wrapper>
          <Wrapper $m="auto 0 auto auto">
             <OptionPointsIcon direction="horizontal" />
          </Wrapper>
       </GridArea>
    )
}
