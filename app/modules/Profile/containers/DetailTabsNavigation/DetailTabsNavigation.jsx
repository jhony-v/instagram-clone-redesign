import React, { useState } from "react";
import { RiPriceTagLine } from "react-icons/ri";
import { CgHashtag } from 'react-icons/cg';
import { BsGrid3X3 } from "react-icons/bs";
import TabOption from "./components/TabOption";
import TabsWrapperNavigation from "./components/TabsWrapperNavigation";
import TopLineAnimatable from "./components/TopLineAnimatable";

const DetailTabsNavigation = () => {
   const [x, setX] = useState(0);
   const [id, setId] = useState("posts");

   const bind = tabId => ({
      onTabOptionSelected({ id, offsetLeft }) {
         setX(offsetLeft);
         setId(id);
      },
      id: tabId,
      selected: tabId === id
   });

   return <TabsWrapperNavigation>
      <TopLineAnimatable fromX={0} toX={x} />
      <TabOption icon={BsGrid3X3} text="Posts"  {...bind("posts")} />
      <TabOption icon={CgHashtag} text="Saved" {...bind("saved")} />
      <TabOption icon={RiPriceTagLine} text="Taged" {...bind("taged")} />
   </TabsWrapperNavigation>
};

export default DetailTabsNavigation;
