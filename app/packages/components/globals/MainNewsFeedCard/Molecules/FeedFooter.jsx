import Avatar from "@components/common/Avatar";
import BaseIconActivation from "@components/common/BaseIconActivation";
import LikeIcon from "@components/common/ReactionsIcons/LikeIcon";
import FlexWrapper from "@components/common/Wrappers/FlexWrapper";
import Wrapper from "@components/common/Wrappers/Wrapper";
import Icons from "@icons/Icons";
import FeedReaction from "../Atoms/FeedReaction";
import FeedUserCreator from "../Atoms/FeedUserCreator";

const FeedFooter = ({ user, likes, comments }) => {
   return (
      <Wrapper $m="15px 0 0">
         <FlexWrapper $spaceBetween>
            <FeedUserCreator user={user} />
            <FlexWrapper $alignCenter>
               <FeedReaction icon={<LikeIcon like={likes.like} />}>
                  {likes.total}
               </FeedReaction>
               <FeedReaction icon={<BaseIconActivation icon={Icons.Comment} />}>
                  {comments.total}
               </FeedReaction>
            </FlexWrapper>
         </FlexWrapper>
      </Wrapper>
   );
};

export default FeedFooter;
