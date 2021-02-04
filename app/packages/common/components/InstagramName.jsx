import Link from "next/link";
import { styled } from "styletron-react";
import { mediaQueries } from "../breakpoints";

const InstagramWrapper = styled("div", ({ $fixed }) => ({
   ...($fixed && {
      position: "fixed",
      top: 0,
      left: "50px",
      display: "flex",
      alignItems: "center",
      height: "var(--itg-navigator-height)",
      [mediaQueries.tabletMedium]: {
         left: "10px",
      },
   }),
}));

export default function InstagramName({ fixed }) {
   return (
      <InstagramWrapper $fixed={fixed}>
         <Link href="/">
            <img src="/images/text_instagram.png" />
         </Link>
      </InstagramWrapper>
   );
}
