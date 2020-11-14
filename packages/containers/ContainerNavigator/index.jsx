import BaseIconActivation from "@components/common/BaseIconActivation";
import FloatingActionButton from "@components/common/FloatingActionButton";
import Icons from "@icons/Icons";
import S from "./Atoms/elements";
import ItemNavigator from "./Atoms/ItemNavigator";

const ContainerNavigator = () => {
  return (
    <S.Wrapper>
      <ItemNavigator href="/" icon={Icons.Home} />
      <ItemNavigator href="/direct" icon={Icons.Search} />
      <ItemNavigator href="/explore" icon={Icons.Compass} />
      <ItemNavigator href="/heart" icon={Icons.Heart} />
    </S.Wrapper>
  );
};

ContainerNavigator.FloatingButtonCreateNewPost = ({ onClick }) => {
  return (
    <FloatingActionButton onClick={onClick}>
      <BaseIconActivation icon={Icons.Camera}  />
    </FloatingActionButton>
  );
};

export default ContainerNavigator;
