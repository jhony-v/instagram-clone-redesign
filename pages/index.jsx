import LikeIcon from "@components/common/ReactionsIcons/LikeIcon";
import Wrapper from "@components/common/Wrappers/Wrapper";
import ListGridMassonryItems from "@components/globals/ListGridMassonryItems";
import MainNewsFeedCard from "@components/globals/MainNewsFeedCard";
import LayoutDividerWithTitle from "@components/layouts/LayoutDividerWithTitle";
import ContainerDrawer from "@containers/ContainerDrawer";
import ContainerUserStories from "@containers/ContainerUserStories";
import faker from "faker";

export default function Home() {
  return (
    <ContainerDrawer>
      <Wrapper $p="40px 0">
        <LayoutDividerWithTitle title="Stories">
          <ContainerUserStories />
        </LayoutDividerWithTitle>
      </Wrapper>
      <Wrapper>
        <LayoutDividerWithTitle title="Feed">
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
                    username: "Jhony vega",
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
        </LayoutDividerWithTitle>
      </Wrapper>
    </ContainerDrawer>
  );
}
