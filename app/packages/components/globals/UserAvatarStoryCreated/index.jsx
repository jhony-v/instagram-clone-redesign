import Avatar from "@components/common/Avatar";
import Text from "@components/common/Text";
import UserStoryAvatar from "@components/common/UserStoryAvatar";
import FlexWrapper from "@components/common/Wrappers/FlexWrapper";
import Wrapper from "@components/common/Wrappers/Wrapper";

const UserAvatarStoryCreated = ({ image, username, onClick, seen,isLoading,showRing }) => {
   return (
      <FlexWrapper $column onClick={onClick} $style={{cursor:"pointer"}}>
         <UserStoryAvatar  image={image} dimension="60px" seen={seen} isLoading={isLoading} showRing={showRing} />
         <Wrapper $m="5px 0 0 0">
            <Text $fluid $center $weight>
               {username}
            </Text>
         </Wrapper>
      </FlexWrapper>
   );
};

export default UserAvatarStoryCreated;
