import React from "react";
import useMeAuthenticate from "@hooks/useMeAuthenticate";
import CallToActionButton from "@components/common/CommonButtons/CallToActionButton";
import AccountFixedWrapper from "./components/AccountFixedWrapper";
import UserAccountInformationNavigator from "./components/UserAccountInformationNavigator";
import { useSetModalAuthentication } from "@hooks/useModalAuthentication";

const ContainerAccountButtonNavigator = () => {
   const { isAuthenticate, data } = useMeAuthenticate();
   const { openModal } = useSetModalAuthentication();
   return (
      <AccountFixedWrapper>
         {isAuthenticate && <UserAccountInformationNavigator avatar={data.avatar} username={data.username} />}
         {!isAuthenticate && (
            <>
               <CallToActionButton onClick={() => openModal()}>Log In</CallToActionButton>
               <CallToActionButton $underline onClick={() => openModal()}>Sign Up</CallToActionButton>
            </>
         )}
      </AccountFixedWrapper>
   );
};

export default ContainerAccountButtonNavigator;
