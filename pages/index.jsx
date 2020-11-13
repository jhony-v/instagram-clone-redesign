  import Wrapper from "@components/common/Wrappers/Wrapper";
import ContainerDrawer from "@containers/ContainerDrawer";
import ContainerUserStories from "@containers/ContainerUserStories";

export default function Home() {
  return (
    <ContainerDrawer>
      <Wrapper $w="80%" $m="auto" $p="10px 0">
        <ContainerUserStories />
      </Wrapper>
    </ContainerDrawer>
  );
}
