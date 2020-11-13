import { styled } from "styletron-react";
import ContainerMainToolbarNavigator from "../ContainerMainToolbarNavigator";

const RootDrawer = styled("div", {
  margin: "var(--itg-navigator-height) auto 0",
  width : "960px",
  maxWidth : "96%"
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
