import Wrapper from "@components/common/Wrappers/Wrapper";
import React from "react";
import S from "./Atoms/elements";

const ListGridMassonryItems = ({ children }) => {
  return (
    <Wrapper $m="auto">
      <S.GridMassonry>{children}</S.GridMassonry>
    </Wrapper>
  );
};

export default ListGridMassonryItems;