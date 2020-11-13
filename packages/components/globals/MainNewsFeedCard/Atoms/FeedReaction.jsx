import Text from "@components/common/Text";
import FlexWrapper from "@components/common/Wrappers/FlexWrapper";
import Wrapper from "@components/common/Wrappers/Wrapper";
import { memo } from "react";

const FeedReaction = ({ icon, children }) => {
  return (
    <Wrapper $m="0 0 0 10px">
      <FlexWrapper $alignCenter>
        <Wrapper $m="0 5px 0 0">{icon}</Wrapper>
        <Text>{children}</Text>
      </FlexWrapper>
    </Wrapper>
  );
};

export default memo(FeedReaction);
