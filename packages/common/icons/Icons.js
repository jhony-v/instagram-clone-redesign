import { VscHome } from "react-icons/vsc";
import { IoMdHome, IoMdPaperPlane } from "react-icons/io";
import { BsBookmark, BsFillBookmarkFill,BsHeart,BsFillHeartFill } from "react-icons/bs";
import { AiFillCompass, AiOutlineCompass } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
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
  Heart : {
    Default : BsHeart,
    Active:BsFillHeartFill
  },
  Compass: {
    Default: AiOutlineCompass,
    Active: AiFillCompass
  },
  Comment: {
    Default: GoComment
  },
  Search : {
    Default:RiSearchLine,
    Active: RiSearchLine
  }
};

export default Icons;
