import React from 'react'
import Wrapper from '@components/common/Wrappers/Wrapper';
import * as S from "./elements";

const TabOption = ({ onTabOptionSelected, id, selected, text, icon: IconComponent }) => {
   const onClick = (event) => {
      onTabOptionSelected({
         id,
         offsetLeft: event.currentTarget.offsetLeft
      });
   }
   return (
      <S.Wrapper onClick={onClick} $selected={selected}>
         <IconComponent size={20} />
         <Wrapper $m="0 0 0 10px">
            <S.TabText $selected={selected} >{text}</S.TabText>
         </Wrapper>
      </S.Wrapper>
   )
}

export default TabOption
