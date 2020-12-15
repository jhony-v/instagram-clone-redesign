import { VscHome } from "react-icons/vsc";
import { IoMdHome, IoMdPaperPlane, IoMdCamera } from "react-icons/io";
import {
   BsBookmark,
   BsFillBookmarkFill,
   BsHeart,
   BsFillHeartFill,
} from "react-icons/bs";
import { AiFillCompass, AiOutlineCompass } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
import { FiCamera } from "react-icons/fi";
import { FaRegComment, FaComment } from "react-icons/fa";

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
      Default: FaRegComment,
      Active: FaComment,
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
