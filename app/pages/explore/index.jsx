import faker from "faker";
import ListGridMassonryItems from "@components/globals/ListGridMassonryItems";
import MainNewsFeedCard from "@components/globals/MainNewsFeedCard";
import ContainerDrawer from "@containers/ContainerDrawer";
import Wrapper from "@components/common/Wrappers/Wrapper";

export default function index() {
   return (
      <ContainerDrawer>
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
         </Wrapper>
      </ContainerDrawer>
   );
}
