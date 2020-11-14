import Text from "@components/common/Text";
import Wrapper from "@components/common/Wrappers/Wrapper";
import { mediaQueries } from "packages/common/breakpoints";
import { styled, withStyleDeep } from "styletron-react";

const TitleWrapperDivider = styled("div", {
  margin: "0 0 2em",
  [mediaQueries.tabletMedium]: {
    marginBottom: "20px",
  },
});

const TitleDivider = withStyleDeep(Text, {
  fontWeight: "bold",
  fontSize: "1.6rem",
  [mediaQueries.tabletMedium]: {
    padding: "0 10px",
    fontSize: "1.3rem",
  },
});

const LayoutDividerWithTitle = ({ title, children }) => {
  return (
    <Wrapper>
      <TitleWrapperDivider>
        <TitleDivider>{title}</TitleDivider>
      </TitleWrapperDivider>
      {children}
    </Wrapper>
  );
};

export default LayoutDividerWithTitle;
