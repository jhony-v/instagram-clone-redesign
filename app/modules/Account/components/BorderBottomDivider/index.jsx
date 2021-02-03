import { styled } from "styletron-react";

export default styled("div", ({ $pv,$normalizeLast }) => ({
    padding: `${$pv || 40}px 0`,
    borderBottom: "1px solid var(--itg-root-dark-alpha-color-40)",
    ...$normalizeLast && {
        ":last-child" : {
            borderBottom: "none"
        },
    }
 }))