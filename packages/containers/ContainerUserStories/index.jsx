import ScrollHorizontalStories from '@components/globals/ScrollHorizontalStories'
import UserAvatarStoryCreated from '@components/globals/UserAvatarStoryCreated';
import faker from "faker";

const ContainerUserStories = () => {
    return (
        <ScrollHorizontalStories data={Array(40).fill(0)}>
            {(item)=>(
                <UserAvatarStoryCreated image={faker.random.image()} username="Jhony vega" />
            )}
        </ScrollHorizontalStories>
    )
}

export default ContainerUserStories
