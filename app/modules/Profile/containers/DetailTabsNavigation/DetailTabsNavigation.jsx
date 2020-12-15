import React, { useState } from "react";
import { RiPriceTagLine } from "react-icons/ri";
import { CgHashtag } from 'react-icons/cg';
import { BsGrid3X3 } from "react-icons/bs";
import TabOption from "./components/TabOption";
import TabsWrapperNavigation from "./components/TabsWrapperNavigation";
import TopLineAnimatable from "./components/TopLineAnimatable";
import { PROFILE_TABS, useChangeTabsNavigationValue } from "@modules/Profile/hooks/useChangeTabsNavigation";

const DetailTabsNavigation = () => {
   const [x, setX] = useState(0);
   const currentTab = useChangeTabsNavigationValue();

   const bind = tabId => ({
      onTabOptionSelected({ offsetLeft }) {
         setX(offsetLeft);
      },
      id: tabId,
      selected: tabId === currentTab
   });

   return <TabsWrapperNavigation>
      <TopLineAnimatable fromX={0} toX={x} />
      <TabOption icon={BsGrid3X3} text="Posts"  {...bind(PROFILE_TABS.POSTS)} />
      <TabOption icon={CgHashtag} text="Saved" {...bind(PROFILE_TABS.SAVED)} />
      <TabOption icon={RiPriceTagLine} text="Taged" {...bind(PROFILE_TABS.TAGED)} />
   </TabsWrapperNavigation>
};

export default DetailTabsNavigation;
