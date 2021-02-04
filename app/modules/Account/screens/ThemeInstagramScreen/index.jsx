import CallToActionButton from '@components/common/CommonButtons/CallToActionButton';
import Text from '@components/common/Text';
import Wrapper from '@components/common/Wrappers/Wrapper';
import ListGridMassonryItems from '@components/globals/ListGridMassonryItems';
import MainNewsFeedCard from '@components/globals/MainNewsFeedCard';
import TitleTextDescription from '@modules/Account/components/TitleTextDescription';
import TitleTextWeight from '@modules/Account/components/TitleTextWeight';
import React  from 'react'
import { useStyletron } from 'styletron-react'
import CardRoundedGrid from './components/CardRoundedGrid';
import MenuButtonGroupTheme from './components/CheckThemeButtons/MenuButtonGroupTheme';
import MenuButtonTheme from './components/CheckThemeButtons/MenuButtonTheme';
import faker from "faker"

export default function AccountScreen() {
   const [css] = useStyletron();
   return (
      <div className={css({
         margin: "auto",
         width: "90%"
      })}>
         <div className={css({
            textAlign: "center"
         })}>
            <TitleTextDescription>Customize your view</TitleTextDescription>
            <Wrapper $m="10px 0 0">
               <Text $color="var(--itg-app-text-default-color-alpha-60)">Manage color and background. These settings affect all the Twitter accounts on this browser.</Text>
            </Wrapper>
         </div>
         <Wrapper $m="30px 0">
            <MainNewsFeedCard user={{
               avatar:faker.random.image(),
               username:"Mark"
            }} 
            image={faker.random.image()}
            likes={{
               total: 24,
               like:true
            }}
            comments={{
               total:20
            }}
            />
         </Wrapper>
         <Wrapper $m="20px 0">
            <TitleTextWeight>Choose a theme</TitleTextWeight>
            <CardRoundedGrid repeat={3} >
               <MenuButtonGroupTheme defaultValue="default">
                  <MenuButtonTheme text="Default" variant="default" name="bg_theme" />
                  <MenuButtonTheme text="Dim" variant="dim" name="bg_theme" />
                  <MenuButtonTheme text="Lights out"variant="lightsOut" name="bg_theme" />
               </MenuButtonGroupTheme>
            </CardRoundedGrid>
         </Wrapper>
         <CallToActionButton $style={{ margin: "20px auto 0" }}>Done</CallToActionButton>
      </div>
   )
}
