import ContainerDrawer from "@containers/ContainerDrawer";
import SearchApp from "@modules/Search/SearchApp";

export default function Index() {
   return <ContainerDrawer>
      <SearchApp/>
   </ContainerDrawer>;
}
