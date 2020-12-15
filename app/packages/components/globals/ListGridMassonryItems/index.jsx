import Wrapper from "@components/common/Wrappers/Wrapper";
import S from "./Atoms/elements";

const ListGridMassonryItems = ({ children, repeat, gap }) => {
   return (
      <Wrapper $m="auto">
         <S.GridMassonry $repeat={repeat} $gap={gap}>{children}</S.GridMassonry>
      </Wrapper>
   );
};

ListGridMassonryItems.defaultProps = {
   repeat: 3
}

export default ListGridMassonryItems;
