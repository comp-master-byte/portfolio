import { 
  ReactIcon, 
  NextIcon, 
  TypeScriptIcon, 
  NodejsIcon,
  ExpressIcon,
  GithubIcon,
} from "./icons";

const icons = {
  react: ReactIcon,
  next: NextIcon,
  typescript: TypeScriptIcon,
  node: NodejsIcon,
  express: ExpressIcon,
  github: GithubIcon,
};

type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  width?: number;
  height?: number;
  className?: string;
};

export function Icon({ name, width, height, className }: IconProps) {
  const IconComponent = icons[name];

  return (
    <svg 
      style={{
        width,
        height
      }}
      className={className}
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <IconComponent />
    </svg>
  )
}