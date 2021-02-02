import React from 'react'
import AccountApp from '@modules/Account/AccountApp'
import ContainerDrawer from '@containers/ContainerDrawer'

export default function Index() {
    return (
       <ContainerDrawer>
          <AccountApp/>
       </ContainerDrawer>
    )
}
