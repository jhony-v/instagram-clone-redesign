import Icons from "@icons/Icons";
import BaseIconActivation from "../BaseIconActivation";

const LikeIcon = ({ like, ...restProps }) => {
   return (
      <BaseIconActivation
         icon={Icons.Heart}
         active={like}
         colorActive="var(--itg-reaction-like-active-color)"
         {...restProps}
      />
   );
};

export default LikeIcon;
