import Avatar from "@components/common/Avatar";
import FlexWrapper from "@components/common/Wrappers/FlexWrapper";
import Wrapper from "@components/common/Wrappers/Wrapper";

const UserAccountDescriptive = ({ image, isNew, username, detail }) => {
   return (
      <FlexWrapper $alignCenter>
         <Avatar image={image} isNew={isNew} />
         <Wrapper $m="0 0 0 5px">
            <FlexWrapper $column>
               <Text weight>{username}</Text>
               <Wrapper $m="5px 0 0 0">
                  <Text>{detail}</Text>
               </Wrapper>
            </FlexWrapper>
         </Wrapper>
      </FlexWrapper>
   );
};

export default UserAccountDescriptive;
