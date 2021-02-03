import React from 'react'
import Text from '@components/common/Text'
import Wrapper from '@components/common/Wrappers/Wrapper'
import FlexWrapper from '@components/common/Wrappers/FlexWrapper'
import CallToActionButton from '@components/common/CommonButtons/CallToActionButton'
import BorderBottomDivider from '@modules/Account/components/BorderBottomDivider'

export default function AccountScreen() {
   return (
      <Wrapper $p="0 10%">
         <Wrapper $m="20px 0 40px">
            <Text $fontSize="big">Manage Contacts</Text>
         </Wrapper>
         <Wrapper $m="0 0 40px">
            <Wrapper $m="0 0 30px" >
               <Text >The people listed here are contacts you've uploaded to Instagram. To remove your synced contacts, tap Delete All. Your contacts will be re-uploaded the next time Instagram syncs your contacts unless you go to your device settings and turn off access to contacts.</Text>
            </Wrapper>
            <Text>Only you can see your contacts, but Instagram uses the info you've uploaded about your contacts to make friend suggestions for you and others and to provide a better experience for everyone.</Text>
         </Wrapper>
         <Wrapper>
            <BorderBottomDivider $pv={10}>
               <FlexWrapper $spaceBetween $alignCenter>
                  <Text $weight>
                     0 Synced Contacts
                  </Text>
               </FlexWrapper>
            </BorderBottomDivider>
            <BorderBottomDivider>
               <Text>When you upload your contacts to Instagram, you'll see them here.</Text>
            </BorderBottomDivider>
         </Wrapper>
         <Wrapper $m="10px 0">
            <CallToActionButton>Delete All</CallToActionButton>
         </Wrapper>
      </Wrapper>
   )
}
