import React from 'react'
import FlexWrapper from "@components/common/Wrappers/FlexWrapper";
import Wrapper from "@components/common/Wrappers/Wrapper";
import ListGridMassonryItems from "@components/globals/ListGridMassonryItems";
import MainNewsFeedCard from "@components/globals/MainNewsFeedCard";
import LayoutDividerWithTitle from "@components/layouts/LayoutDividerWithTitle";
import ContainerSuggestedFriendsForUser from "@containers/ContainerSuggestedFriendsForUser";
import ContainerUserStories from "@containers/ContainerUserStories";
import faker from "faker";

const HomeApp = () => {
    return (
       <div>
          <FlexWrapper>
             <Wrapper $w="65%">
                <Wrapper $p="40px 0">
                   <LayoutDividerWithTitle title="Stories">
                      <ContainerUserStories />
                   </LayoutDividerWithTitle>
                </Wrapper>
                <Wrapper>
                   <LayoutDividerWithTitle title="Feed">
                      <ListGridMassonryItems repeat={2}>
                         {Array(10)
                                    .fill(0)
                                    .map((e, i) => (
                                       <MainNewsFeedCard
                                            key={i}
                                            $style={{
                                                width: "100%",
                                            }}
                                            user={{
                                                username: faker.name.firstName("m"),
                                                avatar: faker.random.image(),
                                            }}
                                            image={faker.random.image()}
                                            likes={{
                                                total: "20K",
                                                like: true,
                                            }}
                                            comments={{
                                                total: "10K",
                                            }}
                                        />
                                    ))}
                      </ListGridMassonryItems>
                   </LayoutDividerWithTitle>
                </Wrapper>
             </Wrapper>
             <Wrapper>
                <ContainerSuggestedFriendsForUser />
             </Wrapper>
          </FlexWrapper>

       </div>
    )
}

export default HomeApp
