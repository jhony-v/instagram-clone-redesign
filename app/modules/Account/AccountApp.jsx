import React from 'react'
import { AccountCardWrapper, AccountCardWrapperMain } from './components/AccountCardWrapper'
import { Router } from "@reach/router"
import SidebarOptionsAccount from './containers/SidebarOptionsAccount'
import AccountScreen from './screens/AccountScreen'
import PasswordScreen from './screens/PasswordScreen'

const AccountApp = () => {
    return (
       <AccountCardWrapper>
          <SidebarOptionsAccount />
          <AccountCardWrapperMain>
             <Router basepath="/account">
                <AccountScreen path="/" />
                <PasswordScreen path="password" />
             </Router>
          </AccountCardWrapperMain>
       </AccountCardWrapper>
    )
}

export default AccountApp
