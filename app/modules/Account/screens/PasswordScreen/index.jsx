import React from 'react'
import RowSidebarItem from '@modules/Account/components/RowSidebarItem'
import InputFormPasswordReset from './components/InputFormPasswordReset'
import UserAvatarInformationAccount from '@modules/Account/containers/UserAvatarInformationAccount'
import CallToActionButton from '@components/common/CommonButtons/CallToActionButton'
import Wrapper from '@components/common/Wrappers/Wrapper'
import Text from '@components/common/Text'

export default function PasswordScreen() {
   return (
      <div>
         <UserAvatarInformationAccount hideTextPrimary />
         <RowSidebarItem
            sidebar="Old Password"
            content={<InputFormPasswordReset />}
         />
         <RowSidebarItem
            sidebar="New Password"
            content={<InputFormPasswordReset />}
         />
         <RowSidebarItem
            sidebar="Confirm New Password"
            content={<InputFormPasswordReset />}
         />
         <RowSidebarItem
            content={
               <Wrapper>
                  <CallToActionButton>Change Password</CallToActionButton>
                  <Wrapper $m="20px 0">
                     <Text $color="var(--itg-app-text-call-to-action-color)" $weight $fontSize="small">Forgot Password?</Text>
                  </Wrapper>
               </Wrapper>
            }
         />
      </div>
   )
}
