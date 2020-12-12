import Wrapper from "@components/common/Wrappers/Wrapper";
import S from "./Atoms/elements";

const ListGridMassonryItems = ({ children, repeat }) => {
   return (
      <Wrapper $m="auto">
         <S.GridMassonry $repeat={repeat}>{children}</S.GridMassonry>
      </Wrapper>
   );
};

ListGridMassonryItems.defaultProps = {
   repeat: 3
}

export default ListGridMassonryItems;
