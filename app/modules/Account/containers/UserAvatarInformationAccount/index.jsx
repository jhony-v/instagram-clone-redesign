import React from 'react'
import TitleTextWeight from '@modules/Account/components/TitleTextWeight'
import faker from "faker"
import Avatar from '@components/common/Avatar'
import { styled } from 'styletron-react'
import Wrapper from '@components/common/Wrappers/Wrapper'
import Text from '@components/common/Text'


const S = {
    Wrapper : styled("div",{
        display: "flex",
        alignItems: "center",
        marginBottom:"30px"
    }),
    Aside : styled("div",{
        width: "230px",
        display: "flex",
        justifyContent:"flex-end",
        padding:"0 30px"
    }),
    UserInformation: styled("div",{
        width:"100%"
    })
}

export default function UserAvatarInformationAccount({hideTextPrimary}) {
    return (
       <S.Wrapper>
          <S.Aside>
             <Avatar image={faker.random.image()} dimension="50px" />
          </S.Aside>
          <S.UserInformation>
             <TitleTextWeight $fontSize="medium" $thin>Jhony Vega</TitleTextWeight>
             {!hideTextPrimary && (
             <Wrapper $m="-5px 0 0">
                <Text $weight $color="var(--itg-app-text-call-to-action-color)" $fontSize="small">
                   Change Profile Photo
                </Text>
             </Wrapper>
                )}
          </S.UserInformation>
       </S.Wrapper>
    )
}
