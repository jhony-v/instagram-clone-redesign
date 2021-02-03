import React from 'react'
import InputFormEditable from '@modules/Account/components/InputFormEditable'
import RowSidebarItem from '@modules/Account/components/RowSidebarItem'
import Wrapper from '@components/common/Wrappers/Wrapper'
import TitleTextWeight from '@modules/Account/components/TitleTextWeight'
import UserAvatarInformationAccount from '@modules/Account/containers/UserAvatarInformationAccount'

export default function AccountScreen() {
   return (
      <div>
         <UserAvatarInformationAccount />
         <RowSidebarItem
            sidebar="Name"
            content={
               <InputFormEditable 
               placeholder="Name" 
               detail={
                  <span>
                     Help people discover your account by using the name you're known by: either your full name, nickname, or business name.
                     <Wrapper $m="15px 0 0">
                        You can only change your name twice within 14 days.
                     </Wrapper>
                  </span>
               } />
            }
         />
         <RowSidebarItem
            sidebar="Username"
            content={
               <InputFormEditable 
               placeholder="Name" 
               detail="Help people discover your account by using the name you're known by: either your full name, nickname, or business name." />
            }
         />
         <RowSidebarItem
            sidebar="Website"
            content={
               <InputFormEditable placeholder="Website" />
            }
         />
         <RowSidebarItem
            sidebar="Bio"
            content={
               <InputFormEditable 
               placeholder="Bio" 
               detail={
                  <span>
                     <TitleTextWeight neutral>Personal Information</TitleTextWeight>
                     Help people discover your account by using the name you're known by: either your full name, nickname, or business name.
                  </span>
               } />
            }
         />
         <RowSidebarItem
            sidebar="Email"
            content={
               <InputFormEditable placeholder="Email" />
            }
         />
         <RowSidebarItem
            sidebar="Phone number"
            content={
               <InputFormEditable placeholder="Phone number" />
            }
         />
         <RowSidebarItem
            sidebar="Gender"
            content={
               <InputFormEditable placeholder="Gender" />
            }
         />
      </div>
   )
}
