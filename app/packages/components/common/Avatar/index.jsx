import React, { forwardRef } from "react";
import { styled } from "styletron-react";

const S = {};
S.Avatar = styled("img", ({ $dimension }) => ({
   width: $dimension,
   height: $dimension,
   borderRadius: "100%",
   "-webkit-user-drag": "none",
}));


const Avatar = forwardRef(({ image, onClick, dimension }, ref) => {
   return (
      <S.Avatar src={image} $dimension={dimension} onClick={onClick} ref={ref} />
   );
});

Avatar.defaultProps = {
   dimension: "40px",
};

export default Avatar;
