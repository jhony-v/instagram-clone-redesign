import ScrollHorizontalStories from "@components/globals/ScrollHorizontalStories";
import UserAvatarStoryCreated from "@components/globals/UserAvatarStoryCreated";
import faker from "faker";

const ContainerUserStories = () => {
   return (
      <ScrollHorizontalStories data={Array(40).fill(0)}>
         {(item,index) => (
            <UserAvatarStoryCreated
               seen={index === 0}
               showRing={index > 1}
               isLoading={index ===1}
               image={faker.random.image()}
               username={faker.name.firstName("m")}
            />
         )}
      </ScrollHorizontalStories>
   );
};

export default ContainerUserStories;
