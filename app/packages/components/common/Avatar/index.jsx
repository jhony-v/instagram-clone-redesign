import { styled } from "styletron-react";

const S = {};
S.Avatar = styled("img", ({ $dimension,$isNew }) => ({
  width: $dimension,
  height: $dimension,
  borderRadius: "100%",
  "-webkit-user-drag" : "none",
  ...$isNew && {
      border:"2px solid white",
  }
}));

S.Wrapper = styled("div", ({ $isNew }) => ({
  display: "inline-flex",
  borderRadius: "100%",
  flex:"none",
  ...$isNew && {
      background : "linear-gradient(-65deg,var(--itg-app-primary-color),var(--itg-app-secondary-color))",
      padding:"2px",
  } 
}));

const Avatar = ({image,isNew,onClick,dimension}) => {
    return(
        <S.Wrapper $isNew={isNew} onClick={onClick}>
            <S.Avatar src={image} $dimension={dimension} $isNew={isNew} />
        </S.Wrapper>
    )
};

Avatar.defaultProps = {
    dimension : "40px"
}

export default Avatar;
