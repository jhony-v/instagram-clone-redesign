import React, { useState } from 'react'
import Text from '@components/common/Text'
import FlexWrapper from '@components/common/Wrappers/FlexWrapper'
import Wrapper from '@components/common/Wrappers/Wrapper'
import { GoLocation } from "react-icons/go"
import FieldsetDividerSection from '@modules/Account/components/FieldsetDividerSection'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

export default function RowActivityCollapsable({ children, title, description, isHere }) {
    const [ collapsable, setCollapsable ] = useState(false);
    const onToggleCollapsable = () => {
        setCollapsable(state => !state);
    }

    return (
       <FieldsetDividerSection $pv={20}>
          <FlexWrapper $spaceBetween $itemsCenter $style={{cursor:"pointer"}} onClick={onToggleCollapsable}>
             <FlexWrapper>
                <GoLocation size={22} color="var(--itg-app-icon-default-color)" />
                <Wrapper $m="0 10px">
                   <Text>{title}</Text>
                   <Wrapper $m="3px 0 0">
                      {isHere && (
                      <Text $color="#58c322" $style={{marginRight:"5px"}}>Active now</Text> 
                            )}
                      <Text $color="var(--itg-app-text-default-color-alpha-50)">{description}</Text>
                   </Wrapper>
                </Wrapper>
             </FlexWrapper>
             <Wrapper $m="0 0 0 auto">
                {collapsable ? <BsChevronUp size={20} /> : <BsChevronDown size={20} />}
             </Wrapper>
          </FlexWrapper>
          <Wrapper>
             {collapsable && children}
          </Wrapper>
       </FieldsetDividerSection>
    )
}
