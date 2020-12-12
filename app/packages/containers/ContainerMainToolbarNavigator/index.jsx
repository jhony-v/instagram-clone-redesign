import LayoutHeader from "@components/layouts/LayoutHeader";
import ContainerAccountButtonNavigator from "@containers/ContainerAccountButtonNavigator";
import InstagramName from "packages/common/components/InstagramName";
import ContainerNavigator from "../ContainerNavigator";

const ContainerMainToolbarNavigator = () => {
   return (
      <LayoutHeader>
         <InstagramName fixed />
         <ContainerNavigator />
         <ContainerAccountButtonNavigator />
      </LayoutHeader>
   );
};

export default ContainerMainToolbarNavigator;
