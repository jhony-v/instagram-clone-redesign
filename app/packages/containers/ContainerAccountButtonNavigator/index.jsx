import Avatar from "@components/common/Avatar";
import Text from "@components/common/Text";
import FlexWrapper from "@components/common/Wrappers/FlexWrapper";
import Wrapper from "@components/common/Wrappers/Wrapper";
import faker from "faker";
import S from "./Atoms/elements";

const ContainerAccountButtonNavigator = () => {
   return (
      <S.AccountButtonFixedWrapper>
         <FlexWrapper $alignCenter>
            <Wrapper $m="0 10px 0 0">
               <Text $weight>Marcos juan</Text>
            </Wrapper>
            <Avatar image={faker.random.image()} dimension="35px" />
         </FlexWrapper>
      </S.AccountButtonFixedWrapper>
   );
};

export default ContainerAccountButtonNavigator;
