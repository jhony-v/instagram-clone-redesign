import Wrapper from "@components/common/Wrappers/Wrapper";
import S from "./Atoms/elements";

const ScrollHorizontalStories = ({ data, children }) => {
   return (
      <S.WrapperHorizontalScrolling>
         {data.map((e, i) => (
            <Wrapper $m="0 20px 0 0" key={i}>
               {children(e)}
            </Wrapper>
         ))}
      </S.WrapperHorizontalScrolling>
   );
};

ScrollHorizontalStories.defaultProps = {
   data: [],
};

export default ScrollHorizontalStories;
