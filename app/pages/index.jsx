import FloatingButtonCreateNewPost from "@containers/ContainerCreateNewPost/components/FloatingButtonCreateNewPost";
import ContainerDrawer from "@containers/ContainerDrawer";
import HomeApp from "@modules/Home/HomeApp";
import SEO from "packages/common/components/SEO";

export default function Index() {
   return (
      <ContainerDrawer>
         <SEO />
         <HomeApp/>     
         <FloatingButtonCreateNewPost />    
      </ContainerDrawer>
   );
}
