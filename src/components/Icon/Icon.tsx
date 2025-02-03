import { Config } from "../../config";

interface IconProps {
  code: string;
  size: number;
  title: string;
}

const Icon = ({ code, size, title }: IconProps) => {
  return (
    <img
      src={`${Config.IMG_BASE_URL}/img/wn/${code}.png`}
      title={title}
      style={{ width: size, height: size }}
    />
  );
};

export default Icon;
