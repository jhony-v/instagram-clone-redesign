import React from "react";
import Wrapper from "@components/common/Wrappers/Wrapper";
import MainProfileHeader from "./containers/MainProfileHeader/MainProfileHeader";
import DetailTabsNavigation from "./containers/DetailTabsNavigation/DetailTabsNavigation";
import ContainerUserStories from "@containers/ContainerUserStories";

const ProfileApp = () => {
   return (
      <Wrapper>
         <MainProfileHeader />
         <ContainerUserStories/>
         <DetailTabsNavigation />
      </Wrapper>
   );
};

export default ProfileApp;
