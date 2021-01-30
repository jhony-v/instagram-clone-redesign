import React from 'react'
import ListGridMassonryItems from "@components/globals/ListGridMassonryItems";
import MainNewsFeedCard from "@components/globals/MainNewsFeedCard";
import Wrapper from "@components/common/Wrappers/Wrapper";
import faker from "faker";

const ExploreApp = () => {
    return (
       <Wrapper $p="40px 0">
          <ListGridMassonryItems>
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
       </Wrapper>)
}

export default ExploreApp
