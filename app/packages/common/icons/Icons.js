import { VscHome } from "react-icons/vsc";
import { IoMdHome, IoMdCamera, IoMdPaperPlane } from "react-icons/io";
import {
   BsBookmark,
   BsFillBookmarkFill,
   BsHeart,
   BsFillHeartFill,
} from "react-icons/bs";
import { AiFillCompass, AiOutlineCompass } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
import { FiCamera } from "react-icons/fi";
import { GoComment } from "react-icons/go";

const Icons = {
   Home: {
      Default: VscHome,
      Active: IoMdHome,
   },
   Send: {
      Default: IoMdPaperPlane,
   },
   Bookmark: {
      Default: BsBookmark,
      Active: BsFillBookmarkFill,
   },
   Heart: {
      Default: BsHeart,
      Active: BsFillHeartFill,
   },
   Compass: {
      Default: AiOutlineCompass,
      Active: AiFillCompass,
   },
   Comment: {
      Default: GoComment,
      Active: GoComment,
   },
   Search: {
      Default: RiSearchLine,
      Active: RiSearchLine,
   },
   Camera: {
      Default: FiCamera,
      Active: IoMdCamera,
   },
};

export default Icons;
