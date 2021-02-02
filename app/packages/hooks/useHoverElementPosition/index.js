import { useRef, useState } from "react";

export default function useHoverElementPosition() {
   const ref = useRef();
   const [pos, setPos] = useState({ x: 0, y: 0 });
   const [hover, setHover] = useState(false);

   const onMouseEnter = (e) => {
      setPos({
         x: e.target.offsetLeft,
         y: e.target.offsetTop,
      });
      setHover(true);
   };

   const onMouseLeave = () => {
      setHover(false);
      setPos({
         x: 0,
         y: 0,
      });
   };

   return {
      position: {
         x: pos.x,
         y: pos.y,
      },
      bind: {
         onMouseEnter,
         onMouseLeave,
      },
      hover,
      ref,
   };
}
