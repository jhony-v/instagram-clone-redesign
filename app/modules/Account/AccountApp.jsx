import React from 'react'
import { AccountCardWrapper, AccountCardWrapperMain } from './components/AccountCardWrapper'
import SidebarOptionsAccount from './containers/SidebarOptionsAccount'
import Routers from './routers'

const AccountApp = () => {
    return (
       <AccountCardWrapper>
          <SidebarOptionsAccount />
          <AccountCardWrapperMain>
             <Routers/>
          </AccountCardWrapperMain>
       </AccountCardWrapper>
    )
}

export default AccountApp
