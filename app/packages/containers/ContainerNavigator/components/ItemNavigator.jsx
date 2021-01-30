import ActiveLink from "@components/common/ActiveLink";
import BaseIconActivation from "@components/common/BaseIconActivation";
import Wrapper from "@components/common/Wrappers/Wrapper";

const ItemNavigator = ({ icon, href }) => {
   return (
      <Wrapper $m="0 20px">
         <ActiveLink href={href}>
            {({ active }) => <BaseIconActivation active={active} icon={icon} />}
         </ActiveLink>
      </Wrapper>
   );
};

export default ItemNavigator;
