import Icons from "@icons/Icons";
import BaseIconActivation from "../BaseIconActivation";

const LikeIcon = ({ like }) => {
  return (
    <BaseIconActivation
      icon={Icons.Heart}
      active={like}
      colorActive="var(--itg-reaction-like-active-color)"
    />
  );
};

export default LikeIcon;
