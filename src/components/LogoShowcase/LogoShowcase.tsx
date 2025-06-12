import { logoIconsList } from "../../constants";

interface LogoIconProps {
  name?: string;
  imgPath?: string;
}

const LogoIcon: React.FC<LogoIconProps> = ({ name, imgPath }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={imgPath} alt={name} />
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} name={icon.name} imgPath={icon.imgPath} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} name={icon.name} imgPath={icon.imgPath} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
