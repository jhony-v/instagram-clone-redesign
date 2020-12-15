import React, { memo } from 'react'
import Text from "@components/common/Text";
import Wrapper from '@components/common/Wrappers/Wrapper';
import { styled, withStyleDeep } from "styletron-react";
import { useSetChangeTabsNavigationStore } from '@modules/Profile/hooks/useChangeTabsNavigation';

const TabWrapper = styled("div", ({ $selected }) => ({
   display: "flex",
   alignItems: "center",
   padding: "10px",
   cursor: "pointer",
   position: "relative",
   width: "150px",
   justifyContent: "center",
   transition: "color .3s",
   ...!$selected && {
      color: "var(--itg-root-dark-alpha-color-50)",
   },
}))

const TabText = withStyleDeep(Text, ({ $selected }) => ({
   textTransform: "uppercase",
   ...!$selected && {
      color: "var(--itg-root-dark-alpha-color-50)",
   }
}))

const TabOption = ({ onTabOptionSelected, id, selected, text, icon: IconComponent }) => {
   const changeTab = useSetChangeTabsNavigationStore();
   const onClick = (event) => {
      onTabOptionSelected({
         id,
         offsetLeft: event.currentTarget.offsetLeft
      });
      changeTab(id);
   }
   return (
      <TabWrapper onClick={onClick} $selected={selected}>
         <IconComponent size={20} />
         <Wrapper $m="0 0 0 10px">
            <TabText $selected={selected} >{text}</TabText>
         </Wrapper>
      </TabWrapper>
   )
}

export default memo(TabOption);
