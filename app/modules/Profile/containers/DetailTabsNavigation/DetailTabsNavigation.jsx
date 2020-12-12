import React from "react";
import { RiPriceTagLine } from "react-icons/ri";
import { CgHashtag } from 'react-icons/cg';
import { BsGrid3X3 } from "react-icons/bs";
import TabOption from "./components/TabOption";
import TabsWrapperNavigation from "./components/TabsWrapperNavigation";

const DetailTabsNavigation = () => {
   return <TabsWrapperNavigation>
      <TabOption icon={BsGrid3X3} text="Posts" selected/>
      <TabOption icon={CgHashtag} text="Saved" />
      <TabOption icon={RiPriceTagLine} text="Taged" />
   </TabsWrapperNavigation>
};

export default DetailTabsNavigation;
