import Avatar from "@components/common/Avatar";
import Text from "@components/common/Text";
import FlexWrapper from "@components/common/Wrappers/FlexWrapper";
import Wrapper from "@components/common/Wrappers/Wrapper";

const UserAvatarStoryCreated = ({ image, username, onClick }) => {
  return (
    <FlexWrapper $column onClick={onClick}>
      <Avatar isNew image={image} dimension="60px" />
      <Wrapper $m="5px 0 0 0">
          <Text $fluid $center $weight>{username}</Text>
      </Wrapper>
    </FlexWrapper>
  );
};

export default UserAvatarStoryCreated;
