import { BiAdjust, BiArrowBack, BiCheckbox, BiPlus } from "react-icons/bi";

const ICONS_MAP: any = {
  plus: <BiPlus />,

  arrowback: <BiArrowBack />,

  logo: <BiAdjust />,

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
