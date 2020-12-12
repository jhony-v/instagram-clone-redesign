import { styled } from "styletron-react";

const S = {};
S.Avatar = styled("img", ({ $isNew }) => ({
   borderRadius: "100%",
   "-webkit-user-drag": "none",
   width: "100%",
   height: "100%",
   ...($isNew && {
      border: "2px solid white",
   }),
}));

S.Wrapper = styled("div", ({ $isNew, $dimension }) => ({
   display: "inline-flex",
   borderRadius: "100%",
   width: $dimension,
   height: $dimension,
   flex: "none",
   ...($isNew && {
      background:
         "linear-gradient(-65deg,var(--itg-app-primary-color),var(--itg-app-secondary-color))",
      padding: "2px",
   }),
}));

const Avatar = ({ image, isNew, onClick, dimension }) => {
   return (
      <S.Wrapper $isNew={isNew} onClick={onClick} $dimension={dimension}>
         <S.Avatar src={image} $isNew={isNew} />
      </S.Wrapper>
   );
};

Avatar.defaultProps = {
   dimension: "40px",
};

export default Avatar;
