import React from 'react'
import SpinnerDashed from '@components/common/SpinnerLoaders/SpinnerDashed'
import Text from '@components/common/Text'
import { styled } from 'styletron-react'
import Wrapper from '@components/common/Wrappers/Wrapper'

const WrapperLoading = styled("div",{
    position: "absolute",
    left:0,
    right:0,
    bottom:0,
    top:0,
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})


const Loader = styled("div",{
    textAlign:"center"
})

export default function LoadingScreenContent() {
    return (
       <WrapperLoading>
          <Loader>
             <SpinnerDashed/>
             <Wrapper $m="10px 0 0">
                <Text $fluid $weight $color="var(--itg-app-text-default-color-alpha-50)">Loading</Text>
             </Wrapper>
          </Loader>
       </WrapperLoading>
    )
}
