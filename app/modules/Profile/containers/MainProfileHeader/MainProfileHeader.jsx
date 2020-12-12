import Avatar from "@components/common/Avatar";
import Wrapper from "@components/common/Wrappers/Wrapper";
import React from "react";
import faker from "faker"
import RootHeaderWrapper from "./components/RootHeaderWrapper";
import FlexWrapper from "@components/common/Wrappers/FlexWrapper";
import UserDescription from "./components/UserDescription";
import DetailTotalPunctuation from "./components/DetailTotalPunctuationActivity";
import UserMainAccountDescription from "./components/UserMainAccountDescription";

const MainProfileHeader = () => {
   return (
      <RootHeaderWrapper>
         <Wrapper>
            <Avatar image={faker.random.image()} dimension="200px" isNew />
         </Wrapper>
         <Wrapper $m="10px 0 10px 60px">
            <UserMainAccountDescription isFollowing location="Lima - Peru" username="LimJoe_Coder" />
            <Wrapper $m="20px 0">
               <FlexWrapper>
                  <DetailTotalPunctuation total={2352} text="Posts" />
                  <DetailTotalPunctuation total={2352} text="Followers" />
                  <DetailTotalPunctuation total={2352} text="Following" />
               </FlexWrapper>
            </Wrapper>
            <UserDescription fullName="Lim joe" description="Connect with friends, family and other people you know. Share photos and videos, send messages and get updates." />
         </Wrapper>
      </RootHeaderWrapper>
   );
};

export default MainProfileHeader;
