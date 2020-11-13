import LayoutHeader from "@components/layouts/LayoutHeader";
import ContainerAccountButtonNavigator from "@containers/ContainerAccountButtonNavigator";
import ContainerNavigator from "../ContainerNavigator";

const ContainerMainToolbarNavigator = () => {
  return (
    <LayoutHeader>
      <ContainerNavigator />
      <ContainerAccountButtonNavigator/>
    </LayoutHeader>
  );
};

export default ContainerMainToolbarNavigator;
