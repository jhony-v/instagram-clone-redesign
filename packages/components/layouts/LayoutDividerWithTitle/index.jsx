import Text from "@components/common/Text";
import Wrapper from "@components/common/Wrappers/Wrapper";

const LayoutDividerWithTitle = ({ title,children }) => {
  return (
    <Wrapper>
      <Wrapper $m="0 0 2em">
        <Text $weight $fontSize="big">
          {title}
        </Text>
      </Wrapper>
      {children}
    </Wrapper>
  );
};

export default LayoutDividerWithTitle;
