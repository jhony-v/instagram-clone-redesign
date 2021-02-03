import { AccountCardWrapperSidebar } from '@modules/Account/components/AccountCardWrapper'
import React from 'react'
import LinkItemAccount from './LinkItemAccount'

export default function SidebarOptionsAccount() {
    return (
       <AccountCardWrapperSidebar>
          <LinkItemAccount to="/account">Account</LinkItemAccount>
          <LinkItemAccount to="account/password">Password</LinkItemAccount>
          <LinkItemAccount to="account/apps">Apps and websites</LinkItemAccount>
          <LinkItemAccount to="account/sms">Email And SMS</LinkItemAccount>
          <LinkItemAccount to="account/notifications">Push Notifications</LinkItemAccount>
          <LinkItemAccount to="account/contacts">Manage Contacts</LinkItemAccount>
          <LinkItemAccount to="account/privacity">Privacity and Security</LinkItemAccount>
          <LinkItemAccount to="account/activity">Login activity</LinkItemAccount>
          <LinkItemAccount to="account/theme">Instagram Theme</LinkItemAccount>
       </AccountCardWrapperSidebar>
    )
}
