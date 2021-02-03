import React from 'react'
import ContainerDrawer from '@containers/ContainerDrawer'
import dynamic from 'next/dynamic'

const AsyncAccountApp = dynamic(()=>import("@modules/Account/AccountApp"),{
    ssr: false
})

export default function AccountPage() {
    return (
       <ContainerDrawer>
          <AsyncAccountApp />
       </ContainerDrawer>
    )
}
