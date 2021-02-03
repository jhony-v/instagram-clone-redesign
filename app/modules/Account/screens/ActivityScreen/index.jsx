import Wrapper from '@components/common/Wrappers/Wrapper'
import FieldsetDividerSection from '@modules/Account/components/FieldsetDividerSection'
import React from 'react'
import RowActivityCollapsable from './components/RowActivityCollapsable'
import TitleActivity from './components/TitleActivity'

export default function AccountScreen() {
    return (
       <div>
          <TitleActivity/>
          <Wrapper>
             <RowActivityCollapsable title="Huaral" description="This windows" isHere />
             <RowActivityCollapsable title="Huaral" description="This windows" />
             <RowActivityCollapsable title="Huaral" description="This windows" />
             <RowActivityCollapsable title="Huaral" description="This windows" />
          </Wrapper>
       </div>
    )
}
