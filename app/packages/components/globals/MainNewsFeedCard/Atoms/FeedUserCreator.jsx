import Avatar from "@components/common/Avatar";
import Text from "@components/common/Text";
import FlexWrapper from "@components/common/Wrappers/FlexWrapper";
import Wrapper from "@components/common/Wrappers/Wrapper";

const FeedUserCreator = ({ user }) => {
   return (
      <FlexWrapper $alignCenter>
         <Avatar image={user.avatar} isNew />
         <Wrapper $p="0 0 0 5px">
            <Text $weight>{user.username}</Text>
         </Wrapper>
      </FlexWrapper>
   );
};

export default FeedUserCreator;
