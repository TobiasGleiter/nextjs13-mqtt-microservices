import {
  BiAdjust,
  BiArrowBack,
  BiBible,
  BiCaretDown,
  BiCaretRight,
  BiCheckbox,
  BiChevronRight,
  BiDotsHorizontalRounded,
  BiGridHorizontal,
  BiGroup,
  BiListPlus,
  BiListUl,
  BiLogIn,
  BiLogOut,
  BiPlus,
  BiSearch,
  BiTachometer,
  BiUser,
} from "react-icons/bi";
import { ImArrowDown2, ImArrowUpRight2, ImSpinner9 } from "react-icons/im";
import { SiGithub, SiGoogle, SiNextdotjs } from "react-icons/si";

const ICONS_MAP: any = {
  nextjs: <SiNextdotjs />,
  github: <SiGithub />,
  google: <SiGoogle />,
  spinner: <ImSpinner9 />,
  arrowdown: <ImArrowDown2 />,
  arrowrightup: <ImArrowUpRight2 />,

  plus: <BiPlus />,

  caretright: <BiCaretRight />,
  caretdown: <BiCaretDown />,

  arrowback: <BiArrowBack />,

  dotmenu: <BiDotsHorizontalRounded />,

  drag: <BiGridHorizontal />,

  search: <BiSearch />,

  chevronright: <BiChevronRight />,

  logo: <BiAdjust />,
  dashboard: <BiTachometer />,
  equipment: <BiListUl />,
  newequipment: <BiListPlus />,
  sundayservice: <BiBible />,
  users: <BiGroup />,

  profile: <BiUser />,

  signin: <BiLogIn />,
  signout: <BiLogOut />,

  placeholder: <BiCheckbox />,
};

export interface IBaseIcon {
  icon: string;
  style?: string;
}

const BaseIcon: React.FC<IBaseIcon> = ({ icon, style }) => {
  let IconComponent = ICONS_MAP[icon].type;

  return <IconComponent className={style} />;
};

export default BaseIcon;
