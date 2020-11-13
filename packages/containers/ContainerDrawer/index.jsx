import { styled } from "styletron-react";
import ContainerMainToolbarNavigator from "../ContainerMainToolbarNavigator";

const RootDrawer = styled("div", {
  marginTop: "var(--itg-navigator-height)",
});

const ContainerDrawer = ({ children }) => {
  return (
    <>
      <ContainerMainToolbarNavigator />
      <RootDrawer>{children}</RootDrawer>
    </>
  );
};

export default ContainerDrawer;
