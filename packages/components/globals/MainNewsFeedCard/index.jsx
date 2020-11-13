import S from "./Atoms/elements";
import FeedImagePreview from "./Atoms/FeedImagePreview";
import FeedFooter from "./Molecules/FeedFooter";

const MainNewsFeedCard = (props) => {
  const { user, image,likes,comments, ...restProps } = props;
  return (
    <S.CardWrapper {...restProps}>
      <FeedImagePreview image={image} alt="" />
      <FeedFooter user={user} likes={likes} comments={comments} />
    </S.CardWrapper>
  );
};

export default MainNewsFeedCard;
