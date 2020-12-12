import React from 'react'
import { WrapperFixed } from './Atoms/elements'
import HeaderTitle from './Atoms/HeaderTitle'
import ListSuggestedUsersToMe from './Molecules/ListSuggestedUsersToMe'

const ContainerSuggestedFriendsForUser = () => {
    return (
       <WrapperFixed>
          <HeaderTitle/>
          <ListSuggestedUsersToMe/>
       </WrapperFixed>
    )
}

export default ContainerSuggestedFriendsForUser
