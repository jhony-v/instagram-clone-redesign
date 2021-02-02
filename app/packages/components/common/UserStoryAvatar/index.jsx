import React from "react";
import { styled } from "styletron-react";

const Wrapper = styled("div", ({ $dimension }) => ({
    width: $dimension,
    height: $dimension,
    position: "relative",
    display: "flex",
    overflow: "hidden",
}))

const WrapperAnimatable = styled("div", ({ $seen, $isLoading, $showRing, $overlay }) => ({
    borderRadius: "100%",
    position: "absolute",
    left: "0",
    top: "0",
    bottom: "0",
    right: "0",
    margin: "auto",
    ...$seen && {
        backgroundColor: "var(--itg-root-dark-alpha-color-20)",
    },
    ...$isLoading && {
        background: `linear-gradient(45deg,var(--itg-app-primary-color) 30%,var(--itg-app-secondary-color) 50%, ${$overlay} 80%)`,
        animationDuration: "1s",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
        animationName: {
            from: {
                transform: "rotate(-360deg)"
            },
        }
    },
    ...$showRing && {
        background: "linear-gradient(45deg,var(--itg-app-primary-color) 30%,var(--itg-app-secondary-color) 50%)",
    }
}));

const Avatar = styled("img", ({ $dimension, $overlay }) => ({
    width: `calc(${$dimension} - 4px)`,
    height: `calc(${$dimension} - 4px)`,
    border: `2px solid ${$overlay}`,
    zIndex: "10000",
    objectFit: "cover",
    boxSizing: "border-box",
    margin: "auto",
    position: "relative",
    display: "block",
    borderRadius: "100%",
    background: $overlay,
}));

const UserStoryAvatar = ({ isLoading, seen, showRing, dimension, image,overlay }) => {
    return (
       <div>
          <Wrapper $dimension={dimension}>
             <WrapperAnimatable $seen={seen} $isLoading={isLoading} $showRing={showRing} $overlay={overlay} />
             <Avatar $dimension={dimension} src={image} $overlay={overlay} />
          </Wrapper>
       </div>
    )
}

UserStoryAvatar.defaultProps = {
    dimension: "50px",
    overlay: "var(--itg-app-background)"
}

export default UserStoryAvatar;
