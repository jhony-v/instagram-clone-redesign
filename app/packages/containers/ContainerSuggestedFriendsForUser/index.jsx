import React from 'react'
import FixedWrapper from './components/FixedWrapper'
import HeaderTitle from './components/HeaderTitle'
import ListSuggestedUsersToMe from './containers/ListSuggestedUsersToMe'

const ContainerSuggestedFriendsForUser = () => {
    return (
       <FixedWrapper>
          <HeaderTitle/>
          <ListSuggestedUsersToMe/>
       </FixedWrapper>
    )
}

export default ContainerSuggestedFriendsForUser
