import React from 'react'
import Wrapper from '@components/common/Wrappers/Wrapper';
import faker from "faker";
import SuggestedUser from '../components/SuggestedUser';

const ListSuggestedUsersToMe = () => {
    return (
       <Wrapper>
          {Array(5).fill(0).map((_, index) => (
             <SuggestedUser 
                key={index}
                avatar={faker.random.image()} 
                username={faker.name.firstName()} 
                description="Follows you" />
            ))}
       </Wrapper>
    )
}

export default ListSuggestedUsersToMe
