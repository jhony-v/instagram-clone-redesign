import React from "react";
import Wrapper from "@components/common/Wrappers/Wrapper";
import MainProfileHeader from "./containers/MainProfileHeader/MainProfileHeader";
import DetailTabsNavigation from "./containers/DetailTabsNavigation/DetailTabsNavigation";
import ContainerUserStories from "@containers/ContainerUserStories";
import PreviewOfTabNavigation from "./containers/PreviewOfTabNavigation/PreviewOfTabNavigation";

const ProfileApp = () => {
   return (
      <Wrapper>
         <MainProfileHeader />
         <ContainerUserStories />
         <DetailTabsNavigation />
         <PreviewOfTabNavigation />
      </Wrapper>
   );
};

export default ProfileApp;
