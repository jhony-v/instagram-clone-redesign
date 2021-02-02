import SuggestedPeopleItem from '@modules/Search/components/SuggestedPeopleItem'
import React from 'react'
import faker from "faker"

export default function ExploreListPeople() {
    return (
       <div>
          {Array(10).fill(0).map((e,i) => {
                return(
                   <SuggestedPeopleItem key={i} avatar={faker.random.image()} description="Software Developer" subtitle="156 followers" username="Jean del Arco"  />
                )
            })}
       </div>
    )
}
