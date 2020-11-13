import Text from "@components/common/Text";
import Wrapper from "@components/common/Wrappers/Wrapper";
import S from "./Atoms/elements";

const ScrollHorizontalStories = ({ title, data, children }) => {
  return (
    <Wrapper $m="2em auto">
      <Wrapper $m="0 0 2em">
        <Text $weight $fontSize="big">
          {title}
        </Text>
      </Wrapper>
      <S.WrapperHorizontalScrolling>
        {data.map((e, i) => (
          <Wrapper $m="0 20px 0 0" key={i}>
            {children(e)}
          </Wrapper>
        ))}
      </S.WrapperHorizontalScrolling>
    </Wrapper>
  );
};

ScrollHorizontalStories.defaultProps = {
  title: "Stories",
};

export default ScrollHorizontalStories;
