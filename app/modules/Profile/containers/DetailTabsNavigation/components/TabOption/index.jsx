import React from 'react'
import Wrapper from '@components/common/Wrappers/Wrapper';
import * as S from "./elements";

const TabOption = ({ onClick, selected, text, icon: IconComponent }) => {
    return (
       <S.Wrapper $selected={selected} onClick={onClick}>
          {selected && <S.TopBar/>}
          <IconComponent size={20} />
          <Wrapper $m="0 0 0 10px">
             <S.TabText $selected={selected} >{text}</S.TabText>
          </Wrapper>
       </S.Wrapper>
    )
}

export default TabOption
