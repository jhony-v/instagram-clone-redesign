import BaseIconActivation from "@components/common/BaseIconActivation";
import FlexWrapper from "@components/common/Wrappers/FlexWrapper";
import Wrapper from "@components/common/Wrappers/Wrapper";
import LikePublication from "@containers/ContainerUserActions/LikePublication";
import Icons from "@icons/Icons";
import FeedReaction from "../Atoms/FeedReaction";
import FeedUserCreator from "../Atoms/FeedUserCreator";

const FeedFooter = ({ user, likes, comments }) => {
   return (
      <Wrapper $m="15px 0 0">
         <FlexWrapper $spaceBetween>
            <FeedUserCreator user={user} />
            <FlexWrapper $alignCenter>
               <FeedReaction icon={<LikePublication liked={likes.like} size={20} />}>
                  {likes.total}
               </FeedReaction>
               <FeedReaction icon={<BaseIconActivation size={20} icon={Icons.Comment} />}>
                  {comments.total}
               </FeedReaction>
            </FlexWrapper>
         </FlexWrapper>
      </Wrapper>
   );
};

export default FeedFooter;
